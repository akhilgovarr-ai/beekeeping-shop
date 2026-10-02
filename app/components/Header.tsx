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
    { href: `/${locale}/catalogue`, label: t.catalogue },
    { href: `/${locale}/partners`, label: t.partners },
    { href: `/${locale}#about`, label: t.about },
    { href: `/${locale}#contact`, label: t.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-350 flex-nowrap items-center justify-between gap-x-4 px-6 py-4 md:px-10">
          <a
            href={`/${locale}`}
            className="shrink-0 font-serif text-base font-semibold tracking-tight text-gold-gradient md:text-3xl"
          >
            Kavkaz Hills
          </a>

          <nav className="flex items-center gap-x-3 whitespace-nowrap md:gap-x-8">
            {navLinks.map((link, i) => (
              <a
                key={`${link.label}-${i}`}
                href={link.href}
                className="text-xs font-medium text-ink transition-colors hover:text-gold sm:text-base md:text-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-[60] flex items-center gap-3">
        <div className="flex items-center gap-1 border border-line bg-paper/90 px-3 py-2 text-sm font-medium tracking-label text-ink-soft backdrop-blur">
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
          className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-paper/90 text-gold backdrop-blur transition-colors hover:bg-gold hover:text-paper"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M6 8h12l-1 12H7L6 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-medium text-paper">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </>
  );
}