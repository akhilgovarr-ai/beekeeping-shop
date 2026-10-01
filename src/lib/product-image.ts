import type { Product } from "../types/product";

type Locale = "ru" | "en";

export function getProductImage(product: Product, locale: Locale): string | null {
  if (!product.imageName) return null;
  return `/images/${product.category}/${locale}/${product.imageName}`;
}