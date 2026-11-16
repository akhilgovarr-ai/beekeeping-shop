import type { Locale } from "../i18n/dictionaries";

type WhyUsItem = { id: string; iconPath: string; title: Record<Locale, string> };

export const whyUs = {
  title: { ru: "Почему выбирают нас?", en: "Why choose us?" },
  items: [
  {
    "id": "wooden-hives",
    "iconPath": "M4 9h16v12H4z M3 9l9-6 9 6 M4 13h16 M4 17h16",
    "title": {
      "ru": "Деревянные ульи",
      "en": "Wooden hives"
    }
  },
  {
    "id": "no-chemicals",
    "iconPath": "M9 3h6 M10 3v6L4 19q-1 2 2 2h12q3 0 2-2L14 9V3 M8 14h8 M3 3l18 18",
    "title": {
      "ru": "Отсутствие химической обработки",
      "en": "No chemical treatment"
    }
  },
  {
    "id": "natural-herbs",
    "iconPath": "M12 21V10 M12 15C5 15 4 10 4 6c6 0 8 3 8 9 M12 11c0-6 3-8 8-8 0 5-2 8-8 8",
    "title": {
      "ru": "Лечение пчёл исключительно натуральными травами",
      "en": "Bees treated exclusively with natural herbs"
    }
  },
  {
    "id": "clean-fields",
    "iconPath": "M3 21h18 M8 21v-4H3l5-7H5l5-7 5 7h-3l5 7h-5v4 M17 4l4 6h-3l3 5h-3",
    "title": {
      "ru": "Сбор урожая только с экологически чистых полей и лесов",
      "en": "Harvest only from ecologically clean fields and forests"
    }
  },
  {
    "id": "winter-feed",
    "iconPath": "M3 13h18c0 5-3 8-9 8s-9-3-9-8Z M8 9V5 M12 8V3 M16 9V5",
    "title": {
      "ru": "Канди с пыльцой в качестве зимней подкормки вместо сахара",
      "en": "Candy with pollen as winter feed instead of sugar"
    }
  }
],
} satisfies { title: Record<Locale, string>; items: WhyUsItem[] };
