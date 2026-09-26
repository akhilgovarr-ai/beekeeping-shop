"use client";

import Image from "next/image";
import type { Product } from "../../src/types/product";

type Locale = "ru" | "en";

export default function ProductCard({
  product,
  locale,
  sku,
  onSelect,
}: {
  product: Product;
  locale: Locale;
  sku: string;
  onSelect: (product: Product) => void;
}) {
  const name = product.name[locale];
  const image = `/images/${product.category}/${locale}/${product.imageName}`;
  const price = product.price ?? 100;

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex flex-col text-left"
      aria-label={
        locale === "ru" ? `Открыть товар: ${name}` : `Open product: ${name}`
      }
    >
      <div className="relative aspect-square w-full overflow-hidden bg-line/40">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-ink">{name}</h3>
        <span className="text-xs tracking-label text-ink-soft">SKU: {sku}</span>
        <span className="mt-2 text-lg font-medium text-ink">${price}</span>
      </div>
    </button>
  );
}