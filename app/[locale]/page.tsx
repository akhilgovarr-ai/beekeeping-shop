import { notFound } from "next/navigation";

import {

  dictionaries,

  type Locale,

} from "../../src/i18n/dictionaries";

import { products } from "../../src/data/products";

import AnimatedCounter from "../components/AnimatedCounter";

import ScrollAnimations from "../components/ScrollAnimations";

import Image from "next/image";

import { redirect } from "next/navigation";

import ProductCatalog from "../components/ProductCatalog";

const locales = ["en", "ru"] as const;

const categoryLabels = {

  en: {

    tea: "Tea",

    urbech: "Urbech",

    honey: "Honey",

    "honey-products": "From the Hive",

  },

  ru: {

    tea: "Чай",

    urbech: "Урбеч",

    honey: "Мёд",

    "honey-products": "Из улья",

  },

} as const;

export default async function LocalePage({

  params,

}: {

  params: Promise<{ locale: string }>;

}) {

  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {

    notFound();

  }

  const lang = locale as Locale;

  const localizedProducts = products.map((product) => ({

    ...product,

    content: product[lang],

    image: `/images/${product.category}/${lang}/${product.imageName}`,

  }));

  return (

    <main className="site-main">
      <ScrollAnimations />

      {/* HERO */}

      <section className="hero" id="home">

        <div className="hero-language-switch">

          <a

            href="/en"

            className={lang === "en" ? "active" : ""}

          >

            EN

          </a>

          <span>/</span>

          <a

            href="/ru"

            className={lang === "ru" ? "active" : ""}

          >

            RU

          </a>

        </div>

        <div className="hero-media">
  <Image
    src="/images/beekeepers/IMG_9890.JPG"
    alt={
      lang === "en"
        ? "Founder and head beekeeper of Kavkaz Hills"
        : "Основатель и главный пчеловод Kavkaz Hills"
    }
    className="hero-founder-image"
    fill
    priority
    sizes="100vw"
  />

          <div className="hero-overlay" />

          <div className="hero-glow" />

        </div>

        <div className="hero-content">

          <p className="hero-kicker">

            {lang === "en"

              ? "North Caucasus"

              : "Северный Кавказ"}

          </p>

          <h1 className="hero-title">

            <span>Kavkaz Hills.</span>

            <span className="hero-title-accent">

              {lang === "en"

                ? "Source of living strength."

                : "Источник живой силы."}

            </span>

          </h1>

          <div className="hero-accent-line" />

          <p className="hero-subtitle">

            {lang === "en"

              ? "Some things cannot be rushed."

              : "Некоторые вещи нельзя торопить."}

          </p>

          <p className="hero-description">

            {lang === "en"

              ? "High in the Caucasus, nature still keeps its own time."

              : "Высоко в горах Кавказа природа всё ещё живёт в своём ритме."}

          </p>

          <div className="hero-actions">

            <a

              href="#collection"

              className="hero-button-primary"

            >

              {lang === "en"

                ? "View collection"

                : "Смотреть коллекцию"}

            </a>

            <a

              href="#manifesto"

              className="hero-button-secondary"
              >

              {lang === "en"

                ? "Our story"

                : "Наша история"}

            </a>

          </div>

        </div>

        <div className="hero-scroll">

          <span>

            {lang === "en" ? "Scroll" : "Листайте"}

          </span>

          <div className="hero-scroll-line" />

        </div>

      </section>

      {/* TRUST STRIP */}
<section className="trust-strip">
  <div className="trust-fact">
    <strong>
      <AnimatedCounter value={20} suffix="+" />
    </strong>
    <span>{lang === "ru" ? "видов продуктов" : "product varieties"}</span>
  </div>
  <div className="trust-fact">
    <strong>100%</strong>
    <span>{lang === "ru" ? "натурально" : "natural"}</span>
  </div>
  <div className="trust-fact">
    <strong>∞</strong>
    <span>{lang === "ru" ? "уважение к природе" : "respect for nature"}</span>
  </div>
</section>

      {/* MANIFESTO */}
      <section className="manifesto-parallax" id="manifesto">
  <div className="manifesto-overlay" />

  <div className="manifesto-inner">
    <div className="manifesto-heading">
      <span className="eyebrow">
        {lang === "ru" ? "Наш манифест" : "Our manifesto"}
      </span>

      <h2>
        {lang === "ru"
          ? "Энергия гор. Душа Кавказа."
          : "The energy of the mountains. The soul of the Caucasus."}
      </h2>

      <p>
        {lang === "ru"
          ? "Мы верим, что настоящее качество начинается с уважения — к природе, пчёлам и труду человека."
          : "We believe true quality begins with respect — for nature, the bees, and human craft."}
      </p>
    </div>

    <div className="manifesto-cards">

      {/* Mountains */}
      <article className="manifesto-card">
        <div className="manifesto-icon">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M5 52 25 18l9 15 7-10 18 29" />
            <path d="m18 30 7-12 6 10" />
          </svg>
        </div>

        <span className="manifesto-number">01</span>

        <h3>{lang === "ru" ? "Происхождение" : "Origin"}</h3>

        <p>
          {lang === "ru"
            ? "Продукты, рожденные природой Кавказа."
            : "Products shaped by the nature of the Caucasus."}
        </p>
      </article>
    </div>
  </div>
</section>


     {/* ORIGIN / PEOPLE */}
      <section

        className="production-section reveal-section"

        id="origin"

      >

        <div className="production-heading">

          <div>

            <p className="section-kicker">

              {lang === "en"

                ? "From the apiary"

                : "Живая пасека"}

            </p>

            <h2>

              {lang === "en"

                ? "Where our honey begins."

                : "Там, где начинается наш мёд."}

            </h2>

          </div>

          <p>

            {lang === "en"

              ? "Our apiaries live within the landscape of Caucasus. Here, the condition of bees, the season, and the natural rhythm are important."

              : "Наши пасеки находятся среди природы Кавказа. Здесь важно состояние пчёл, сезон и естественный ритм. "}

          </p>

        </div>

          <div className="production-photo">

            <Image

              src="/images/beekeepers/IMG_9620.JPG"

              alt={

                lang === "en"

                  ? "Kavkaz Hills beekeeper at the apiary"

                  : "Пчеловод Kavkaz Hills на пасеке"

              }

            fill
            sizes="(max-width: 700px) 100vw, 900px"
            style={{ objectFit: "cover", objectPosition: "38% 22%" }}
           />

            <div className="production-photo-overlay" />

            <div className="production-photo-caption">

              <span>01</span>

              <p>

                {lang === "en"

                  ? "Real people. Real apiary."

                  : "Настоящие люди. Настоящая пасека."}

              </p>

            </div>

          </div>
          
      </section>

      {/* PRINCIPLES */}
<section className="production-section reveal-section" id="principles">
  <div className="production-heading">
    <div>
      <h2>
        {lang === "en" ? "Care is part of the process." : "Забота — часть производства."}
      </h2>
    </div>
    <p>
      {lang === "en"
        ? "Our work begins with the bees, not with the jar. We take only what nature can give."
        : "Наша работа начинается с пчёл, а не с банки мёда. Мы берём только то, что природа может отдать."}
    </p>
  </div>
  <div className="production-principles">
    <article className="production-principle">
      <span>01</span>
      <div>
        <h3>{lang === "en" ? "The hive comes first." : "Сначала — улей."}</h3>
        <p>
          {lang === "en"
            ? "Not every drop belongs to us. Enough honey is always left for the bees themselves."
            : "Не всё, что создают пчёлы, принадлежит нам. В улье всегда остаётся достаточно мёда для самой семьи."}
        </p>
      </div>
    </article>
    <article className="production-principle">
      <span>02</span>
      <div>
        <h3>{lang === "en" ? "No unnecessary intervention." : "Без лишнего вмешательства."}</h3>
        <p>
          {lang === "en"
            ? "We do not try to accelerate what nature already knows how to do."
            : "Мы не пытаемся ускорить то, что природа и без нас умеет делать правильно."}
        </p>
      </div>
    </article>
    <article className="production-principle">
      <span>03</span>
      <div>
        <h3>{lang === "en" ? "Nothing to hide." : "Нам нечего скрывать."}</h3>
        <p>
          {lang === "en"
            ? "Our products begin here — among wooden hives, mountain air and the hands of people who know every stage of the process."
            : "Наш продукт начинается здесь — среди деревянных ульев, горного воздуха и людей, которые знают каждый этап производства."}
        </p>
      </div>
      </article>

      <div className="production-photo">
    <Image
      src="/images/beekeepers/IMG_9628.JPG"
      alt={
        lang === "en"
          ? "Kavkaz Hills beehives among the trees"
          : "Ульи Kavkaz Hills среди деревьев"
      }
      fill
      sizes="(max-width: 700px) 100vw, 900px"
      style={{ objectFit: "cover", objectPosition: "center 50%" }}
    />
  </div>
  </div>
</section>

{/* TRANSITION TO COLLECTION */}
<section className="source-section">
  <div className="source-bg" aria-hidden="true" />
  <div className="source-overlay" aria-hidden="true" />
  <div className="source-content">
    <span className="source-eyebrow">
      {lang === "ru" ? "Источник" : "The Source"}
    </span>
    <blockquote>
      {lang === "ru"
        ? "Иногда самое важное — вовремя ничего не делать."
        : "Sometimes the most important thing is knowing when to do nothing."}
    </blockquote>
    <p>
      {lang === "ru"
        ? "Мы не ускоряем природу. Мы следуем её ритму — от горной пасеки до каждого продукта Kavkaz Hills."
        : "We do not rush nature. We follow its rhythm — from the mountain apiary to every Kavkaz Hills product."}
    </p>
    <a href="#collection" className="source-button">
      {lang === "ru" ? "Смотреть коллекцию" : "View collection"}
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</section>

             
             <ProductCatalog
            locale={lang}
            products={localizedProducts.map((product) => ({
            id: product.id,
            category: product.category,
            image: product.image,
            name: product.content.name,
            description: product.content.description,
           price: product.price || 100,
      }))}
      />
            
     
      {/* CONTACT / FOOTER */}

      <footer className="site-footer" id="contact">

        <div className="section-gold-line" />

        <div className="footer-main">

          <div className="footer-intro">

            <p className="section-kicker">

              {lang === "en"

                ? "Kavkaz Hills"

                : "Kavkaz Hills"}

            </p>

          </div>

          <div className="footer-order">

            <p>

              {lang === "en"

                ? "For orders, wholesale enquiries or simply to learn more about our products, contact us directly."

                : "Чтобы сделать заказ, обсудить оптовое сотрудничество или узнать больше о продукции, свяжитесь с нами напрямую."}

            </p>

            <div className="footer-contact-buttons">

              <a

                href="#"

                className="footer-contact-button"

              >

                WhatsApp

                <span>↗</span>

              </a>

              <a

                href="#"

                className="footer-contact-button"

              >

                Telegram

                <span>↗</span>

              </a>

              <a

                href="mailto:hello@kavkazhills.com"

                className="footer-contact-button"

              >

                Email

                <span>↗</span>

              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>© 2026 Kavkaz Hills</span>

          <span>

            {lang === "en"

              ? "Energy of the mountains. Soul of the Caucasus."

              : "Энергия гор. Душа Кавказа."}

          </span>

        </div>

      </footer>

    </main>

  );

}