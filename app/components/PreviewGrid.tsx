"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { products } from "../../src/data/products";
import { buildSkuMap } from "../../src/lib/sku";
import { getHomeProducts } from "../../src/lib/product-selection";
import ProductCard from "./ProductCard";

type Locale = "ru" | "en";

export default function PreviewGrid({ locale }: { locale: Locale }) {
  const router = useRouter();
  const skuMap = useMemo(() => buildSkuMap(products), []);
  const preview = getHomeProducts(products);

  return (
    <div className="kh-product-grid">
      {preview.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          locale={locale}
          sku={skuMap.get(product.id) ?? ""}
          onSelect={() => router.push(`/${locale}/catalogue?product=${encodeURIComponent(product.slug)}`)}
        />
      ))}
    </div>
  );
}
