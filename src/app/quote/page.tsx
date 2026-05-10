import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";
import { Phone, MessageCircle, Clock, Shield } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Request a Free Quote – Home Improvement Estimate",
  description:
    "Request a free estimate from TAJEZAPH Services. Tell us about your project and we'll get back to you within 24 hours with a detailed, no-obligation quote.",
};

export default function QuotePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-brand">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            100% Free, No Obligation
          </span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-2 mb-4">
            Request Your Free Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll contact you within 24 hours with a detailed estimate. No pressure, no commitment required.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-5">
              {/* Quick Contact */}
              <div className="bg-brand-blue rounded-xl p-6 text-white">
                <h3 className="font-heading font-bold text-base mb-4">Prefer to Call?</h3>
                <a
                  href="tel:+12677883933"
                  className="flex items-center gap-3 mb-3 hover:text-brand-gold transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-semibold">(267) 788-3933</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-brand-gold transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Response time */}
              <div className="bg-white rounded-xl p-5 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} className="text-brand-gold" />
                  <h3 className="font-heading font-bold text-brand-blue-dark text-sm">Fast Response</h3>
                </div>
                <p className="text-gray-500 text-sm">We respond to all quote requests within 24 hours — usually much faster.</p>
              </div>

              {/* Trust */}
              <div className="bg-white rounded-xl p-5 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={18} className="text-brand-gold" />
                  <h3 className="font-heading font-bold text-brand-blue-dark text-sm">Your Info Is Safe</h3>
                </div>
                <p className="text-gray-500 text-sm">Your personal information is never sold or shared. We use it only to contact you about your project.</p>
              </div>

              {/* What to expect */}
              <div className="bg-white rounded-xl p-5 shadow-card">
                <h3 className="font-heading font-bold text-brand-blue-dark text-sm mb-3">What Happens Next</h3>
                <ol className="space-y-2 text-sm text-gray-600">
                  {[
                    "We review your project details",
                    "We call to discuss your needs",
                    "We schedule a free site visit",
                    "You receive a written estimate",
                    "No obligation to proceed",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-brand-gold text-brand-blue-dark text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-card p-8">
              <h2 className="font-heading font-bold text-brand-blue-dark text-xl mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                The more detail you provide, the more accurate our estimate will be.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
