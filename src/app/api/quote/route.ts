import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{7,15}$/),
  email: z.string().email(),
  address: z.string().min(5).max(200),
  service: z.string().min(1),
  budget: z.string().min(1),
  description: z.string().min(20).max(2000),
  honeypot: z.string().max(0),
});

const rateLimit = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 5;

  const record = rateLimit.get(ip);
  if (!record || now > record.reset) {
    rateLimit.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, email, address, service, budget, description } = parsed.data;

    // Send notification email to business
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: `TAJEZAPH Website <${process.env.FROM_EMAIL || "noreply@tajezaphservices.com"}>`,
        to: process.env.CONTACT_EMAIL || "emmanuellouis79@yahoo.com",
        subject: `New Quote Request: ${service} from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1A3A5C; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 20px;">New Quote Request</h1>
              <p style="margin: 4px 0 0; opacity: 0.8; font-size: 14px;">TAJEZAPH Services Website</p>
            </div>
            <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Address</td><td style="padding: 8px 0;">${address}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e5e7eb;">
                <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px; font-weight: 600;">Project Description</p>
                <p style="margin: 0; white-space: pre-wrap;">${description}</p>
              </div>
              <div style="margin-top: 20px; text-align: center;">
                <a href="tel:${phone}" style="display: inline-block; background: #F5A623; color: #1A3A5C; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; margin-right: 8px;">Call Customer</a>
                <a href="mailto:${email}" style="display: inline-block; background: #1A3A5C; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700;">Email Customer</a>
              </div>
            </div>
          </div>
        `,
      });

      // Auto-reply to customer
      await resend.emails.send({
        from: `TAJEZAPH Services <${process.env.FROM_EMAIL || "noreply@tajezaphservices.com"}>`,
        to: email,
        subject: "Quote Request Received — TAJEZAPH Home Improvement",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1A3A5C; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 22px;">We Got Your Request!</h1>
            </div>
            <div style="padding: 28px; background: #f9fafb; border-radius: 0 0 8px 8px;">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out to TAJEZAPH Services. We've received your quote request for <strong>${service}</strong> and will review the details shortly.</p>
              <p><strong>What happens next:</strong></p>
              <ul>
                <li>We'll review your project details within 24 hours</li>
                <li>We'll contact you by phone or email to schedule a free consultation</li>
                <li>We'll provide a detailed written estimate at no charge</li>
              </ul>
              <p>For urgent matters, call or text us directly:</p>
              <div style="text-align: center; margin: 20px 0;">
                <a href="tel:+12677883933" style="display: inline-block; background: #F5A623; color: #1A3A5C; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 16px;">(267) 788-3933</a>
              </div>
              <p style="color: #6b7280; font-size: 13px;">TAJEZAPH Services – Home Improvement | Philadelphia, PA</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Quote request submitted successfully" });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
