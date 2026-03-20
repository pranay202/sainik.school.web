export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  eligibility: string;
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Result {
  id: string;
  name: string;
  exam: string;
  year: number;
  imageUrl: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
  };
}
