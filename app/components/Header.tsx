"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

type Locale = "ru" | "en";

const NAV_LABELS = {
  ru: { about: "О нас", catalogue: "Каталог", collection: "Коллекция", contact: "Контакты" },
  en: { about: "About", catalogue: "Catalogue", collection: "Collection", contact: "Contact" },
} as const;

export default function Header({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const t = NAV_LABELS[locale];

  const navLinks = [
    { href: "#manifesto", label: t.about },
    { href: `/${locale}/catalogue`, label: t.catalogue },
    { href: "#collection", label: t.collection },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href={`/${locale}`} className="font-sans text-lg font-medium tracking-tight text-ink">
          Kavkaz Hills
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-1 text-xs tracking-label text-ink-soft md:flex">
            <a href="/en" className={locale === "en" ? "text-ink" : "hover:text-ink"}>
              EN
            </a>
            <span>/</span>
            <a href="/ru" className={locale === "ru" ? "text-ink" : "hover:text-ink"}>
              RU
            </a>
          </div>

          <a
            href="#collection"
            aria-label={locale === "ru" ? "Корзина" : "Cart"}
            className="relative flex items-center justify-center text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber text-[10px] text-white">
                {totalItems}
              </span>
            )}
          </a>

          <button
            type="button"
            className="text-ink md:hidden"
            aria-label={locale === "ru" ? "Открыть меню" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <span className="font-sans text-lg font-medium text-ink">Kavkaz Hills</span>
            <button
              type="button"
              className="text-ink"
              aria-label={locale === "ru" ? "Закрыть меню" : "Close menu"}
              onClick={() => setMenuOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-8 px-8">
            {navLinks.map((link, i) => (
              <a
                key={`${link.label}-${i}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 px-8 py-8 text-sm tracking-label text-ink-soft">
            <a href="/en" className={locale === "en" ? "text-ink" : ""}>EN</a>
            <span>/</span>
            <a href="/ru" className={locale === "ru" ? "text-ink" : ""}>RU</a>
          </div>
        </div>
      )}
    </header>
  );
}