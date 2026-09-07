import { notFound } from "next/navigation";

import {

  dictionaries,

  type Locale,

} from "../../src/i18n/dictionaries";

import { products } from "../../src/data/products";

import UrbechShowcase from "../components/UrbechShowcase";

import ScrollAnimations from "../components/ScrollAnimations";

import GoldenBeeGuide from "../components/GoldenBeeGuide";

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

  const honeyProducts = localizedProducts.filter(

    (product) => product.category === "honey"

  );

  const hiveProducts = localizedProducts.filter(

    (product) => product.category === "honey-products"

  );

  const urbechProducts = localizedProducts.filter(

    (product) => product.category === "urbech"

  );

  const teaProducts = localizedProducts.filter(

    (product) => product.category === "tea"

  );

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
      <section

        className="manifesto-section reveal-section"

        id="manifesto"

      >

        <div className="section-gold-line" />

        <div className="manifesto-inner">

          <p className="section-kicker">

            {lang === "en"

              ? "Our manifesto"

              : "Наш манифест"}

          </p>

          <h2>

            {lang === "en" ? (

              <>

                This is our honey.

                


                Our land.

                


                <em>Our pride.</em>

              </>

            ) : (

              <>

                Это наш мёд.

                


                Наша земля.

                


                <em>Наша гордость.</em>

              </>

            )}

          </h2>

          <div className="manifesto-copy">

            <p>

              {lang === "en"

                ? "Kavkaz Hills was born from a simple belief: the strongest things do not need to be forced. They need time, clean land and respect."

                : "Kavkaz Hills родился из простой мысли: настоящее не нужно подгонять. Ему нужны время, чистая земля и уважение."}

            </p>

            <p>

              {lang === "en"

                ? "The mountains give us far more than ingredients. They teach patience, responsibility and the value of knowing when not to interfere."

                : "Горы дают нам гораздо больше, чем сырьё. Они учат терпению, ответственности и умению вовремя не вмешиваться."}

            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTION / TRUST */}

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

              src="/images/hero/founder.jpg"

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

        {/* HONEY */}

        {honeyProducts.length > 0 && (

          <div className="collection-group collection-group-honey">

            <div className="collection-group-heading">

              <div>

                <p className="section-kicker">

                  {lang === "en"

                    ? "Our honey"

                    : "Наш мёд"}

                </p>

                <h3>

                  {lang === "en"

                    ? "The heart of Kavkaz Hills."

                    : "Сердце Kavkaz Hills."}

                </h3>

              </div>

              <p>

                {lang === "en"

                  ? "Honey shaped by the landscape, the season and the plants blooming around our apiaries."

                  : "Мёд, характер которого создают местность, сезон и растения вокруг наших пасек."}

              </p>

            </div>
            <div className="standard-products-grid">

              {honeyProducts.map((product) => (

                <article

                  className="catalog-product-card"

                  key={product.id}

                >

                  <div className="catalog-product-image">

                    <img

                      src={product.image}

                      alt={product.content.name}

                    />

                  </div>

                  <div className="catalog-product-content">

                    <p className="product-category">

                      {categoryLabels[lang][product.category]}

                    </p>

                    <h4>{product.content.name}</h4>

                    <p>{product.content.description}</p>

                    <div className="catalog-product-footer">

                      <span className="catalog-price">

                        {product.price > 0

                          ? `$${product.price}`

                          : lang === "en"

                            ? "Price on request"

                            : "Цена по запросу"}

                      </span>

                      <a

                        href="#contact"

                        className="catalog-order-button"

                      >

                        {lang === "en"

                          ? "Order"

                          : "Заказать"}

                      </a>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        )}

        {/* FROM THE HIVE */}

        <div className="collection-group collection-group-hive">

          <div className="collection-group-heading">

            <div>

              <p className="section-kicker">

                {lang === "en"

                  ? "From the hive"

                  : "Из улья"}

              </p>

              <h3>

                {lang === "en"

                  ? "Not everything the bees make is honey."

                  : "Не всё, что создают пчёлы, — мёд."}

              </h3>

            </div>

            <p>

              {lang === "en"

                ? "Bee bread, pollen and propolis — three products born inside the same living system."

                : "Перга, пыльца и прополис — три разных продукта, созданных внутри одной живой системы."}

            </p>

          </div>

          <div className="hive-products-grid">

            {hiveProducts.map((product) => (

              <article

                className="hive-product-card"

                key={product.id}

              >

                <div className="hive-product-image">

                  <img

                    src={product.image}

                    alt={product.content.name}

                  />

                </div>

                <div className="hive-product-content">

                  <p className="product-category">

                    {categoryLabels[lang][product.category]}

                  </p>

                  <h4>{product.content.name}</h4>

                  <p>{product.content.description}</p>

                  <div className="catalog-product-footer">

                    <span className="catalog-price">

                      {product.price > 0

                        ? `$${product.price}`

                        : lang === "en"

                          ? "Price on request"

                          : "Цена по запросу"}

                    </span>
                    <a

                      href="#contact"

                      className="catalog-order-button"

                    >

                      {lang === "en"

                        ? "Order"

                        : "Заказать"}

                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* URBECH */}

        <div className="collection-group collection-group-urbech">

          <div className="collection-group-heading">

            <div>

              <p className="section-kicker">

                {lang === "en"

                  ? "Urbech collection"

                  : "Коллекция урбеча"}

              </p>

              <h3>

                {lang === "en"

                  ? "One tradition. Many characters."

                  : "Одна традиция. Много характеров."}

              </h3>

            </div>

            <p>

              {lang === "en"

                ? "Seeds, nuts and kernels slowly ground into a dense natural paste."

                : "Семена, орехи и ядра, медленно перетёртые в густую натуральную пасту."}

            </p>

          </div>

          <UrbechShowcase

            products={urbechProducts}

            categoryLabel={categoryLabels[lang]["urbech"]}

          />

        </div>

        {/* TEA */}

        <div className="collection-group collection-group-tea">

          <div className="collection-group-heading">

            <div>

              <p className="section-kicker">

                {lang === "en"

                  ? "Tea rituals"

                  : "Чайные ритуалы"}

              </p>

              <h3>

                {lang === "en"

                  ? "A quieter way to taste the land."

                  : "Более тихий способ почувствовать землю."}

              </h3>

            </div>

            <p>

              {lang === "en"

                ? "Two teas, two traditions — created for moments that should not be rushed."

                : "Два чая, две традиции — для моментов, которые не хочется торопить."}

            </p>

          </div>

          <div className="tea-products-grid">

            {teaProducts.map((product) => (

              <article

                className="tea-product-card"

                key={product.id}

              >

                <div className="tea-product-image">

                  <img

                    src={product.image}

                    alt={product.content.name}

                  />

                </div>

                <div className="tea-product-content">

                  <p className="product-category">

                    {categoryLabels[lang][product.category]}

                  </p>

                  <h4>{product.content.name}</h4>

                  <p>{product.content.description}</p>

                  <div className="catalog-product-footer">

                    <span className="catalog-price">

                      {product.price > 0

                        ? `$${product.price}`

                        : lang === "en"

                          ? "Price on request"

                          : "Цена по запросу"}

                    </span>

                    <a

                      href="#contact"

                      className="catalog-order-button"

                    >

                      {lang === "en"

                        ? "Order"

                        : "Заказать"}

                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

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

            src="/images/hero/founder.jpg"

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