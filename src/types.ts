export interface Treatment {
  id: string;
  name: string;
  category: 'clinical' | 'aesthetic' | 'hair' | 'allergy';
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  symptoms: string[];
  iconName: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  treatment: string;
  comment: string;
  verified: boolean;
}

export interface BeforeAfterCase {
  id: string;
  treatmentName: string;
  duration: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  problem: string;
  preferredDate: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}
