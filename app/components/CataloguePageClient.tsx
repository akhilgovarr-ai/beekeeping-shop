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
import { categories } from "../../src/data/categories";
import { dictionaries } from "../../src/i18n/dictionaries";

type Locale = "ru" | "en";
type Filter = "all" | ProductCategory;

export default function CataloguePageClient({ locale, selectedSlug }: {
  locale: Locale;
  selectedSlug?: string;
}) {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const t = dictionaries[locale].catalogue;
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

        <section className="kh-category-picker" aria-label={t.showCategories}>
          <button type="button" className="kh-category-toggle"
            aria-expanded={categoriesOpen} aria-controls="catalogue-categories"
            onClick={() => setCategoriesOpen(open => !open)}>
            <span>{categoriesOpen ? t.hideCategories : t.showCategories}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <div id="catalogue-categories" className="kh-category-collapse"
            data-open={categoriesOpen} inert={!categoriesOpen} aria-hidden={!categoriesOpen}>
            <div className="kh-category-overflow">
              <div className="kh-category-options">
                <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>{t.all}</button>
                {categories.map(category => (
                  <button key={category.id} type="button" aria-pressed={filter === category.id}
                    onClick={() => setFilter(category.id)}>{category.name[locale]}</button>
                ))}
              </div>
            </div>
          </div>
          <p className="kh-category-current" aria-live="polite">
            {filter === "all" ? t.all : categories.find(category => category.id === filter)?.name[locale]}
          </p>
        </section>

        <div className="kh-catalogue-grid">
          {filteredProducts.length ? <ProductGrid
            key={filter}
            products={filteredProducts}
            locale={locale}
            skuMap={skuMap}
            onSelect={selectProduct}
          /> : <p className="kh-catalogue-empty" role="status">{t.comingSoon}</p>}
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
