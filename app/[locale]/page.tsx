import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import PreviewGrid from "../components/PreviewGrid";
import Reveal from "../components/Reveal";

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const ru = locale === "ru";
  return (
    <>
      <Header locale={locale} />
      <main className="kh-home">
        <section className="kh-hero">
          <div className="kh-hero-copy">
            <p className="kh-eyebrow">{ru ? "Рождённое в горах" : "Born in the mountains"}</p>
            <h1>{ru ? "Энергия гор." : "Energy of the mountains."}<em>{ru ? "Душа Кавказа." : "Soul of the Caucasus."}</em></h1>
            <p className="kh-intro">{ru ? "Мёд, урбеч и чай. Коллекция вкусов Kavkaz Hills с характером Северного Кавказа." : "Honey, urbech and tea. The Kavkaz Hills collection, with the character of the North Caucasus."}</p>
            <div className="kh-actions"><a className="kh-button" href={`/${locale}/catalogue`}>{ru ? "Выбрать свой вкус" : "Explore the collection"}<span aria-hidden="true">↗</span></a><a className="kh-text-link" href="#about">{ru ? "Наше происхождение" : "Our origin"}</a></div>
            <div className="kh-hero-note"><span> KAVKAZ HILLS </span><span>{ru ? "Природа. Люди. Ремесло." : "Nature. People. Craft."}</span></div>
          </div>
          <div className="kh-hero-photo"><Image src="/images/beekeepers/IMG_9428.JPG" alt={ru ? "Пчеловод Kavkaz Hills с рамкой на пасеке" : "Kavkaz Hills beekeeper holding a frame at the apiary"} fill priority sizes="(max-width: 760px) 100vw, 50vw" /><span className="kh-photo-caption">{ru ? "Из жизни пасеки" : "Life at the apiary"}</span></div>
        </section>
        <Reveal><section id="collection" className="kh-section">
          <div className="kh-section-heading"><div><p className="kh-eyebrow">{ru ? "Знакомство с коллекцией" : "An introduction"}</p><h2>{ru ? "Начните с мёда." : "Begin with honey."}</h2></div><a className="kh-text-link" href={`/${locale}/catalogue`}>{ru ? "Вся коллекция" : "Full collection"} <span aria-hidden="true">↗</span></a></div>
          <p className="kh-section-intro">{ru ? "Четыре сорта мёда и продолжение коллекции: продукты улья, урбеч и чай." : "Four honey varieties, followed by products from the hive, urbech and tea."}</p>
          <PreviewGrid locale={locale} />
        </section></Reveal>
        <Reveal><section id="about" className="kh-origin kh-section">
          <div className="kh-origin-photo"><Image src="/images/beekeepers/IMG_9620.JPG" alt={ru ? "Пчеловод Kavkaz Hills на пасеке" : "Kavkaz Hills beekeeper at the apiary"} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
          <div className="kh-origin-copy"><p className="kh-eyebrow">{ru ? "Наше происхождение" : "Our origin"}</p><h2>{ru ? "За каждым вкусом —" : "Behind every flavour,"}<em>{ru ? "люди и земля." : "people and a place."}</em></h2><p>{ru ? "Высоко в горах Кавказа природа всё ещё живёт в своём ритме. В нашей коллекции встречаются мёд, традиционный урбеч и чай — разные способы познакомиться со вкусами региона." : "High in the Caucasus, nature still keeps its own time. Honey, traditional urbech and tea come together in our collection — different ways to discover the flavours of the region."}</p><span className="kh-origin-signature">Kavkaz Hills</span></div>
        </section></Reveal>
      </main>
      <footer id="contact" className="kh-footer">
        <div className="kh-footer-main"><div><p className="kh-eyebrow">{ru ? "Остаёмся на связи" : "Stay in touch"}</p><h2>{ru ? "Выбор начинается" : "A conversation"}<em>{ru ? "с разговора." : "is a beginning."}</em></h2></div><div className="kh-footer-contact"><p>{ru ? "Вопрос о продукте, подарок или оптовый заказ — напишите нам." : "A product question, a gift or a wholesale enquiry — write to us."}</p><a className="kh-text-link" href="mailto:hello@kavkazhills.com">hello@kavkazhills.com ↗</a></div></div>
        <div className="kh-footer-bottom"><span className="kh-wordmark">KAVKAZ HILLS</span><span>© 2026 Kavkaz Hills</span><span>{ru ? "Энергия гор. Душа Кавказа." : "Energy of the mountains. Soul of the Caucasus."}</span></div>
      </footer>
    </>
  );
}
