"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";

export default function VideoSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="section-label">See Our Work In Action</span>
          <h2 className="section-title mt-2 mb-4">Project Walkthroughs & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our team in action — see how we transform homes across the Philadelphia area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-brand-blue-dark rounded-2xl overflow-hidden aspect-video group cursor-pointer shadow-brand"
        >
          {/* Placeholder for YouTube embed — replace src with real video ID */}
          <div className="absolute inset-0 bg-gradient-brand opacity-80" />
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
            alt="TAJEZAPH project video thumbnail"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
              <Play size={32} className="text-brand-blue-dark ml-1" />
            </div>
            <div className="text-center text-white">
              <p className="font-heading font-bold text-xl">Full Kitchen Renovation Walkthrough</p>
              <p className="text-white/70 text-sm">Philadelphia, PA · Completed in 3 weeks</p>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Follow us on{" "}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline">
            YouTube
          </a>{" "}
          &{" "}
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-semibold hover:underline">
            TikTok
          </a>{" "}
          for more project videos
        </p>
      </div>
    </section>
  );
}
