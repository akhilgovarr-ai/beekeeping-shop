"use client";

import { useState, useMemo } from "react";
import { products } from "../../src/data/products";
import type { Product, ProductCategory } from "../../src/types/product";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import { buildSkuMap } from "../../src/lib/sku";

type Locale = "ru" | "en";
type Filter = "all" | ProductCategory;

const FILTER_LABELS: Record<Filter, { ru: string; en: string }> = {
  all: { ru: "Всё", en: "All" },
  honey: { ru: "Мёд", en: "Honey" },
  "honey-products": { ru: "Из улья", en: "From the Hive" },
  urbech: { ru: "Урбеч", en: "Urbech" },
  tea: { ru: "Чай", en: "Tea" },
  candles: { ru: "Свечи", en: "Candles" },
  "gift-sets": { ru: "Наборы", en: "Gift Sets" },
};

export default function CataloguePageClient({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Product | null>(null);
 
  const skuMap = useMemo(() => buildSkuMap(products), []);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <Header locale={locale} />

      <main className="mx-auto max-w-350 px-6 py-8 md:px-10 md:py-14">
        <h1 className="text-4xl font-semibold text-gold-gradient md:text-5xl">
          {locale === "ru" ? "Каталог" : "Catalogue"}
        </h1>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 border-b border-line pb-4">
          {(Object.keys(FILTER_LABELS) as Filter[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
             className={`py-1 text-base font-medium transition-colors ${
            filter === key
             ? "text-gold underline underline-offset-4"
           : "text-ink hover:text-gold"
        }`}
            >
              {FILTER_LABELS[key][locale]}
            </button>
          ))}
        </div>

        <div className="mt-6">
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