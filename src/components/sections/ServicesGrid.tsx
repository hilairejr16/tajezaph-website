"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Home, ChefHat, Bath, Layers, Paintbrush, Hammer, Wrench, Settings, Star
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Home, ChefHat, Bath, Layers, Paintbrush, Hammer, Wrench, Settings, Star,
  Tool: Wrench,
};

interface ServicesGridProps {
  limit?: number;
  showCTA?: boolean;
}

export default function ServicesGrid({ limit, showCTA = true }: ServicesGridProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="py-20 bg-brand-gray" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="font-heading font-black text-brand-blue-dark text-3xl sm:text-4xl mt-2 mb-4">
            Professional Home Improvement Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From full renovations to quick fixes, we handle every aspect of home improvement with expertise and care.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-xl p-6 shadow-card hover:shadow-brand transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold transition-colors">
                    <Icon size={22} className="text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-brand-blue-dark text-base mb-2 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {service.shortDesc}
                  </p>
                  <span className="text-brand-blue-light text-xs font-semibold group-hover:text-brand-gold transition-colors">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {showCTA && limit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <Button asChild size="lg" variant="default">
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
