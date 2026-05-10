export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{7,15}$/),
  email: z.string().email(),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0),
});

const rateLimit = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const record = rateLimit.get(ip);
  if (!record || now > record.reset) {
    rateLimit.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (record.count >= 10) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ message: "Too many requests. Try again later." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const { name, phone, email, subject, message } = parsed.data;

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: `TAJEZAPH Website <${process.env.FROM_EMAIL || "noreply@tajezaphservices.com"}>`,
        to: process.env.CONTACT_EMAIL || "emmanuellouis79@yahoo.com",
        subject: `Contact: ${subject} — from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <h2 style="color: #1A3A5C;">New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
