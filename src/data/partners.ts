import type { Locale } from "../i18n/dictionaries";

type LocalizedText = Record<Locale, string>;

export type Partner = {
  id: string;
  name: string;
  city: LocalizedText;
  country: LocalizedText;
  addresses: LocalizedText[];
};

export const partners: Partner[] = [
  {
    id: "ullu",
    name: "Ресторан ULLU",
    city: { ru: "Москва", en: "Moscow" },
    country: { ru: "Россия", en: "Russia" },
    addresses: [
      {
        ru: "Москва, Мичуринский просп., 22, корп. 1, 2 этаж",
        en: "Michurinsky Ave, 22, bldg 1, 2nd floor, Moscow",
      },
    ],
  },
  {
    id: "emir",
    name: "Emir Turkish Restaurant",
    city: { ru: "Дубай", en: "Dubai" },
    country: { ru: "ОАЭ", en: "UAE" },
    addresses: [
      {
        ru: "Дубай, The Market, DIP1, Green Community Village",
        en: "The Market, DIP1, Green Community Village, Dubai",
      },
    ],
  },
  {
    id: "vaynah",
    name: "Vaynah Restaurant",
    city: { ru: "Дубай", en: "Dubai" },
    country: { ru: "ОАЭ", en: "UAE" },
    addresses: [
      { ru: "Дубай, Circle Mall, JVC", en: "Circle Mall, JVC, Dubai" },
    ],
  },
  {
    id: "vanilla-cake",
    name: "Vanilla cake",
    city: { ru: "Назрань, Магас", en: "Nazran, Magas" },
    country: { ru: "Россия", en: "Russia" },
    addresses: [
      { ru: "г. Назрань, ул. Базоркина, 14", en: "Bazorkina St, 14, Nazran" },
      { ru: "г. Магас, Цветочный переулок, 1", en: "Tsvetochny Ln, 1, Magas" },
    ],
  },
];

export const partnersContent = {
  ru: {
    title: "Наши партнёры",
    subtitle: "Наши партнёры и их адреса.",
    openMap: "Открыть на карте",
  },
  en: {
    title: "Our partners",
    subtitle: "Our partners and their addresses.",
    openMap: "Open on map",
  },
} satisfies Record<Locale, { title: string; subtitle: string; openMap: string }>;
