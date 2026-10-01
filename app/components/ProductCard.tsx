"use client";

import Image from "next/image";
import type { Product } from "../../src/types/product";
import { getProductImage } from "../../src/lib/product-image";

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
  const image = getProductImage(product, locale);
  const cheapest = product.variants.length
    ? Math.min(...product.variants.map((v) => v.price))
    : null;

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex flex-col text-left"
      aria-label={locale === "ru" ? `Открыть товар: ${name}` : `Open product: ${name}`}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-line/40">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-ink-soft">
            {locale === "ru" ? "Фото скоро" : "Photo coming soon"}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-ink">{name}</h3>
        <span className="mt-2 text-lg font-medium text-gold">
          {cheapest !== null
            ? `${locale === "ru" ? "от" : "from"} ${cheapest} ₽`
            : locale === "ru"
            ? "Цена уточняется"
            : "Price on request"}
        </span>
      </div>
    </button>
  );
}