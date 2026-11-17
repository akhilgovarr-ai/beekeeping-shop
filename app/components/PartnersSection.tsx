import { partners, partnersContent } from "../../src/data/partners";
import type { Locale } from "../../src/i18n/dictionaries";
import PartnerCard from "./PartnerCard";
import Reveal from "./Reveal";

export default function PartnersSection({ locale, placement = "home" }: { locale: Locale; placement?: "home" | "locations" }) {
  const t = partnersContent[locale];

  return (
    <section id="partners" className={`kh-partners kh-section ${placement === "locations" ? "kh-locations-partners" : ""}`} aria-labelledby="partners-title">
      <h2 id="partners-title">{placement === "locations" ? t.locationsTitle : t.title}</h2>
      <p className="kh-partners-intro">{placement === "locations" ? t.locationsSubtitle : t.subtitle}</p>
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
