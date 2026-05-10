"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-blue-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.svg"
                alt="TAJEZAPH Services Logo"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-black text-white text-base tracking-wide">
                TAJEZAPH
              </span>
              <span className="text-brand-gold text-[10px] font-medium tracking-widest uppercase">
                Home Improvement
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-brand-gold bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+12677883933"
              className="flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              (267) 788-3933
            </a>
            <Button asChild size="sm" variant="gold">
              <Link href="/quote">Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-brand-blue-dark border-t border-white/10 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-brand-gold bg-white/10"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2 border-t border-white/10 mt-2">
                <a
                  href="tel:+12677883933"
                  className="flex items-center gap-2 px-4 py-3 text-white/80 hover:text-brand-gold transition-colors text-sm font-medium"
                >
                  <Phone size={16} />
                  (267) 788-3933
                </a>
                <Button asChild variant="gold" className="w-full">
                  <Link href="/quote">Request Free Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/consultation">Free Consultation</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
