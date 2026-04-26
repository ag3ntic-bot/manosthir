export interface ServiceType {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  icon: string;
}

export interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: string;
  focusAreas: string[];
  linkText: string;
  emotionalHook?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  imageGradient: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SessionType {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  icon: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
