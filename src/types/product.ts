export interface LocalizedText {
  ru: string;
  en: string;
}

export type ProductCategory =
  | "honey"
  | "urbech"
  | "tea"
  | "honey-products"
  | "candles"
  | "gift-sets";

export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: LocalizedText;
  shortDescription: LocalizedText;
  variants: ProductVariant[];
  imageName: string;
  available: boolean;
  featured?: boolean;
}