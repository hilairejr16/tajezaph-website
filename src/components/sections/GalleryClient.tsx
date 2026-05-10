"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Kitchen", "Bathroom", "Flooring", "Painting", "Carpentry", "Renovations"];

const galleryItems = [
  { id: 1, title: "Modern Kitchen Renovation", category: "Kitchen", before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80", location: "Philadelphia, PA" },
  { id: 2, title: "Spa Bathroom Remodel", category: "Bathroom", before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", location: "Cherry Hill, NJ" },
  { id: 3, title: "Hardwood Flooring Install", category: "Flooring", before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", after: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&q=80", location: "Bucks County, PA" },
  { id: 4, title: "Interior Repaint", category: "Painting", before: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&q=80", after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", location: "Montgomery County, PA" },
  { id: 5, title: "Built-In Bookshelves", category: "Carpentry", before: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80", after: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", location: "Delaware County, PA" },
  { id: 6, title: "Full Basement Renovation", category: "Renovations", before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80", location: "Philadelphia, PA" },
  { id: 7, title: "Kitchen Cabinet Refacing", category: "Kitchen", before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80", location: "South Philadelphia, PA" },
  { id: 8, title: "Master Bath Upgrade", category: "Bathroom", before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", location: "Northeast Philadelphia, PA" },
  { id: 9, title: "LVP Flooring Throughout", category: "Flooring", before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", after: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=600&q=80", location: "Voorhees, NJ" },
];

interface LightboxProps {
  item: typeof galleryItems[0];
  onClose: () => void;
}

function Lightbox({ item, onClose }: LightboxProps) {
  const [view, setView] = useState<"after" | "before">("after");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
        >
          <X size={28} />
        </button>

        <img
          src={view === "after" ? item.after : item.before}
          alt={`${item.title} - ${view}`}
          className="w-full rounded-xl max-h-[70vh] object-cover"
        />

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-white font-heading font-bold">{item.title}</p>
            <p className="text-white/60 text-sm">{item.location}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setView("before")}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${view === "before" ? "bg-red-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
            >
              Before
            </button>
            <button
              onClick={() => setView("after")}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${view === "after" ? "bg-green-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
            >
              After
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-brand-gray">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand-blue text-white shadow-brand"
                  : "bg-white text-gray-600 hover:bg-brand-gray-mid hover:text-brand-blue-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-card cursor-pointer hover:shadow-brand transition-shadow"
                onClick={() => setLightboxItem(item)}
              >
                <div className="grid grid-cols-2 gap-1 p-2 pb-0">
                  <div className="relative">
                    <img src={item.before} alt={`Before - ${item.title}`} className="w-full aspect-square object-cover rounded-lg" loading="lazy" />
                    <span className="absolute top-1.5 left-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">BEFORE</span>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt={`After - ${item.title}`} className="w-full aspect-square object-cover rounded-lg" loading="lazy" />
                    <span className="absolute top-1.5 left-1.5 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">AFTER</span>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-brand-blue-dark text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.location}</p>
                  </div>
                  <span className="bg-brand-gray text-brand-blue text-xs px-2 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-brand-blue-dark/0 group-hover:bg-brand-blue-dark/10 transition-colors rounded-xl flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-16">No projects in this category yet. Check back soon!</p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
