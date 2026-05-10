"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(/^[\d\s\-\(\)\+]{7,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(5, "Please enter your full address").max(200),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().min(20, "Please describe your project in at least 20 characters").max(2000),
  honeypot: z.string().max(0, "Bot detected"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const services = [
  "Home Renovations",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring",
  "Interior & Exterior Painting",
  "Carpentry & Woodwork",
  "Drywall Repair & Installation",
  "Handyman Services",
  "Home Repairs & Maintenance",
  "Custom Project",
  "Multiple Services",
];

const budgets = [
  "Under $500",
  "$500 – $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setServerError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || "Something went wrong");
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Failed to send. Please call us at (267) 788-3933."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading font-black text-brand-blue-dark text-2xl mb-3">
          Quote Request Received!
        </h3>
        <p className="text-gray-600 mb-2">
          Thank you! We&apos;ll review your project details and contact you within 24 hours with a free estimate.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          For urgent requests, call us at{" "}
          <a href="tel:+12677883933" className="text-brand-blue font-semibold hover:underline">
            (267) 788-3933
          </a>
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="absolute opacity-0 pointer-events-none h-0 w-0"
        {...register("honeypot")}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            {...register("name")}
            placeholder="John Smith"
            className={cn(errors.name && "border-red-400 focus-visible:ring-red-400")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            {...register("phone")}
            type="tel"
            placeholder="(267) 555-0123"
            className={cn(errors.phone && "border-red-400 focus-visible:ring-red-400")}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          {...register("email")}
          type="email"
          placeholder="john@example.com"
          className={cn(errors.email && "border-red-400 focus-visible:ring-red-400")}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Project Address <span className="text-red-500">*</span>
        </label>
        <Input
          {...register("address")}
          placeholder="123 Main St, Philadelphia, PA 19103"
          className={cn(errors.address && "border-red-400 focus-visible:ring-red-400")}
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            {...register("service")}
            className={cn(
              "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors",
              errors.service && "border-red-400"
            )}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Estimated Budget <span className="text-red-500">*</span>
          </label>
          <select
            {...register("budget")}
            className={cn(
              "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-colors",
              errors.budget && "border-red-400"
            )}
          >
            <option value="">Select budget range...</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Project Description <span className="text-red-500">*</span>
        </label>
        <Textarea
          {...register("description")}
          rows={5}
          placeholder="Please describe your project in detail. What do you want done? Current condition? Any special requirements or deadline?"
          className={cn(errors.description && "border-red-400 focus-visible:ring-red-400")}
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {serverError}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        variant="gold"
        className="w-full font-bold text-base gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending Request...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Quote Request
          </>
        )}
      </Button>

      <p className="text-center text-gray-400 text-xs">
        We typically respond within 24 hours. Your information is 100% secure and never shared.
      </p>
    </form>
  );
}
