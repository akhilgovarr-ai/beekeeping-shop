"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { products } from "../../src/data/products";
import { buildSkuMap } from "../../src/lib/sku";
import ProductCard from "./ProductCard";

type Locale = "ru" | "en";
const PREVIEW_COUNT = 8;

export default function PreviewGrid({ locale }: { locale: Locale }) {
  const router = useRouter();
  const skuMap = useMemo(() => buildSkuMap(products), []);
  const preview = products.slice(0, PREVIEW_COUNT);

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {preview.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          locale={locale}
          sku={skuMap.get(product.id) ?? ""}
          onSelect={() => router.push(`/${locale}/catalogue`)}
        />
      ))}
    </div>
  );
}