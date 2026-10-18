"use client";

import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

type Locale = "ru" | "en";

export default function Header({ locale }: { locale: Locale }) {
  const { totalItems, openCart } = useCart();
  const pathname = usePathname();
  const ru = locale === "ru";
  const links = [
    { href: `/${locale}/catalogue`, label: ru ? "Каталог" : "Catalogue" },
    { href: `/${locale}#about`, label: ru ? "Наше происхождение" : "Our origin" },
    { href: `/${locale}/partners`, label: ru ? "Партнёры" : "Partners" },
    { href: `/${locale}#contact`, label: ru ? "Контакты" : "Contact" },
  ];
  return (
    <header className="kh-header">
      <div className="kh-header-inner">
        <a href={`/${locale}`} className="kh-wordmark" aria-label="Kavkaz Hills — home">KAVKAZ HILLS<span>{ru ? "СЕВЕРНЫЙ КАВКАЗ" : "NORTH CAUCASUS"}</span></a>
        <nav className="kh-nav" aria-label={ru ? "Основная навигация" : "Main navigation"}>
          {links.map(link => <a key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</a>)}
        </nav>
        <div className="kh-tools">
          <div className="kh-languages" aria-label={ru ? "Язык" : "Language"}>
            {(["ru", "en"] as const).map(lang => <a key={lang} href={pathname.replace(/^\/(ru|en)(?=\/|$)/, `/${lang}`)} lang={lang} aria-current={locale === lang ? "true" : undefined}>{lang.toUpperCase()}</a>)}
          </div>
          <button type="button" onClick={openCart} className="kh-cart" aria-label={ru ? `Открыть корзину: ${totalItems}` : `Open cart: ${totalItems}`}>
            <svg width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
            <span>{totalItems}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
