"use client";

import Image from "next/image";
import type { Product } from "../../src/types/product";
import { getProductImage } from "../../src/lib/product-image";
import { formatPackage, formatPrice } from "../../src/lib/product-format";

type Locale = "ru" | "en";

export default function ProductCard({
  product,
  locale,
  onSelect,
}: {
  product: Product;
  locale: Locale;
  sku: string;
  onSelect: (product: Product) => void;
}) {
  const name = product.name[locale];
  const image = getProductImage(product, locale);

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="kh-product"
      aria-label={locale === "ru" ? `Открыть товар: ${name}` : `Open product: ${name}`}
    >
      <div className="kh-product-image">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-ink-soft">
            {locale === "ru" ? "Фото скоро" : "Photo coming soon"}
          </div>
        )}
      </div>

      <div className="kh-product-info">
        <h3 className="kh-product-title">{name}</h3>
        {product.variants.length > 0 ? (
          product.variants.map((variant) => (
            <span key={variant.weight} className="kh-product-price">
              <span>{formatPackage(variant.weight, locale)}</span><span>{formatPrice(variant.price)}</span>
            </span>
          ))
        ) : (
          <span className="text-base font-medium text-gold">
            {locale === "ru" ? "Цена уточняется" : "Price on request"}
          </span>
        )}
      </div>
    </button>
  );
}
