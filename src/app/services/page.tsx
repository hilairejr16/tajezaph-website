import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services – Home Improvement, Renovations & Repairs",
  description:
    "Explore all TAJEZAPH Services offerings: kitchen & bathroom remodeling, flooring, painting, carpentry, drywall repair, handyman services, and custom projects. Philadelphia & surrounding areas.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-brand">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            What We Offer
          </span>
          <h1 className="font-heading font-black text-white text-4xl sm:text-5xl mt-2 mb-4">
            Professional Home Improvement Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From full renovations to quick repairs — every service delivered with expert craftsmanship, transparent pricing, and a satisfaction guarantee.
          </p>
        </div>
      </section>

      <ServicesGrid showCTA={false} />

      <CTABanner />
    </>
  );
}
