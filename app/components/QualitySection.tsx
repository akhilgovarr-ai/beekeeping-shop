import { declarationUrl, quality } from "../../src/data/quality";
import type { Locale } from "../../src/i18n/dictionaries";

export default function QualitySection({ locale }: { locale: Locale }) {
  const t = quality[locale];
  return (
    <section id="quality" className="kh-quality kh-section" aria-labelledby="quality-title">
      <h2 id="quality-title">{t.title}</h2>
      <h3>{t.document}</h3>
      <p className="kh-quality-scope">{t.scope}</p>
      <dl className="kh-quality-facts">
        {t.facts.map(fact => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <a className="kh-button" href={declarationUrl} target="_blank" rel="noopener noreferrer">{t.openPdf}</a>
    </section>
  );
}
