"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "../../src/types/product";
import { getProductImage } from "../../src/lib/product-image";
import { formatPackage, formatPrice } from "../../src/lib/product-format";
import AllergenNote from "./AllergenNote";
import { useCart } from "./CartContext";

type Locale = "ru" | "en";

export default function ProductCard({ product, locale, onSelect }: {
  product: Product;
  locale: Locale;
  sku: string;
  onSelect: (product: Product) => void;
}) {
  const name = product.name[locale];
  const image = getProductImage(product, locale);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const variant = product.variants[selectedIndex];
  const { addItem, openCart } = useCart();
  return (
    <article className="kh-product">
      <button type="button" className="kh-product-open" onClick={() => onSelect(product)}
        aria-label={locale === "ru" ? `Открыть товар: ${name}` : `Open product: ${name}`}
        aria-describedby={product.allergenNote?.[locale] ? `allergen-${product.id}` : undefined}>
        <div className="kh-product-image">
          {image ? <Image src={image} alt={name} fill sizes="(max-width: 767px) calc((100vw - 34px) / 2), (max-width: 1024px) 50vw, 25vw" className="object-contain" /> :
            <div className="flex h-full w-full items-center justify-center text-xs text-ink-soft">{locale === "ru" ? "Фото скоро" : "Photo coming soon"}</div>}
        </div>
        <h3 className="kh-product-title line-clamp-2">{name}</h3>
      </button>
      <div className="kh-product-info">
        {variant ? <>
          <select className="kh-product-variant" value={selectedIndex} onChange={event => setSelectedIndex(Number(event.target.value))}
            aria-label={`${locale === "ru" ? "Фасовка" : "Pack size"}: ${name}`}>
            {product.variants.map((option, index) => <option key={option.weight} value={index}>{formatPackage(option.weight, locale)}</option>)}
          </select>
          <span className="kh-product-card-price">{formatPrice(variant.price)}</span>
        </> : <span className="kh-product-card-price">{locale === "ru" ? "Цена уточняется" : "Price on request"}</span>}
        <button type="button" className="kh-button kh-product-add" disabled={!variant || !product.available}
          aria-label={`${locale === "ru" ? "В корзину" : "Add to cart"}: ${name}`}
          onClick={() => {
            if (!variant) return;
            addItem({ id: `${product.id}::${variant.weight}`, name: `${name} (${formatPackage(variant.weight, locale)})`, price: variant.price });
            openCart();
          }}>{locale === "ru" ? "В корзину" : "Add to cart"}</button>
        <AllergenNote id={`allergen-${product.id}`} note={product.allergenNote} locale={locale} />
      </div>
    </article>
  );
}
