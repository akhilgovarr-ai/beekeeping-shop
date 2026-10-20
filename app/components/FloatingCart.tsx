"use client";

import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import type { Locale } from "../../src/i18n/dictionaries";

export default function FloatingCart({ locale }: { locale: Locale }) {
  const { totalItems, isOpen, openCart } = useCart();
  const pathname = usePathname();
  if (isOpen || /\/(cart|basket)\/?$/.test(pathname)) return null;
  return (
    <button type="button" className="kh-floating-cart" onClick={openCart}
      aria-label={locale === "ru" ? `Открыть корзину: ${totalItems}` : `Open cart: ${totalItems}`}>
      <svg width="23" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 8h14l-1 13H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
      <span className="kh-floating-cart-count" aria-hidden="true">{totalItems > 99 ? "99+" : totalItems}</span>
    </button>
  );
}
