import { partnersContent, type Partner } from "../../src/data/partners";
import type { Locale } from "../../src/i18n/dictionaries";

export default function PartnerCard({ partner, locale }: { partner: Partner; locale: Locale }) {
  const t = partnersContent[locale];

  return (
    <article className="kh-partner-card" aria-labelledby={`partner-${partner.id}`}>
      <h3 id={`partner-${partner.id}`}>{partner.name}</h3>
      <p className="kh-partner-city">{partner.city[locale]}</p>
      <ul className="kh-partner-addresses">
        {partner.addresses.map(address => (
          <li key={address.en}>
            <p>{address[locale]}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address[locale])}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.openMap}: ${partner.name}, ${address[locale]}`}
            >
              {t.openMap}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
