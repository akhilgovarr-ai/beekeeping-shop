import { notFound } from "next/navigation";
import PartnersPageClient from "../../components/PartnersPageClient";

const locales = ["en", "ru"] as const;
type Locale = (typeof locales)[number];

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <PartnersPageClient locale={locale as Locale} />;
}