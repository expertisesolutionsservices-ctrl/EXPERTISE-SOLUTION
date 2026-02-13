import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  useCases?: string;
  category: 'AI & Data' | 'Language' | 'Media';
}

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}