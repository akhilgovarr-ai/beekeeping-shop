import type { LocalizedText } from "../../src/types/product";
import type { Locale } from "../../src/i18n/dictionaries";

export default function AllergenNote({ note, locale, id }: {
  note?: LocalizedText;
  locale: Locale;
  id?: string;
}) {
  if (!note?.[locale]) return null;
  return <p id={id} className="kh-allergen-note">{note[locale]}</p>;
}
