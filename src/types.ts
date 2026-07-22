export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDetails?: {
    features: string[];
    specifications: string[];
    guarantee: string;
    longDescription: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  date: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  serviceType: string;
  propertyType: string;
  timeframe: string;
  notes: string;
}
