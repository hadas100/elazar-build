import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}
