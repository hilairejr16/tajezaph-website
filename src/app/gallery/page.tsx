import type { Metadata } from "next";
import GalleryClient from "@/components/sections/GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery – Before & After Transformations",
  description:
    "Browse TAJEZAPH's project gallery — real before & after photos of renovations, kitchen remodels, bathroom upgrades, flooring, painting, and more. Philadelphia area home improvements.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-brand">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Our Portfolio
          </span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-2 mb-4">
            Project Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Real projects. Real results. Browse our before & after transformations from across the Philadelphia area.
          </p>
        </div>
      </section>
      <GalleryClient />
    </>
  );
}
