export interface LocalizedText {
  ru: string;
  en: string;
}

export type ProductCategory = "honey" | "urbech" | "tea" | "honey-products";

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: LocalizedText;
  shortDescription: LocalizedText;
  price: number | null;
  weight: string;
  imageName: string;
  available: boolean;
  featured?: boolean;
}