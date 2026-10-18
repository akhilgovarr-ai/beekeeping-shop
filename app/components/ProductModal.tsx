"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { getProductImage } from "../../src/lib/product-image";
import { formatPackage, formatPrice } from "../../src/lib/product-format";
import type { Product } from "../../src/types/product";

type Locale = "ru" | "en";

export default function ProductModal({
  product,
  locale,
  onClose,
}: {
  product: Product;
  locale: Locale;
  sku: string;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const name = product.name[locale];
  const description = product.shortDescription[locale];
  const image = getProductImage(product, locale);
  const hasVariants = product.variants.length > 0;
  const variant = hasVariants ? product.variants[selectedIndex] : null;

  return (
    <div
      className="kh-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="kh-modal"
        role="dialog" aria-modal="true" aria-labelledby="product-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={locale === "ru" ? "Закрыть" : "Close"}
          className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center text-ink"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="kh-modal-photo">
          {image ? (
            <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-ink-soft">
              {locale === "ru" ? "Фото скоро" : "Photo coming soon"}
            </div>
          )}
        </div>

        <div className="kh-modal-copy">
          <h2 id="product-title" className="text-2xl font-medium text-ink">{name}</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{description}</p>

          {hasVariants ? (
            <>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.weight}
                    type="button"
                    onClick={() => setSelectedIndex(i)}
                    aria-pressed={i === selectedIndex}
                   className={`border px-4 py-2 text-xs ${
  i === selectedIndex
    ? "border-amber bg-amber text-paper"
    : "border-line text-ink-soft hover:border-amber hover:text-amber"
}`}
                  >
                    {formatPackage(v.weight, locale)} — {formatPrice(v.price)}
                  </button>
                ))}
              </div>

              <span className="text-2xl font-medium text-ink">{variant ? formatPrice(variant.price) : null}</span>

              <button
                type="button"
                onClick={() => {
                  if (!variant) return;
                  addItem({
                    id: `${product.id}::${variant.weight}`,
                    name: `${name} (${formatPackage(variant.weight, locale)})`,
                    price: variant.price,
                  });
                  onClose();
                }}
                className="kh-button kh-add-button"
              >
                {locale === "ru" ? "Добавить в корзину" : "Add to cart"}
              </button>
            </>
          ) : (
            <p className="text-sm text-ink-soft">
              {locale === "ru" ? "Цена уточняется — скоро добавим." : "Price coming soon."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
