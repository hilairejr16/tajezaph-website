import type { Service, Testimonial, FAQ, Project } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "home-renovations",
    title: "Home Renovations",
    shortDesc: "Complete home transformation from concept to completion.",
    description:
      "Transform your entire living space with our comprehensive home renovation services. From structural updates to cosmetic upgrades, we handle every detail with precision and craftsmanship.",
    icon: "Home",
    image: "/images/services/renovations.jpg",
    benefits: [
      "Increase your home's market value",
      "Modernize outdated spaces",
      "Improve energy efficiency",
      "Enhance curb appeal",
    ],
    features: [
      "Full project management",
      "Licensed & insured contractors",
      "Material sourcing & procurement",
      "Timeline guarantees",
      "Post-project walkthrough",
    ],
    priceRange: "Custom estimate",
    duration: "Varies by scope",
  },
  {
    id: "2",
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    shortDesc: "Dream kitchens built to your specifications and budget.",
    description:
      "The kitchen is the heart of your home. We design and build custom kitchens that combine beauty, functionality, and durability — cabinets, countertops, islands, and more.",
    icon: "ChefHat",
    image: "/images/services/kitchen.jpg",
    benefits: [
      "Most ROI of any home improvement",
      "Custom cabinetry & storage solutions",
      "Modern appliance integration",
      "Open-concept layouts available",
    ],
    features: [
      "Custom cabinet installation",
      "Countertop fabrication & installation",
      "Backsplash tile work",
      "Plumbing & electrical coordination",
      "Kitchen island construction",
    ],
    priceRange: "$5,000 – $50,000+",
    duration: "2–6 weeks",
  },
  {
    id: "3",
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortDesc: "Spa-quality bathrooms for everyday luxury.",
    description:
      "Turn your bathroom into a personal retreat. We handle full bathroom remodels including tile work, vanities, walk-in showers, soaking tubs, and all fixtures.",
    icon: "Bath",
    image: "/images/services/bathroom.jpg",
    benefits: [
      "High ROI on resale value",
      "Water-efficient upgrades",
      "Mold-resistant materials",
      "ADA-accessible options",
    ],
    features: [
      "Custom tile & stone work",
      "Walk-in shower installation",
      "Vanity & fixture installation",
      "Waterproofing systems",
      "Exhaust fan & lighting upgrades",
    ],
    priceRange: "$3,000 – $25,000+",
    duration: "1–4 weeks",
  },
  {
    id: "4",
    slug: "flooring",
    title: "Flooring",
    shortDesc: "Premium flooring installation for every room and budget.",
    description:
      "Beautiful floors transform a space instantly. We install hardwood, laminate, luxury vinyl, tile, and carpet — delivering flawless results that last for decades.",
    icon: "Layers",
    image: "/images/services/flooring.jpg",
    benefits: [
      "Dramatically improves home appearance",
      "Durable & easy-to-maintain options",
      "Pet & child-friendly materials available",
      "Increases home value",
    ],
    features: [
      "Hardwood & engineered wood",
      "Luxury vinyl plank (LVP)",
      "Ceramic & porcelain tile",
      "Subfloor preparation & leveling",
      "Transitions & trim installation",
    ],
    priceRange: "$2 – $15 per sq ft installed",
    duration: "1–5 days",
  },
  {
    id: "5",
    slug: "painting",
    title: "Interior & Exterior Painting",
    shortDesc: "Professional painting with flawless, long-lasting results.",
    description:
      "A fresh coat of paint is the most cost-effective transformation. Our professional painters deliver crisp lines, even coverage, and premium finishes inside and out.",
    icon: "Paintbrush",
    image: "/images/services/painting.jpg",
    benefits: [
      "Instant home refresh",
      "Protect surfaces from wear & weather",
      "Variety of premium paint brands",
      "Color consultation available",
    ],
    features: [
      "Interior & exterior painting",
      "Surface prep & priming",
      "Trim, door & cabinet painting",
      "Deck & fence staining",
      "Wallpaper removal",
    ],
    priceRange: "$300 – $5,000+",
    duration: "1–7 days",
  },
  {
    id: "6",
    slug: "carpentry",
    title: "Carpentry & Woodwork",
    shortDesc: "Custom carpentry crafted with precision and pride.",
    description:
      "From built-in shelves to custom trim work, our skilled carpenters bring your vision to life. Quality joinery and attention to detail in every project.",
    icon: "Hammer",
    image: "/images/services/carpentry.jpg",
    benefits: [
      "Custom fit to your exact space",
      "Premium wood selection",
      "Built-ins maximize storage",
      "Adds architectural character",
    ],
    features: [
      "Built-in shelving & bookcases",
      "Crown molding & trim installation",
      "Door & window casing",
      "Deck & stair construction",
      "Custom furniture & cabinetry",
    ],
    priceRange: "Custom estimate",
    duration: "Varies by project",
  },
  {
    id: "7",
    slug: "drywall-repair",
    title: "Drywall Repair & Installation",
    shortDesc: "Seamless drywall work — patches, repairs, and full installs.",
    description:
      "Holes, cracks, water damage — we fix it all. Our drywall specialists deliver seamless repairs and smooth finishes that blend perfectly with existing walls.",
    icon: "Wrench",
    image: "/images/services/drywall.jpg",
    benefits: [
      "Invisible repairs guaranteed",
      "Fire-resistant options available",
      "Sound-dampening solutions",
      "Quick turnaround",
    ],
    features: [
      "Hole & crack patching",
      "Water damage repair",
      "Texture matching",
      "Full room drywall installation",
      "Skim coating & finishing",
    ],
    priceRange: "$100 – $2,000",
    duration: "Same day – 3 days",
  },
  {
    id: "8",
    slug: "handyman-services",
    title: "Handyman Services",
    shortDesc: "No job too small — reliable help when you need it.",
    description:
      "Got a to-do list that never gets done? Our handyman service tackles all those small jobs efficiently and affordably. One call, done right.",
    icon: "Tool",
    image: "/images/services/handyman.jpg",
    benefits: [
      "Convenient single-contractor solution",
      "Affordable hourly & flat rates",
      "Fast scheduling",
      "Fully insured",
    ],
    features: [
      "Furniture assembly",
      "Shelf & TV mounting",
      "Caulking & weatherstripping",
      "Minor plumbing fixes",
      "Fixture installation",
    ],
    priceRange: "$75 – $150/hr",
    duration: "Hours to 1 day",
  },
  {
    id: "9",
    slug: "home-repairs",
    title: "Home Repairs & Maintenance",
    shortDesc: "Keep your home safe, functional, and well-maintained.",
    description:
      "Regular maintenance prevents costly emergencies. We handle all home repairs — from leaky roofs to broken windows — keeping your property in top condition year-round.",
    icon: "Settings",
    image: "/images/services/repairs.jpg",
    benefits: [
      "Prevent costly future repairs",
      "Maintain home safety",
      "Protect property value",
      "Emergency service available",
    ],
    features: [
      "General repairs & fixes",
      "Seasonal maintenance",
      "Gutter cleaning & repair",
      "Door & window repairs",
      "Weatherproofing",
    ],
    priceRange: "Custom estimate",
    duration: "Same day – 1 week",
  },
  {
    id: "10",
    slug: "custom-work",
    title: "Custom Projects",
    shortDesc: "Have a unique idea? We can build it.",
    description:
      "Not every project fits a template. We love custom work — from outdoor living spaces to unique architectural features. Bring your vision and we'll make it real.",
    icon: "Star",
    image: "/images/services/custom.jpg",
    benefits: [
      "Unique to your home & style",
      "Collaborative design process",
      "Full material flexibility",
      "One-of-a-kind results",
    ],
    features: [
      "Outdoor kitchen & living spaces",
      "Home additions",
      "Accent walls & features",
      "Custom storage solutions",
      "Specialty finishes",
    ],
    priceRange: "Custom estimate",
    duration: "Varies by scope",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Maria Johnson",
    location: "Philadelphia, PA",
    rating: 5,
    review:
      "TAJEZAPH completely transformed our kitchen! Emmanuel and his team were professional, on time, and the quality is outstanding. Our kitchen looks like it belongs in a magazine. Highly recommend!",
    service: "Kitchen Remodeling",
    date: "March 2024",
    verified: true,
  },
  {
    id: "2",
    name: "David Chen",
    location: "Cherry Hill, NJ",
    rating: 5,
    review:
      "We had extensive water damage in our bathroom and master bedroom. TAJEZAPH handled everything — drywall, flooring, painting. You'd never know it happened. Fair price and excellent communication throughout.",
    service: "Water Damage Restoration",
    date: "January 2024",
    verified: true,
  },
  {
    id: "3",
    name: "Patricia Williams",
    location: "Bucks County, PA",
    rating: 5,
    review:
      "Emmanuel is a true craftsman. He built custom built-in shelves in our living room and they are absolutely beautiful. Perfect fit, clean lines, painted to match. Worth every penny.",
    service: "Custom Carpentry",
    date: "November 2023",
    verified: true,
  },
  {
    id: "4",
    name: "Robert Martinez",
    location: "North Philadelphia, PA",
    rating: 5,
    review:
      "Called TAJEZAPH for a full basement renovation. They delivered beyond expectations — new flooring, fresh paint, recessed lighting, and a custom bar area. My family loves it. Great work at a fair price.",
    service: "Home Renovation",
    date: "September 2023",
    verified: true,
  },
  {
    id: "5",
    name: "Karen Thompson",
    location: "Delaware County, PA",
    rating: 5,
    review:
      "We just bought an older home and TAJEZAPH helped us with repairs, painting, and flooring throughout the whole house. Everything was done with care and attention to detail. Emmanuel is honest and reliable.",
    service: "Full Home Refresh",
    date: "July 2023",
    verified: true,
  },
  {
    id: "6",
    name: "James Robinson",
    location: "South Philadelphia, PA",
    rating: 5,
    review:
      "Bathroom remodel — exceeded all expectations. New tile, walk-in shower, vanity, and lighting. Done in 10 days as promised. Clean worksite, great communication, stunning results.",
    service: "Bathroom Remodeling",
    date: "May 2023",
    verified: true,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We offer free, no-obligation estimates for all projects. You can request a quote online or call us directly at (267) 788-3933. We typically respond within 24 hours.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. TAJEZAPH Services is fully licensed and insured in Pennsylvania and New Jersey. We carry general liability insurance and workers' compensation on every project.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Philadelphia and surrounding areas including Bucks County, Montgomery County, Delaware County, and across the border into New Jersey (Cherry Hill, Voorhees, Marlton, and neighboring towns).",
  },
  {
    question: "How long will my project take?",
    answer:
      "Project timelines vary based on scope. Handyman tasks may take a few hours. A bathroom remodel typically runs 1–3 weeks. Kitchen renovations 3–6 weeks. A full home renovation 2–4 months. We provide a detailed timeline with every estimate.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Yes. For projects that require permits (major renovations, structural work, electrical, plumbing), we coordinate the permitting process on your behalf. We know the local codes and requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check, Zelle, Venmo, and major credit cards. We typically require a deposit to begin work, with milestone payments and a final payment upon completion.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Yes. We stand behind our craftsmanship. We offer a 1-year labor warranty on all completed projects. Material warranties vary by manufacturer.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Absolutely! Visit our Gallery page to see photos and videos from our completed projects. You can also follow us on Instagram and Facebook for ongoing project updates.",
  },
];

export const STATS = [
  { number: "500+", label: "Projects Completed" },
  { number: "10+", label: "Years of Experience" },
  { number: "100%", label: "Satisfaction Guaranteed" },
  { number: "5★", label: "Average Rating" },
];
