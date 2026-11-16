import { partners, partnersContent } from "../../src/data/partners";
import type { Locale } from "../../src/i18n/dictionaries";
import PartnerCard from "./PartnerCard";
import Reveal from "./Reveal";

export default function PartnersSection({ locale }: { locale: Locale }) {
  const t = partnersContent[locale];

  return (
    <section id="partners" className="kh-partners kh-section" aria-labelledby="partners-title">
      <h2 id="partners-title">{t.title}</h2>
      <p className="kh-partners-intro">{t.subtitle}</p>
      <div className="kh-partners-grid">
        {partners.map(partner => (
          <Reveal key={partner.id} className="kh-partner-reveal">
            <PartnerCard partner={partner} locale={locale} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
