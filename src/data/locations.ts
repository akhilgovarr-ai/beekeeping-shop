import type { Locale } from "../i18n/dictionaries";
type Location = { id: string; name: Record<Locale, string>; address: Record<Locale, string>; mapUrl?: string };
// Placeholder: add confirmed sales locations here.
export const locations: Location[] = [];
