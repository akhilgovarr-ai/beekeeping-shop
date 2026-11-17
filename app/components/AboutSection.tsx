import Image from "next/image";
import { history } from "../../src/data/history";
import type { Locale } from "../../src/i18n/dictionaries";
import Reveal from "./Reveal";

export default function AboutSection({ locale }: { locale: Locale }) {
  const content = history[locale];
  return (
    <Reveal>
      <section className="kh-about-teaser kh-section" aria-labelledby="about-teaser-title">
        <div className="kh-about-photo">
          <Image src="/images/beekeepers/IMG_9620.JPG" fill
            alt={locale === "ru" ? "Пчеловод в защитной сетке держит дымарь над открытым ульем" : "A beekeeper wearing a veil holds a smoker over an open hive"}
            sizes="(max-width: 767px) calc(100vw - 24px), 50vw" loading="lazy" />
        </div>
        <div className="kh-about-copy">
          <h2 id="about-teaser-title">{content.title}</h2>
          <p>{content.blocks.find(block => block.id === "principle")?.text}</p>
          <a className="kh-button" href={`/${locale}/about`}>{locale === "ru" ? "Читать полностью" : "Read more"}</a>
        </div>
      </section>
    </Reveal>
  );
}
