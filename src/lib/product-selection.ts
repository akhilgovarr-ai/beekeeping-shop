import type { Product, ProductCategory } from "../types/product";

const categoryOrder: ProductCategory[] = [
  "honey", "honey-products", "urbech", "tea", "gift-sets", "candles",
];

// An editorial introduction to the collection, independent of data-file order.
const homeProductIds = [
  "buckwheat-honey",
  "wildflower-honey",
  "mountain-linden-honey",
  "mountain-spurge-honey",
  "bee-bread",
  "pollen",
  "sweet-almond",
  "kalmyk-tea",
];

export function getCatalogueProducts(products: Product[]): Product[] {
  return [...products].sort(
    (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  );
}

export function getHomeProducts(products: Product[]): Product[] {
  return homeProductIds.flatMap((id) => {
    const product = products.find((item) => item.id === id && item.available);
    return product ? [product] : [];
  });
}
