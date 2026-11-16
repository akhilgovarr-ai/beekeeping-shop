import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import HistoryHero from "../../components/HistoryHero";
import HistoryBlock from "../../components/HistoryBlock";
import { history } from "../../../src/data/history";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const content = history[locale];

  return {
    title: content.title,
    description: content.subtitle,
    alternates: {
      canonical: `/${locale}/history`,
      languages: { ru: "/ru/history", en: "/en/history" },
    },
    openGraph: {
      title: content.title,
      description: content.subtitle,
      url: `/${locale}/history`,
      siteName: "Kavkaz Hills",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? "en_US" : "ru_RU",
      type: "website",
    },
  };
}

export default async function HistoryPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const content = history[locale];

  return (
    <>
      <Header locale={locale} />
      <main className="kh-history">
        <HistoryHero title={content.title} subtitle={content.subtitle} />
        <div className="kh-history-route">
          {content.blocks.map((block, index) => (
            <HistoryBlock key={block.id} block={block} number={index + 1} />
          ))}
        </div>
        <div className="kh-history-cta">
          <a className="kh-button" href={`/${locale}/catalogue`}>{content.catalogueCta}</a>
        </div>
      </main>
    </>
  );
}
