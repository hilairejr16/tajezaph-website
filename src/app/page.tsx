import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import VideoSection from "@/components/sections/VideoSection";

export const metadata: Metadata = {
  title: "TAJEZAPH Services – Home Improvement | Philadelphia, PA Contractor",
  description:
    "Philadelphia's #1 home improvement contractor. Renovations, kitchen & bathroom remodeling, flooring, painting, carpentry & handyman services. Free estimates. Call (267) 788-3933.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid limit={8} showCTA />
      <WhyChooseUs />
      <BeforeAfterSection />
      <TestimonialsCarousel />
      <VideoSection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
