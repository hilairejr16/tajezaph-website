import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tajezaphservices.com"),
  title: {
    default: "TAJEZAPH Services – Home Improvement | Philadelphia, PA Contractor",
    template: "%s | TAJEZAPH Home Improvement",
  },
  description:
    "Philadelphia's trusted home improvement contractor. Expert renovations, kitchen & bathroom remodeling, flooring, painting, carpentry & more. Licensed, insured, 500+ projects. Free estimates.",
  keywords: [
    "home improvement Philadelphia",
    "contractor Philadelphia PA",
    "kitchen remodeling Philadelphia",
    "bathroom renovation Philadelphia",
    "home renovation contractor",
    "flooring installation Philadelphia",
    "painting contractor Philadelphia",
    "handyman Philadelphia",
    "drywall repair Philadelphia",
    "TAJEZAPH services",
  ],
  authors: [{ name: "TAJEZAPH Services" }],
  creator: "TAJEZAPH Services",
  publisher: "TAJEZAPH Services",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tajezaphservices.com",
    siteName: "TAJEZAPH Services",
    title: "TAJEZAPH Services – Home Improvement | Philadelphia Contractor",
    description:
      "Philadelphia's trusted home improvement contractor. Quality renovations, remodeling & repairs. Licensed & insured. Free estimates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TAJEZAPH Services – Home Improvement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAJEZAPH Services – Philadelphia Home Improvement Contractor",
    description: "Quality home renovations, remodeling & repairs. Serving Philadelphia & surrounding areas.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://tajezaphservices.com",
              name: "TAJEZAPH Services – Home Improvement",
              image: "https://tajezaphservices.com/og-image.jpg",
              description:
                "Philadelphia's trusted home improvement contractor specializing in renovations, remodeling, flooring, painting, carpentry and repairs.",
              url: "https://tajezaphservices.com",
              telephone: "+1-267-788-3933",
              email: "emmanuellouis79@yahoo.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Philadelphia",
                addressRegion: "PA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.9526",
                longitude: "-75.1652",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/tajezaphservices",
                "https://www.instagram.com/tajezaphservices",
                "https://www.youtube.com/@tajezaphservices",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Home Improvement Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Renovations" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior & Exterior Painting" } },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "89",
                bestRating: "5",
              },
            }),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
