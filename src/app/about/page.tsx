import type { Metadata } from "next";
import { motion } from "framer-motion";
import { Shield, Award, Heart, Users } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import AboutHero from "@/components/sections/AboutHero";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About Us – TAJEZAPH Home Improvement",
  description:
    "Learn about TAJEZAPH Services – Philadelphia's trusted home improvement contractor. Over 10 years of experience, 500+ projects completed, and a commitment to quality craftsmanship.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CTABanner
        title="Let's Build Something Together"
        subtitle="Contact us today for a free consultation and estimate. No pressure — just honest advice."
      />
    </>
  );
}
