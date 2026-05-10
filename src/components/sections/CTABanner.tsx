"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to Transform Your Home?",
  subtitle = "Get a free estimate today — no obligation, no pressure. Just honest advice from a trusted local contractor.",
}: CTABannerProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 bg-gradient-brand" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="xl" variant="gold" className="font-bold shadow-gold">
              <Link href="/quote">Request Free Quote</Link>
            </Button>
            <Button asChild size="xl" variant="white">
              <a href="tel:+12677883933" className="flex items-center gap-2">
                <Phone size={18} />
                Call (267) 788-3933
              </a>
            </Button>
            <Button asChild size="xl" variant="whatsapp">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
