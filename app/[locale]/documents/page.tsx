import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import { declarationUrl, documentsContent } from "../../../src/data/documents";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const t = documentsContent[locale];
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `/${locale}/documents`, languages: { ru: "/ru/documents", en: "/en/documents" } },
    openGraph: { title: t.title, description: t.description, url: `/${locale}/documents`, locale: locale === "ru" ? "ru_RU" : "en_US", type: "website" },
  };
}

export default async function DocumentsPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const t = documentsContent[locale];
  return <>
    <Header locale={locale} />
    <main className="kh-documents kh-section">
      <h1>{t.title}</h1>
      <p>{t.description}</p>
      <a className="kh-button" href={declarationUrl} target="_blank" rel="noopener noreferrer">{t.openPdf}</a>
    </main>
  </>;
}
