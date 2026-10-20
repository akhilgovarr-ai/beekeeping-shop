"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import { dictionaries, type Locale } from "../../src/i18n/dictionaries";
import { contacts } from "../../src/config/contacts";
import { locations } from "../../src/data/locations";

type Panel = "call" | "locations" | "menu" | "delivery";
export default function Header({ locale }: { locale: Locale }) {
  const { totalItems, openCart } = useCart();
  const pathname = usePathname();
  const t = dictionaries[locale].header;
  const [panel, setPanel] = useState<Panel | null>(null);
  const root = useRef<HTMLElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const home = pathname === `/${locale}` || pathname === `/${locale}/`;
  const catalogue = locale === "ru" ? "/catalog" : "/catalog?locale=en";
  function close(restoreFocus = true) {
    setPanel(null);
    if (restoreFocus) trigger.current?.focus();
  }
  useEffect(() => {
    if (!panel) return;
    closeButton.current?.focus();
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setPanel(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setPanel(null); trigger.current?.focus(); }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [panel]);
  return <>
    <header ref={root} className="kh-header kh-video-header" onBlur={event => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) setPanel(null);
    }}>
      <div className="kh-video-header-inner">
        <a href={`/${locale}`} className="kh-wordmark" aria-label={t.home}>KAVKAZ HILLS</a>
        <nav className="kh-header-icons" aria-label={t.menu}>
          {(["call", "locations", "menu"] as const).map(kind => <button key={kind} type="button" className="kh-icon-button"
            aria-label={t[kind]} aria-expanded={panel === kind || (kind === "menu" && panel === "delivery")}
            aria-controls={panel ? "header-panel" : undefined}
            onClick={event => { trigger.current = event.currentTarget; setPanel(panel === kind || (kind === "menu" && panel === "delivery") ? null : kind); }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {kind === "call" && <path d="m7 3 3 5-2 2a14 14 0 0 0 6 6l2-2 5 3-1 4C10 22 2 14 3 4Z" />}
              {kind === "locations" && <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
              {kind === "menu" && <g fill="currentColor" stroke="none"><circle cx="5" cy="12" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="19" cy="12" r="1.7" /></g>}
            </svg>
          </button>)}
        </nav>
      </div>
      {panel && <section id="header-panel" className="kh-header-panel" aria-labelledby="header-panel-title">
        <div className="kh-panel-heading"><h2 id="header-panel-title">{t[panel]}</h2>
          <button ref={closeButton} type="button" className="kh-icon-button" aria-label={t.close} onClick={() => close()}>
            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
        {panel === "call" && <div className="kh-contact-details">
          <p>{t.hours}<span>{contacts.workingHours[locale] || t.missing}</span></p>
          <p>{t.phone}<span>{contacts.russianPhone ? <a href={`tel:${contacts.russianPhone.replace(/[^\d+]/g, "")}`}>{contacts.russianPhone}</a> : t.missing}</span></p>
          {contacts.whatsapp ? <a className="kh-text-link" href={`https://wa.me/${contacts.whatsapp}`}>{t.whatsapp} ↗</a> : <p>{t.whatsapp}<span>{t.missing}</span></p>}
        </div>}
        {panel === "locations" && (locations.length ? <ul className="kh-location-list">{locations.map(location => <li key={location.id}>
          <strong>{location.name[locale]}</strong><p>{location.address[locale]}</p>
          {location.mapUrl && <a className="kh-text-link" href={location.mapUrl}>{t.locations} ↗</a>}
        </li>)}</ul> : <p>{t.noLocations}</p>)}
        {panel === "delivery" && <p>{t.deliveryPending}</p>}
        {panel === "menu" && <nav className="kh-panel-nav" aria-label={t.menu}>
          <a href={catalogue}>{t.catalogue}</a>
          <button type="button" onClick={() => setPanel("delivery")}>{t.delivery}</button>
          <button type="button" onClick={() => { close(false); openCart(); }}>{t.cart} <span>{totalItems}</span></button>
          <a href={`/${locale}#about`} onClick={() => close(false)}>{t.story}</a>
          <div className="kh-languages" aria-label={t.language}>
            {(["ru", "en"] as const).map(lang => <a key={lang} href={pathname.replace(/^\/(ru|en)(?=\/|$)/, `/${lang}`)} hrefLang={lang} lang={lang} aria-current={locale === lang ? "true" : undefined}>{lang.toUpperCase()}</a>)}
          </div>
        </nav>}
      </section>}
    </header>
    {!home && <div className="kh-header-spacer" aria-hidden="true" />}
  </>;
}
