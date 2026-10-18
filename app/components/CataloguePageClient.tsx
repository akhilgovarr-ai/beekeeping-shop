"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { products } from "../../src/data/products";
import type { Product, ProductCategory } from "../../src/types/product";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import { buildSkuMap } from "../../src/lib/sku";
import { getCatalogueProducts } from "../../src/lib/product-selection";

type Locale = "ru" | "en";
type Filter = "all" | ProductCategory;

const FILTER_LABELS: Record<Filter, { ru: string; en: string }> = {
  all: { ru: "Всё", en: "All" },
  honey: { ru: "Мёд", en: "Honey" },
  "honey-products": { ru: "Из улья", en: "From the Hive" },
  urbech: { ru: "Урбеч", en: "Urbech" },
  tea: { ru: "Чай", en: "Tea" },
  "gift-sets": { ru: "Наборы", en: "Gift Sets" },
  candles: { ru: "Свечи", en: "Candles" },
};

export default function CataloguePageClient({ locale, selectedSlug }: {
  locale: Locale;
  selectedSlug?: string;
}) {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const selected = products.find((product) => product.slug === selectedSlug);
  const catalogue = useMemo(() => getCatalogueProducts(products), []);

  function selectProduct(product: Product | null) {
    const url = new URL(window.location.href);
    if (product) url.searchParams.set("product", product.slug);
    else url.searchParams.delete("product");
    const href = `${url.pathname}${url.search}${url.hash}`;
    if (product) router.push(href, { scroll: false });
    else router.replace(href, { scroll: false });
  }
 
  const skuMap = useMemo(() => buildSkuMap(products), []);

  const filteredProducts =
    filter === "all" ? catalogue : catalogue.filter((p) => p.category === filter);

  return (
    <>
      <Header locale={locale} />

      <main className="kh-catalogue kh-section">
        <p className="kh-eyebrow">Kavkaz Hills / {locale === "ru" ? "Коллекция" : "Collection"}</p>
        <h1 className="kh-catalogue-title">
          {locale === "ru" ? "Каталог" : "Catalogue"}
        </h1>

        <div className="kh-filters">
          {(Object.keys(FILTER_LABELS) as Filter[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
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

        <div className="kh-catalogue-grid">
          <ProductGrid
            key={filter}
            products={filteredProducts}
            locale={locale}
            skuMap={skuMap}
            onSelect={selectProduct}
          />
        </div>
      </main>

      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          locale={locale}
          sku={skuMap.get(selected.id) ?? ""}
          onClose={() => selectProduct(null)}
        />
      )}
    </>
  );
}
