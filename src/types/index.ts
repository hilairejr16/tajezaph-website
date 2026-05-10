export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDesc: string;
  icon: string;
  image: string;
  benefits: string[];
  features: string[];
  priceRange: string;
  duration: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  completionDate: string;
  location: string;
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface QuoteRequest {
  id?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  budget: string;
  description: string;
  files?: string[];
  status?: "new" | "reviewed" | "quoted" | "accepted" | "declined";
  createdAt?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: string;
}
