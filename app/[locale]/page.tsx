import { notFound } from "next/navigation";
import {

  type Locale,

} from "../../src/i18n/dictionaries";
import { products } from "../../src/data/products";
import Image from "next/image";
import { redirect } from "next/navigation";
import Reveal from "../components/Reveal";
import PreviewGrid from "../components/PreviewGrid";
import Header from "../components/Header";

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
  content: {
    name: product.name[lang],
    description: product.shortDescription[lang],
  },
  image: `/images/${product.category}/${lang}/${product.imageName}`,
}));

  return (

    <main className="site-main">
      
     <Header locale={lang} />
      {/* HERO */}

     <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
  <Image
    src="/images/beekeepers/IMG_9428.JPG"
    alt={
      lang === "en"
        ? "Founder and head beekeeper of Kavkaz Hills"
        : "Основатель и главный пчеловод Kavkaz Hills"
    }
    fill
    priority
    sizes="100vw"
    className="object-cover opacity-90"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/70 to-paper/10" />
  <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 md:px-10 md:pb-28">
    <span className="text-sm font-medium tracking-label text-ink md:text-base">
      {lang === "ru" ? "Северный Кавказ" : "North Caucasus"}
    </span>
    <h1 className="mt-4 font-serif text-6xl font-semibold leading-[0.95] text-gold md:text-8xl lg:text-9xl">
      Kavkaz Hills
    </h1>
    <p className="mt-6 max-w-xl text-lg text-ink md:text-xl">
      {lang === "ru"
        ? "Высоко в горах Кавказа природа всё ещё живёт в своём ритме."
        : "High in the Caucasus, nature still keeps its own time."}
    </p>
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <a
        href="#collection"
        className="border border-gold bg-paper/40 px-10 py-4 text-sm font-medium tracking-label text-gold transition-colors hover:bg-gold hover:text-paper md:text-base"
      >
        {lang === "ru" ? "Смотреть коллекцию" : "View collection"}
      </a>
      <a
        href="#manifesto"
        className="px-6 py-4 text-sm font-medium tracking-label text-ink underline decoration-gold underline-offset-8 transition-colors hover:text-gold md:text-base"
      >
        {lang === "ru" ? "Наша история" : "Our story"}
      </a>
    </div>
  </div>
</section>

{/* ABOUT */}
<Reveal>
  <section id="about" className="mx-auto max-w-350 px-6 py-24 md:px-10 md:py-32">
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-line/40 md:aspect-[21/9]">
      <Image
        src="/images/beekeepers/IMG_9620.JPG"
        alt={
          lang === "en"
            ? "Kavkaz Hills beekeeper at the apiary"
            : "Пчеловод Kavkaz Hills на пасеке"
        }
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
    <p className="mt-6 text-sm text-ink-soft">
      {lang === "ru" ? "Пчеловод Kavkaz Hills на пасеке." : "Kavkaz Hills beekeeper at the apiary."}
    </p>
  </section>
</Reveal>

{/* COLLECTION PREVIEW — те же карточки, что в каталоге */}
<Reveal>
  <section id="collection" className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="text-xs tracking-label text-ink-soft">
          {lang === "ru" ? "Коллекция" : "Collection"}
        </span>
        <h2 className="mt-3 text-heading font-medium text-ink">
          {lang === "ru" ? "Выберите свой продукт" : "Choose your product"}
        </h2>
      </div>
      <a
        href={`/${lang}/catalogue`}
        className="text-sm text-ink underline underline-offset-4"
      >
        {lang === "ru" ? "Весь каталог →" : "Full catalogue →"}
      </a>
    </div>

    <div className="mt-10">
      <PreviewGrid locale={lang} />
      </div>
     </section>
    </Reveal>
            
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