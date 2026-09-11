import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";

const locales = ["en", "ru"] as const;
type Locale = (typeof locales)[number];

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteContent = {
  ru: {
    title: "Kavkaz Hills — натуральные продукты пчеловодства с Кавказа",
    description:
      "Мёд, урбеч и чай ручной работы с горных пасек Северного Кавказа. Pure strength of nature, born in the mountains.",
  },
  en: {
    title: "Kavkaz Hills — Natural Beekeeping Products from the Caucasus",
    description:
      "Handcrafted honey, urbech and tea from the mountain apiaries of the North Caucasus. Pure strength of nature, born in the mountains.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locales.includes(locale as Locale) ? locale : "en") as Locale;
  const content = siteContent[lang];

  return {
    metadataBase: new URL("https://www.kavkazhills.com"),
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { ru: "/ru", en: "/en" },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.kavkazhills.com/${lang}`,
      siteName: "Kavkaz Hills",
      locale: lang === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}