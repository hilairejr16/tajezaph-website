"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{7,15}$/, "Valid phone required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject required").max(150),
  message: z.string().min(10, "Message too short").max(2000),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSubmitted(true);
      reset();
    } catch {
      setServerError("Failed to send. Please call (267) 788-3933 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="font-heading font-black text-brand-blue-dark text-xl mb-2">Message Sent!</h3>
        <p className="text-gray-600 text-sm">We&apos;ll get back to you within 24 hours.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" size="sm" className="mt-4">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <input type="text" tabIndex={-1} aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 w-0" {...register("honeypot")} />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name *</label>
          <Input {...register("name")} placeholder="Your name" className={cn(errors.name && "border-red-400")} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
          <Input {...register("phone")} type="tel" placeholder="(267) 555-0123" className={cn(errors.phone && "border-red-400")} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
        <Input {...register("email")} type="email" placeholder="you@example.com" className={cn(errors.email && "border-red-400")} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
        <Input {...register("subject")} placeholder="How can we help?" className={cn(errors.subject && "border-red-400")} />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
        <Textarea {...register("message")} rows={5} placeholder="Tell us about your project or question..." className={cn(errors.message && "border-red-400")} />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">{serverError}</div>
      )}

      <Button type="submit" size="lg" variant="default" className="w-full gap-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </Button>
    </form>
  );
}
