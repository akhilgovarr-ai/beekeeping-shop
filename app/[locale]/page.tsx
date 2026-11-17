import AboutSection from "../components/AboutSection";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PreviewGrid from "../components/PreviewGrid";
import Reveal from "../components/Reveal";
import PartnersSection from "../components/PartnersSection";
import { whyUs } from "../../src/data/why-us";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const ru = locale === "ru";
  const reasons = whyUs;
  return (
    <>
      <Header locale={locale} />
      <main className="kh-home">
        <Hero locale={locale} />
        <section className="kh-why-us kh-section" aria-labelledby="why-us-title">
          <h2 id="why-us-title">{reasons.title[locale]}</h2>
          <div className="kh-why-us-grid">
            {reasons.items.map(item => (
              <article key={item.id}>
                <svg className="kh-why-us-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={item.iconPath} />
                </svg>
                <h3>{item.title[locale]}</h3>
              </article>
            ))}
          </div>
        </section>
        <PartnersSection locale={locale} />
        <Reveal><section id="collection" className="kh-section">
          <div className="kh-section-heading"><div><p className="kh-eyebrow">{ru ? "Знакомство с коллекцией" : "An introduction"}</p><h2>{ru ? "Начните с мёда." : "Begin with honey."}</h2></div><a className="kh-text-link" href={`/${locale}/catalogue`}>{ru ? "Вся коллекция" : "Full collection"} <span aria-hidden="true">↗</span></a></div>
          <p className="kh-section-intro">{ru ? "Четыре сорта мёда и продолжение коллекции: продукты улья, урбеч и чай." : "Four honey varieties, followed by products from the hive, urbech and tea."}</p>
          <PreviewGrid locale={locale} />
        </section></Reveal>
        <AboutSection locale={locale} />
      </main>
    </>
  );
}
