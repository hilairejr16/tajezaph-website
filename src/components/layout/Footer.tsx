import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const services = [
  { label: "Home Renovations", href: "/services/home-renovations" },
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Flooring", href: "/services/flooring" },
  { label: "Painting", href: "/services/painting" },
  { label: "Carpentry", href: "/services/carpentry" },
  { label: "Drywall Repair", href: "/services/drywall-repair" },
  { label: "Handyman Services", href: "/services/handyman-services" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Project Gallery", href: "/gallery" },
  { label: "Request a Quote", href: "/quote" },
  { label: "Free Consultation", href: "/consultation" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-white">
      {/* CTA Band */}
      <div className="bg-brand-gold py-4">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-blue-dark font-heading font-bold text-lg">
            Ready to start your project?
          </p>
          <div className="flex gap-3">
            <Link
              href="/quote"
              className="bg-brand-blue-dark text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-brand-blue transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+12677883933"
              className="bg-white text-brand-blue-dark px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="TAJEZAPH Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-black text-white text-base">TAJEZAPH</span>
                <span className="text-brand-gold text-[10px] font-medium tracking-widest uppercase">
                  Services – Home Improvement
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Philadelphia&apos;s trusted home improvement contractor. Quality craftsmanship, honest pricing, and guaranteed satisfaction on every project.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue-dark transition-colors text-white/70">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue-dark transition-colors text-white/70">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue-dark transition-colors text-white/70">
                <Youtube size={16} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-blue-dark transition-colors text-white/70">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.35 6.35 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.83 1.55V6.79a4.84 4.84 0 01-1.06-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-base">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/70 text-sm hover:text-brand-gold transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 text-sm hover:text-brand-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+12677883933" className="flex items-start gap-3 text-white/70 hover:text-brand-gold transition-colors text-sm">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  (267) 788-3933
                </a>
              </li>
              <li>
                <a href="mailto:emmanuellouis79@yahoo.com" className="flex items-start gap-3 text-white/70 hover:text-brand-gold transition-colors text-sm">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  emmanuellouis79@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Philadelphia, PA & Surrounding Areas
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <Clock size={16} className="mt-0.5 shrink-0" />
                  <div>
                    <p>Mon–Fri: 7am – 6pm</p>
                    <p>Sat: 8am – 4pm</p>
                    <p>Sun: Emergency only</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <p>© {currentYear} TAJEZAPH Services – Home Improvement. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
