import { notFound } from "next/navigation";

import {

  dictionaries,

  type Locale,

} from "../../src/i18n/dictionaries";

import { products } from "../../src/data/products";

import AnimatedCounter from "../components/AnimatedCounter";

import ScrollAnimations from "../components/ScrollAnimations";

import GoldenBeeGuide from "../components/GoldenBeeGuide";

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
      <GoldenBeeGuide />
      {/* PRELOADER */}

      <div className="preloader" aria-hidden="true">

        <div className="preloader-mark">

          <span className="preloader-bee">✦</span>

          <span>KAVKAZ HILLS</span>

        </div>

      </div>

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

          <img

            src="/images/hero/founder.jpg"

            alt={

              lang === "en"

                ? "Founder and head beekeeper of Kavkaz Hills"

                : "Основатель и главный пчеловод Kavkaz Hills"

            }

            className="hero-founder-image"

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

              ? "High in the Caucasus, nature still keeps its own time. We simply learned not to interrupt it."

              : "Высоко в горах Кавказа природа всё ещё живёт в своём ритме. Мы лишь научились ей не мешать."}

          </p>

          <div className="hero-actions">
  <a href="#collection" className="hero-collection-button">
    {lang === "ru" ? "Смотреть коллекцию" : "View collection"}
  </a>

  <a
    href="#collection"
    className="hero-scroll-hint"
    aria-label={lang === "ru" ? "Прокрутить вниз" : "Scroll down"}
  >
    <span />
  </a>
</div>

<div className="hero-facts">
  <div className="hero-fact">
    <strong>
  <AnimatedCounter value={20} suffix="+" />
</strong>
    <span>{lang === "ru" ? "видов продуктов" : "product varieties"}</span>
  </div>

  <div className="hero-fact">
    <strong>100%</strong>
    <span>{lang === "ru" ? "натурально" : "natural"}</span>
  </div>

  <div className="hero-fact">
    <strong>∞</strong>
    <span>{lang === "ru" ? "уважение к природе" : "respect for nature"}</span>
  </div>
