export interface ServiceCard {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface InsurancePlan {
  id: string;
  title: string;
  image: string;
  description: string;
  features?: string[];
}

export interface Review {
  id: string;
  rating: number;
  totalReviews: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  name: string;
}
