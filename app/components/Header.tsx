"use client";

import { useCart } from "./CartContext";

type Locale = "ru" | "en";

const NAV_LABELS = {
  ru: { about: "О нас", catalogue: "Каталог", partners: "Партнёры", contact: "Контакты" },
  en: { about: "About", catalogue: "Catalogue", partners: "Partners", contact: "Contact" },
} as const;

export default function Header({ locale }: { locale: Locale }) {
  const { totalItems, openCart } = useCart();
  const t = NAV_LABELS[locale];

  const navLinks = [
    { href: `/${locale}#about`, label: t.about },
    { href: `/${locale}/catalogue`, label: t.catalogue },
    { href: `/${locale}/partners`, label: t.partners },
    { href: `/${locale}#contact`, label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-350 flex-wrap items-center justify-between gap-y-3 px-6 py-4 md:px-10">
        <a href={`/${locale}`} className="font-sans text-2xl font-medium tracking-tight text-gold">
          Kavkaz Hills
        </a>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navLinks.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              className="text-base font-medium text-ink transition-colors hover:text-gold md:text-lg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 text-sm font-medium tracking-label text-ink-soft">
            <a href="/en" className={locale === "en" ? "text-gold" : "hover:text-gold"}>
              EN
            </a>
            <span>/</span>
            <a href="/ru" className={locale === "ru" ? "text-gold" : "hover:text-gold"}>
              RU
            </a>
          </div>

          <button
            type="button"
            onClick={openCart}
            aria-label={locale === "ru" ? "Открыть корзину" : "Open cart"}
            className="relative flex h-11 w-11 items-center justify-center text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 8h12l-1 12H7L6 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] text-paper">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}