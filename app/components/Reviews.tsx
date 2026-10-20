import { reviews } from "../../src/data/reviews";
import { dictionaries, type Locale } from "../../src/i18n/dictionaries";

export default function Reviews({ locale }: { locale: Locale }) {
  const t = dictionaries[locale].reviews;
  return (
    <section id="reviews" className="kh-reviews kh-section" aria-labelledby="reviews-title">
      <h2 id="reviews-title">{t.title}</h2>
      {reviews.length === 0 ? (
        <p className="kh-reviews-empty">{t.empty}</p>
      ) : (
        <div className="kh-reviews-grid">
          {reviews.map(review => (
            <figure key={review.id} className="kh-review-card">
              <blockquote><p>{review.text[locale]}</p></blockquote>
              <figcaption>{review.author}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
