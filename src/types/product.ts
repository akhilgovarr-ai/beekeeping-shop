export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  weight?: string;
  images: string[];
  video?: string;
  composition?: string;
  storage?: string;
  available: boolean;
  featured?: boolean;
}