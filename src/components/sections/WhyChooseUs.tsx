"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Clock, DollarSign, ThumbsUp, Award, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    desc: "We carry full liability insurance and workers' comp on every project. Your home and our team are always protected.",
  },
  {
    icon: Award,
    title: "10+ Years of Experience",
    desc: "Over a decade serving Philadelphia homeowners with hundreds of successful projects across every trade.",
  },
  {
    icon: DollarSign,
    title: "Honest, Transparent Pricing",
    desc: "No hidden fees, no surprises. We provide detailed written estimates before any work begins.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    desc: "We respect your time. Projects are completed on schedule with clear milestones and daily updates.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    desc: "We don't consider a job done until you're 100% satisfied. Our 1-year labor warranty backs every project.",
  },
  {
    icon: Headphones,
    title: "Always Responsive",
    desc: "Call, text, or WhatsApp us. We respond quickly and keep you informed throughout your project.",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading font-black text-brand-blue-dark text-3xl sm:text-4xl mt-2 mb-4">
              Philadelphia&apos;s Most Trusted Home Improvement Contractor
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since our founding, TAJEZAPH Services has built a reputation on quality, integrity, and delivering exactly what we promise. Homeowners trust us because we treat every project like it&apos;s our own home.
            </p>
            <div className="space-y-3">
              {["Free written estimates on all projects", "No subcontractors — our own skilled crew", "Clean, respectful worksite daily", "Real photos of completed work", "References available on request"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-gray rounded-xl p-5 hover:shadow-card transition-shadow"
              >
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center mb-3">
                  <reason.icon size={18} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-brand-blue-dark text-sm mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
