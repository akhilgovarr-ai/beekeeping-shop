import { notFound } from "next/navigation";
import Header from "../../components/Header";
import PartnersSection from "../../components/PartnersSection";
import { locations } from "../../../src/data/locations";
import { dictionaries } from "../../../src/i18n/dictionaries";

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();
  const t = dictionaries[locale].header;
  return <>
    <Header locale={locale} />
    <main className="kh-locations">
      <h1 className="kh-locations-title">{t.locations}</h1>
      <PartnersSection locale={locale} placement="locations" />
      <div className="kh-section kh-locations-existing">
        {locations.length ? <ul className="kh-location-list">{locations.map(location => <li key={location.id}>
          <strong>{location.name[locale]}</strong><p>{location.address[locale]}</p>
          {location.mapUrl && <a className="kh-text-link" href={location.mapUrl}>{t.locations} ↗</a>}
        </li>)}</ul> : <p>{t.noLocations}</p>}
      </div>
    </main>
  </>;
}
