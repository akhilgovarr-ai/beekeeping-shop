"use client";

import Header from "./Header";

type Locale = "ru" | "en";

export default function PartnersPageClient({ locale }: { locale: Locale }) {
  return (
    <>
      <Header locale={locale} />
      <main className="mx-auto max-w-350 px-6 py-24 md:px-10 md:py-32">
        <h1 className="text-display font-medium text-ink">
          {locale === "ru" ? "Партнёры" : "Partners"}
        </h1>
        <p className="mt-6 max-w-md text-sm text-ink-soft">
          {locale === "ru"
            ? "Список точек, где можно приобрести Kavkaz Hills, скоро появится здесь."
            : "A list of places where you can find Kavkaz Hills will appear here soon."}
        </p>
      </main>
    </>
  );
}