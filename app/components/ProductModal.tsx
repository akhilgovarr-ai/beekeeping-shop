"use client";

import Image from "next/image";
import { useCart } from "./CartContext";
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
  const name = product.name[locale];
  const description = product.shortDescription[locale];
  const image = `/images/${product.category}/${locale}/${product.imageName}`;
  const price = product.price ?? 100; 

  return (
    <div
      className="fixed inset-0 z-60 flex items-end justify-center bg-ink/40 md:items-center"
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
          className="absolute right-4 top-4 z-10 text-ink"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative aspect-square w-full md:w-1/2">
          <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>

        <div className="flex w-full flex-col gap-4 p-8 md:w-1/2">
          <span className="text-xs tracking-label text-ink-soft">SKU: {sku}</span>
          <h2 className="text-2xl font-medium text-ink">{name}</h2>
          {product.weight && <span className="text-sm text-ink-soft">{product.weight}</span>}
          <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
          <span className="text-2xl font-medium text-ink">${price}</span>

          <button
            type="button"
            onClick={() => {
              addItem({ id: product.id, name, price });
              onClose();
            }}
            className="mt-4 border border-ink px-8 py-3 text-xs tracking-label text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {locale === "ru" ? "Добавить в корзину" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}