import type { Metadata } from "next";
import { Phone, Video, MapPin, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Consultation – Schedule Your Home Improvement Consult",
  description:
    "Schedule a free consultation with TAJEZAPH Services. Choose phone, video, or in-person. We'll discuss your project, answer questions, and outline the best approach.",
};

const consultationTypes = [
  {
    icon: Phone,
    title: "Phone Consultation",
    desc: "Quick 15–20 minute call to discuss your project scope, timeline, and get preliminary pricing guidance.",
    duration: "15–20 min",
    color: "bg-brand-blue",
  },
  {
    icon: Video,
    title: "Video Consultation",
    desc: "Show us your space via video call. We can assess the work needed and provide more accurate estimates.",
    duration: "20–30 min",
    color: "bg-purple-600",
  },
  {
    icon: MapPin,
    title: "In-Person Visit",
    desc: "We come to you for a comprehensive site walk-through. Best for larger projects and detailed written estimates.",
    duration: "30–60 min",
    color: "bg-brand-gold",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-brand">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            100% Free
          </span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-2 mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Not sure where to start? Let&apos;s talk. No sales pressure — just honest expert advice about your home improvement project.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* What you get */}
          <div className="bg-white rounded-2xl shadow-card p-8 mb-10">
            <h2 className="font-heading font-bold text-brand-blue-dark text-xl mb-6 text-center">
              What&apos;s Included in Your Free Consultation
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Professional assessment of your project",
                "Honest timeline estimates",
                "Preliminary budget guidance",
                "Material & finish recommendations",
                "Answers to all your questions",
                "No-pressure, no commitment required",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Types */}
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {consultationTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl shadow-card p-6 text-center hover:shadow-brand transition-shadow">
                <div className={`w-14 h-14 ${type.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <type.icon size={24} className={type.color === "bg-brand-gold" ? "text-brand-blue-dark" : "text-white"} />
                </div>
                <h3 className="font-heading font-bold text-brand-blue-dark text-base mb-2">{type.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{type.desc}</p>
                <span className="inline-block bg-brand-gray text-brand-blue-dark text-xs font-semibold px-3 py-1 rounded-full">
                  <Clock size={10} className="inline mr-1" />
                  {type.duration}
                </span>
              </div>
            ))}
          </div>

          {/* Calendly Embed */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="font-heading font-bold text-brand-blue-dark text-xl mb-2 text-center">
              Schedule Your Consultation
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Pick a time that works for you. We confirm within 2 hours.
            </p>

            {/* Calendly placeholder */}
            <div className="bg-brand-gray rounded-xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
              <Clock size={40} className="text-brand-blue mx-auto mb-4 opacity-50" />
              <p className="font-heading font-bold text-brand-blue-dark text-lg mb-2">
                Online Scheduling Coming Soon
              </p>
              <p className="text-gray-500 text-sm mb-4 max-w-sm">
                In the meantime, call or text us directly to schedule your free consultation.
              </p>
              <a
                href="tel:+12677883933"
                className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
              >
                <Phone size={16} />
                Call to Schedule: (267) 788-3933
              </a>
              <p className="text-gray-400 text-xs mt-4">
                To add Calendly scheduling: sign up at calendly.com and paste your embed URL in .env
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-500" /> No credit card required
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-500" /> Cancel anytime
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-500" /> 100% free
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
