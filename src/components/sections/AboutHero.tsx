"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, Heart, CheckCircle, Star } from "lucide-react";
import { STATS } from "@/lib/data";

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    desc: "We do what we say and say what we do. Honest pricing, transparent timelines, no surprises.",
  },
  {
    icon: Award,
    title: "Craftsman Quality",
    desc: "Every nail, every tile, every brushstroke — done with pride and professional skill.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    desc: "Your home is your most important investment. We treat it — and you — with the utmost respect.",
  },
  {
    icon: CheckCircle,
    title: "Accountability",
    desc: "We own our work. If something isn't right, we make it right. Guaranteed.",
  },
];

export default function AboutHero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-brand">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-2 mb-6">
              Built on Trust, Driven by Craftsmanship
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
              TAJEZAPH Services was founded by Emmanuel Louis with one mission: to give every Philadelphia homeowner access to the kind of quality craftsmanship and honest service that larger companies often lack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Emmanuel Louis - TAJEZAPH Services founder"
                className="rounded-2xl shadow-brand w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="section-title mt-2 mb-5">
                A Decade of Transforming Philadelphia Homes
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TAJEZAPH Services was born from a simple belief: homeowners deserve contractors who show up, do excellent work, and charge fair prices. Over 10 years ago, Emmanuel Louis started with a truck, a toolbox, and a commitment to excellence.
                </p>
                <p>
                  What began as a handyman operation quickly grew into a full-service home improvement company. Word spread — not through advertising, but through satisfied customers telling their neighbors about the contractor who actually did what he promised.
                </p>
                <p>
                  Today, TAJEZAPH Services has completed over 500 projects across Philadelphia, Bucks County, Montgomery County, Delaware County, and South Jersey. Our team of skilled craftsmen handles everything from quick repairs to complete home transformations.
                </p>
                <p>
                  <strong className="text-brand-blue-dark">Our mission is simple:</strong> Make your home better, your life easier, and the experience enjoyable.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-gray rounded-xl p-6 text-center"
              >
                <div className="font-heading font-black text-brand-blue text-3xl sm:text-4xl mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-10"
          >
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-card hover:shadow-brand transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon size={22} className="text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-brand-blue-dark text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-14 bg-brand-gray">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="section-label">Trust & Credentials</span>
          <h2 className="section-title mt-2 mb-8">Licensed, Insured & Certified</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PA Home Improvement Contractor License",
              "NJ Home Improvement License",
              "General Liability Insurance",
              "Workers' Compensation Insurance",
              "BBB Accredited Business",
              "Google Verified Business",
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-gray-100"
              >
                <Star size={14} className="text-brand-gold fill-brand-gold" />
                <span className="text-brand-blue-dark text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
