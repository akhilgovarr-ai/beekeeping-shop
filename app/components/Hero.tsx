"use client";
import { useState, useSyncExternalStore } from "react";
import { dictionaries, type Locale } from "../../src/i18n/dictionaries";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export default function Hero({ locale }: { locale: Locale }) {
  const reducedMotion = useSyncExternalStore(subscribe,
    () => window.matchMedia(motionQuery).matches, () => true);
  const [failed, setFailed] = useState(false);
  const t = dictionaries[locale].hero;
  return (
    <section className="kh-video-hero" aria-labelledby="hero-title">
      <div className="kh-hero-media" aria-hidden="true">
        {!reducedMotion && !failed && (
          <video autoPlay muted loop playsInline poster="/videos/hero-poster.jpg"
            onError={() => setFailed(true)} preload="metadata">
            <source src="/videos/hero.mp4" type="video/mp4" onError={() => setFailed(true)} />
          </video>
        )}
      </div>
      <div className="kh-hero-shade" aria-hidden="true" />
      <h1 id="hero-title">{t.headline}</h1>
      <a className="kh-button kh-hero-catalogue" href={locale === "ru" ? "/catalog" : "/catalog?locale=en"}>
        {t.catalogueCta}<span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
