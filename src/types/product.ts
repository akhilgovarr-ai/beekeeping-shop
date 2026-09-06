export interface LocalizedText {
  ru: string;
  en: string; // используется и для английской, и для арабской версии сайта
}

export interface LocalizedImages {
  ru: string[];
  en: string[];
}

export type ProductCategory = "honey" | "urbech" | "tea" | "royal-bee";

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  name: LocalizedText;
  shortDescription: LocalizedText;
  price: number | null; // null = цена ещё не указана ("уточняется")
  weight: string;
  images: LocalizedImages;
  available: boolean;
  featured?: boolean;
}