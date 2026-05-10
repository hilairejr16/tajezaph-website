"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Kitchen Renovation",
    location: "Philadelphia, PA",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
  },
  {
    title: "Bathroom Remodel",
    location: "Cherry Hill, NJ",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
    after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    title: "Flooring Installation",
    location: "Bucks County, PA",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    after: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&q=80",
  },
];

export default function BeforeAfterSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-brand-gray" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label">Our Work</span>
          <h2 className="section-title mt-2 mb-4">Before & After Transformations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real Philadelphia homeowners. See the quality difference TAJEZAPH brings to every project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-brand transition-shadow"
            >
              <div className="grid grid-cols-2 gap-1 p-3 pb-0">
                <div className="relative">
                  <img
                    src={project.before}
                    alt={`${project.title} - Before`}
                    className="w-full aspect-square object-cover rounded-lg"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={project.after}
                    alt={`${project.title} - After`}
                    className="w-full aspect-square object-cover rounded-lg"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-brand-blue-dark text-base">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button asChild size="lg" variant="default">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
