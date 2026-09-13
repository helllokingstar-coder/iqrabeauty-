export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'gallery'
  | 'advice'
  | 'contact'
  | 'blog'
  | 'blog-detail'
  | 'service-detail';

export type ServiceCategory =
  | 'all'
  | 'hair'
  | 'makeup'
  | 'bridal'
  | 'skincare'
  | 'nails'
  | 'spa';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'bridal' | 'skincare' | 'nails' | 'spa';
  subtitle: string;
  price: string;
  priceNumeric: number;
  duration: string;
  description: string;
  benefits: string[];
  features?: string[];
  procedureSteps: string[];
  image: string;
  isPopular?: boolean;
  recommendedFor?: string;
  aftercareTips?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'makeup' | 'bridal' | 'skin' | 'nails' | 'salon';
  image: string;
  description: string;
  stylist?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category:
    | 'Hair'
    | 'Makeup'
    | 'Bridal'
    | 'Skincare'
    | 'Facials'
    | 'Nails'
    | 'Spa'
    | 'Hair Color'
    | 'Hair Treatments'
    | 'Beauty Tips';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string[];
  keyTakeaways?: string[];
  featuredImage: string;
  tags: string[];
}

export interface ExpertAdviceArticle {
  id: string;
  title: string;
  category: 'Hair Care' | 'Hair Color' | 'Skin Care' | 'Bridal Beauty' | 'Makeup Prep' | 'Nail Care' | 'Aftercare';
  author: {
    name: string;
    title: string;
    avatar: string;
    experience: string;
    role?: string;
  };
  excerpt: string;
  keyTakeaways: string[];
  fullGuide: string[];
  content?: string[];
  tips?: string[];
  faqs?: { q: string; a: string }[];
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  service: string;
  review: string;
  clientImage: string;
  date: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  clientName: string;
  phone: string;
  email: string;
  preferredDate: string;
  timeSlot: string;
  stylistPreference: string;
  notes: string;
}
