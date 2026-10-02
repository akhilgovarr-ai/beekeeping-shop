"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "./CartContext";
import { getProductImage } from "../../src/lib/product-image";
import type { Product } from "../../src/types/product";

type Locale = "ru" | "en";

export default function ProductModal({
  product,
  locale,
  sku,
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
      className="fixed inset-0 z-[60] flex items-end justify-center bg-paper/60 md:items-center"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-3xl flex-col overflow-hidden bg-paper md:flex-row"
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

        <div className="relative aspect-square w-full bg-line/40 md:w-1/2">
          {image ? (
            <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-ink-soft">
              {locale === "ru" ? "Фото скоро" : "Photo coming soon"}
            </div>
          )}
        </div>

        <div className="flex w-full flex-col gap-4 p-8 md:w-1/2">
          <h2 className="text-2xl font-medium text-ink">{name}</h2>
          <p className="text-sm leading-relaxed text-ink-soft">{description}</p>

          {hasVariants ? (
            <>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.weight}
                    type="button"
                    onClick={() => setSelectedIndex(i)}
                   className={`border px-4 py-2 text-xs ${
  i === selectedIndex
    ? "border-amber bg-amber text-paper"
    : "border-line text-ink-soft hover:border-amber hover:text-amber"
}`}
                  >
                    {v.weight}
                  </button>
                ))}
              </div>

              <span className="text-2xl font-medium text-ink">{variant?.price} ₽</span>

              <button
                type="button"
                onClick={() => {
                  if (!variant) return;
                  addItem({
                    id: `${product.id}::${variant.weight}`,
                    name: `${name} (${variant.weight})`,
                    price: variant.price,
                  });
                  onClose();
                }}
                className="mt-4 border border-amber px-8 py-3 text-xs tracking-label text-amber transition-colors hover:bg-amber hover:text-paper"
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