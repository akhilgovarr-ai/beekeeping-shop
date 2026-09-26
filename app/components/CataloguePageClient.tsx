"use client";

import { useState, useMemo } from "react";
import { products } from "../../src/data/products";
import type { Product, ProductCategory } from "../../src/types/product";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";

type Locale = "ru" | "en";
type Filter ="all" | "honey" | "honey-products" | "urbech" | "tea";

const FILTER_LABELS: Record<Filter, { ru: string; en: string }> = {
  all: { ru: "Всё", en: "All" },
  honey: { ru: "Мёд", en: "Honey" },
  "honey-products": { ru: "Из улья", en: "From the Hive" },
  urbech: { ru: "Урбеч", en: "Urbech" },
  tea: { ru: "Чай", en: "Tea" },
};

const CATEGORY_PREFIX: Record<ProductCategory, string> = {
  honey: "HON",
  urbech: "URB",
  tea: "TEA",
  "honey-products": "HIVE",
};

export default function CataloguePageClient({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const skuMap = useMemo(() => {
    const map = new Map<string, string>();
    const counters: Record<string, number> = {};
    products.forEach((product) => {
      const prefix = CATEGORY_PREFIX[product.category];
      counters[prefix] = (counters[prefix] ?? 0) + 1;
      map.set(product.id, `KH-${prefix}-${String(counters[prefix]).padStart(3, "0")}`);
    });
    return map;
  }, []);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <Header locale={locale} />

      <main className="mx-auto max-w-350 px-6 py-16 md:px-10 md:py-24">
        <h1 className="text-display font-medium text-ink">
          {locale === "ru" ? "Каталог" : "Catalogue"}
        </h1>

        <div className="mt-10 flex flex-wrap gap-6 border-b border-line pb-6">
          {(Object.keys(FILTER_LABELS) as Filter[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`text-sm tracking-label transition-colors ${
                filter === key
                  ? "font-medium text-ink underline underline-offset-4"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {FILTER_LABELS[key][locale]}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <ProductGrid
            products={filteredProducts}
            locale={locale}
            skuMap={skuMap}
            onSelect={setSelected}
          />
        </div>
      </main>

      {selected && (
        <ProductModal
          product={selected}
          locale={locale}
          sku={skuMap.get(selected.id) ?? ""}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}