"use client";

import { useState } from "react";
import type { Product } from "../../src/types/product";
import ProductCard from "./ProductCard";

type Locale = "ru" | "en";
const PAGE_SIZE = 12;

export default function ProductGrid({
  products,
  locale,
  skuMap,
  onSelect,
}: {
  products: Product[];
  locale: Locale;
  skuMap: Map<string, string>;
  onSelect: (product: Product) => void;
}) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            locale={locale}
            sku={skuMap.get(product.id) ?? ""}
            onSelect={onSelect}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="border border-ink px-8 py-3 text-xs tracking-label text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {locale === "ru" ? "Показать ещё" : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}