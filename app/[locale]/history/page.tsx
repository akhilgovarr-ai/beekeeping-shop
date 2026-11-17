import { notFound, permanentRedirect } from "next/navigation";
export default async function HistoryRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  permanentRedirect(`/${locale}/about`);
}