</div>

          <div className="hero-actions">

            <a

              href="#collection"

              className="hero-button-primary"

            >

              {lang === "en"

                ? "Explore collection"

                : "Смотреть коллекцию"}

            </a>

            <a

              href="#manifesto"

              className="hero-button-secondary"
              >

              {lang === "en"

                ? "Discover our story"

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

      {/* MANIFESTO */}
      <section className="manifesto-parallax">
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

      {/* Hive */}
      <article className="manifesto-card">
        <div className="manifesto-icon">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M20 17h24l8 14-8 16H20L12 31Z" />
            <path d="M20 17 12 31l8 16" />
            <path d="M44 17 52 31l-8 16" />
            <path d="M12 31h40" />
          </svg>
        </div>

        <span className="manifesto-number">02</span>

        <h3>{lang === "ru" ? "Забота" : "Care"}</h3>

        <p>
          {lang === "ru"
            ? "Мы не забираем у пчёл больше, чем позволяет естественный цикл."
            : "We never take more from the bees than their natural cycle allows."}
        </p>
      </article>

      {/* Hands */}
      <article className="manifesto-card">
        <div className="manifesto-icon">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M7 39c8-2 13 0 19 6l5 5" />
            <path d="M57 39c-8-2-13 0-19 6l-5 5" />
            <path d="M20 38 32 26l12 12" />
            <path d="M25 43 32 50l7-7" />
          </svg>
        </div>

        <span className="manifesto-number">03</span>

        <h3>{lang === "ru" ? "Мастерство" : "Craft"}</h3>

        <p>
          {lang === "ru"
            ? "Внимание человека на каждом этапе — от пасеки до готового продукта."
            : "Human attention at every stage — from the apiary to the finished product."}
        </p>
      </article>

    </div>
  </div>
</section>

      <section className="apiary-film-section">
  <div className="apiary-film-copy">
    <span className="eyebrow">
      {lang === "ru" ? "Живая пасека" : "From the apiary"}
    </span>

    <h2>
      {lang === "ru"
        ? "Там, где начинается наш мёд"
        : "Where our honey begins"}
    </h2>

    <p>
      {lang === "ru"
        ? "Наши пасеки находятся среди кавказской природы. Здесь важны не скорость и объём, а состояние пчёл, сезон и естественный ритм."
        : "Our apiaries live within the landscape of the Caucasus. What matters here is not speed or volume, but the condition of the bees, the season, and the natural rhythm."}
    </p>
  </div>
</section>

      {/* PRODUCTION / TRUST */}

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

    <a href={`/${lang}/about`} className="source-button">
      {lang === "ru" ? "Узнать больше" : "Learn more"}
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</section>

      <section

        className="production-section reveal-section"

        id="story"

      >

        <div className="section-gold-line" />

        <div className="production-heading">

          <div>

            <p className="section-kicker">

              {lang === "en"

                ? "Our apiary"

                : "Наша пасека"}

            </p>

            <h2>

              {lang === "en"

                ? "Care is part of the process."

                : "Забота — часть производства."}

            </h2>

          </div>

          <p>

            {lang === "en"

              ? "Our work begins with the bees, not with the jar. We protect the rhythm of the hive, preserve what the colony needs and take only what nature can give."

              : "Наша работа начинается с пчёл, а не с банки мёда. Мы сохраняем естественный ритм улья, оставляем пчёлам необходимое и берём только то, что природа может отдать."}

          </p>

        </div>

        <div className="production-grid">

          <div className="production-photo production-photo-main">

            <img

              src="/public/images/beekeeprs/IMG_9385.JPG"

              alt={

                lang === "en"

                  ? "Kavkaz Hills beekeeper at the apiary"

                  : "Пчеловод Kavkaz Hills на пасеке"

              }

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
          <div className="production-principles">

            <article className="production-principle">

              <span>01</span>

              <div>

                <h3>

                  {lang === "en"

                    ? "The hive comes first."

                    : "Сначала — улей."}

                </h3>

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

                <h3>

                  {lang === "en"

                    ? "No unnecessary intervention."

                    : "Без лишнего вмешательства."}

                </h3>

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

                <h3>

                  {lang === "en"

                    ? "Nothing to hide."

                    : "Нам нечего скрывать."}

                </h3>

                <p>

                  {lang === "en"

                    ? "Our products begin here — among wooden hives, mountain air and the hands of people who know every stage of the process."

                    : "Наш продукт начинается здесь — среди деревянных ульев, горного воздуха и людей, которые знают каждый этап производства."}

                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* COLLECTION */}

      <section

        className="collection-section reveal-section"

        id="collection"

      >

        <div className="section-gold-line" />

        <div className="collection-heading">

          <div>

            <p className="section-kicker">

              {lang === "en"

                ? "Our collection"

                : "Наша коллекция"}

            </p>

            <h2>

              {lang === "en"

                ? "From the mountains, in different forms."

                : "Из гор — в разных формах."}

            </h2>

          </div>

          <p className="collection-description">

            {lang === "en"

              ? "Honey, bee products, urbech and tea. Different traditions connected by one land."

              : "Мёд, продукты пчеловодства, урбеч и чай. Разные традиции, объединённые одной землёй."}

          </p>

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
            
      {/* NATURE / PROCESS */}
      <section className="nature-section reveal-section">

        <div className="section-gold-line" />

        <div className="nature-statement">

          <p className="section-kicker">

            {lang === "en"

              ? "The source"

              : "Источник"}

          </p>

          <h2>

            {lang === "en"

              ? "The mountains do not hurry. Neither do we."

              : "Горы не спешат. Мы тоже."}

          </h2>

          <p>

            {lang === "en"

              ? "Every season changes the landscape. Every flowering plant changes the hive. This is why nature is not simply a background to Kavkaz Hills — it is part of the recipe."

              : "Каждый сезон меняет пейзаж. Каждое цветущее растение меняет улей. Поэтому природа для Kavkaz Hills — не фон. Она часть самого продукта."}

          </p>

        </div>

        <div className="nature-visual">

          <img

            src="/public/images/beekeeprs/IMG_9385.JPG"

            alt={

              lang === "en"

                ? "Kavkaz Hills apiary in the Caucasus"

                : "Пасека Kavkaz Hills на Кавказе"

            }

          />

          <div className="nature-visual-overlay" />

          <p className="nature-quote">

            {lang === "en"

              ? "The best part of our process is knowing when to do nothing."

              : "Иногда самое важное в производстве — вовремя ничего не делать."}

          </p>

        </div>

      </section>

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

            <h2>

              {lang === "en"

                ? "From our mountains to your table."

                : "От наших гор — к вашему столу."}

            </h2>

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