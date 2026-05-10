import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us – TAJEZAPH Home Improvement",
  description:
    "Contact TAJEZAPH Services in Philadelphia. Call (267) 788-3933, email, or WhatsApp us. We serve Philadelphia, Bucks County, Montgomery County, Delaware County, and South Jersey.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-brand">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-2 mb-4">
            Contact TAJEZAPH Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have a question or ready to start your project? We&apos;d love to hear from you. Reach out any way you prefer.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="font-heading font-bold text-brand-blue-dark text-xl mb-6">
                  Reach Us Directly
                </h2>

                <div className="space-y-5">
                  <a
                    href="tel:+12677883933"
                    className="flex items-center gap-4 p-4 bg-brand-gray rounded-xl hover:bg-brand-blue/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Phone / Text</p>
                      <p className="font-heading font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors">
                        (267) 788-3933
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:emmanuellouis79@yahoo.com"
                    className="flex items-center gap-4 p-4 bg-brand-gray rounded-xl hover:bg-brand-blue/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Email</p>
                      <p className="font-heading font-bold text-brand-blue-dark group-hover:text-brand-blue transition-colors text-sm">
                        emmanuellouis79@yahoo.com
                      </p>
                    </div>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                      <p className="font-heading font-bold text-brand-blue-dark">Chat with us now →</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-brand-gray rounded-xl">
                    <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-brand-blue-dark" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Service Area</p>
                      <p className="font-heading font-bold text-brand-blue-dark text-sm">
                        Philadelphia, PA & Surrounding Areas
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Bucks, Montgomery, Delaware Counties · South Jersey
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-brand-gray rounded-xl">
                    <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-brand-blue-dark" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Business Hours</p>
                      <div className="text-sm text-brand-blue-dark font-medium space-y-0.5">
                        <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
                        <p>Saturday: 8:00 AM – 4:00 PM</p>
                        <p className="text-gray-500">Sunday: Emergency calls only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <p className="font-heading font-bold text-red-700 text-sm mb-1">
                  🚨 Emergency? Call Now
                </p>
                <p className="text-red-600 text-xs mb-3">
                  For urgent home damage (burst pipe, roof leak, etc.) — we do our best to respond quickly.
                </p>
                <a
                  href="tel:+12677883933"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone size={14} />
                  Emergency Line: (267) 788-3933
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h2 className="font-heading font-bold text-brand-blue-dark text-xl mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-6">We typically reply within a few hours.</p>
              <ContactForm />
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-10 bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="h-72 bg-brand-gray flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-brand-blue mx-auto mb-3 opacity-50" />
                <p className="text-gray-500 text-sm">Map — Serving Philadelphia, PA & Surrounding Areas</p>
                <p className="text-gray-400 text-xs mt-1">
                  Embed your Google Maps API key in the .env file to show a live map here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
