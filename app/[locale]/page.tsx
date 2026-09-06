import { products } from "../../src/data/products";
import Link from "next/link";

import { notFound } from "next/navigation";

import {

  dictionaries,

  type Locale,

} from "../../src/i18n/dictionaries";

function MountainMark() {

  return (

    <svg

      viewBox="0 0 120 46"

      aria-hidden="true"

      className="mountain-mark"

    >

      <path

        d="M3 41L27 14L41 29L61 3L82 28L92 17L117 41"

        fill="none"

        stroke="currentColor"

        strokeWidth="1.3"

        strokeLinecap="round"

        strokeLinejoin="round"

      />

    </svg>

  );

}

export default async function LocalePage({

  params,

}: {

  params: Promise<{ locale: string }>;

}) {

  const { locale } = await params;

  if (!(locale in dictionaries)) {

    notFound();

  }

  const lang = locale as Locale;

  const t = dictionaries[lang];

  const alternateLocale = lang === "en" ? "ru" : "en";

  const localizedProducts = products.map((product) => ({
  ...product,
  content: product[lang],
  image: `/images/${product.category}/${lang}/${product.imageName}`,
}));

  const productImage =

    lang === "en"

      ? "/images/products/en/hero-honey.png"

      : "/images/products/ru/hero-honey.png";

  return (

    <main>

      <section className="hero">
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
          : "Основатель пасеки и главный пчеловод Kavkaz Hills"
      }
      className="hero-founder-image"
    />

    <div className="hero-overlay" />
    <div className="hero-glow" />
  </div>

  <div className="hero-content">
    <div className="hero-kicker">
      {lang === "en" ? "North Caucasus" : "Северный Кавказ"}
    </div>

    <h1 className="hero-title">
      {lang === "en" ? (
        <>
          Some things
          

          cannot be rushed.
        </>
      ) : (
        <>
          Некоторые вещи
          

          нельзя торопить.
        </>
      )}
    </h1>

    <div className="hero-accent-line" />

    <p className="hero-subtitle">
      {lang === "en"
        ? "Honey is one of them."
        : "Мёд — одна из них."}
    </p>

    <p className="hero-description">
      {lang === "en"
        ? "High in the Caucasus, nature still keeps its own time. We simply learned not to interrupt it."
        : "Высоко в горах Кавказа природа всё ещё живёт в своём ритме. Мы лишь научились ей не мешать."}
    </p>

    <div className="hero-actions">
      <a href="#collection" className="hero-button-primary">
        {lang === "en" ? "Explore collection" : "Смотреть коллекцию"}
      </a>

      <a href="#story" className="hero-button-secondary">
        {lang === "en" ? "Our story" : "Наша история"}
      </a>
    </div>
  </div>

  <div className="hero-scroll">
    <span>{lang === "en" ? "Scroll" : "Листайте"}</span>
    <div className="hero-scroll-line" />
  </div>
</section>

<section className="collection-section" id="collection">
  <div className="collection-heading">
    <div>
      <p className="section-kicker">
        {lang === "en" ? "Our collection" : "Наша коллекция"}
      </p>

      <h2>
        {lang === "en"
          ? "Born from the land."
          : "Рождённое землёй."}
      </h2>
    </div>

    <p className="collection-description">
      {lang === "en"
        ? "Natural products rooted in the mountains, traditions and careful craftsmanship of the North Caucasus."
        : "Натуральные продукты, выросшие из гор, традиций и бережного мастерства Северного Кавказа."}
    </p>
  </div>

  <div className="products-grid">
    {localizedProducts.map((product, index) => (
      <article className="product-card" key={product.id}>
        <div className="product-card-top">
          <span className="product-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="product-weight">
            {product.weight}
          </span>
        </div>

        <div className="product-card-image">
          <img
            src={product.image}
            alt={product.content.name}
          />
        </div>

        <div className="product-card-content">
          <div>
            <p className="product-category">
              {product.category.replace("-", " ")}
            </p>

            <h3>{product.content.name}</h3>
          </div>

          <p className="product-card-description">
            {product.content.description}
          </p>

          <div className="product-card-footer">
            <span className="product-price">
              ${product.price}
            </span>

            <button
              type="button"
              className="product-add-button"
            >
              {lang === "en" ? "Add to order" : "Добавить"}
              <span>+</span>
            </button>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

    </main>

  );

}