import { notFound } from "next/navigation";
import CataloguePageClient from "../../components/CataloguePageClient";

const locales = ["en", "ru"] as const;
type Locale = (typeof locales)[number];

export default async function CataloguePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <CataloguePageClient locale={locale as Locale} />;
}