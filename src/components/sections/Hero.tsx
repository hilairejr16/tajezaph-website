"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle, Star, Shield, Award, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-brand" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award size={14} className="text-brand-gold" />
            Philadelphia&apos;s Trusted Home Improvement Contractor
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
          >
            Transform Your Home With{" "}
            <span className="text-brand-gold">Expert Craftsmanship</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed"
          >
            From full renovations to quick repairs — TAJEZAPH Services delivers quality workmanship, honest pricing, and results you&apos;ll love. Serving Philadelphia and surrounding areas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Button asChild size="xl" variant="gold" className="font-bold shadow-gold">
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="white">
              <Link href="/consultation">Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="whatsapp"
              className="gap-2"
            >
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                WhatsApp Chat
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-5"
          >
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Shield size={14} className="text-brand-gold" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Award size={14} className="text-brand-gold" />
              500+ Projects Completed
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Phone size={14} className="text-brand-gold" />
              <a href="tel:+12677883933" className="hover:text-white transition-colors">
                (267) 788-3933
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 animate-float"
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
