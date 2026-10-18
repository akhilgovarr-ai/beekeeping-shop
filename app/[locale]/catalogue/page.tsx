import { notFound } from "next/navigation";
import CataloguePageClient from "../../components/CataloguePageClient";

const locales = ["en", "ru"] as const;
type Locale = (typeof locales)[number];

export default async function CataloguePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const { product } = await searchParams;
  return (
    <CataloguePageClient
      locale={locale as Locale}
      selectedSlug={typeof product === "string" ? product : undefined}
    />
  );
}
