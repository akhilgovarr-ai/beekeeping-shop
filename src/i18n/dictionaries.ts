export const dictionaries = {
  en: {
    nav: {
      collection: "Collection",
      origin: "Our origin",
      story: "Story",
      contact: "Contact",
      order: "Order",
    },

    hero: {
      eyebrow: "North Caucasus",
      titleLine1: "Energy of",
      titleLine2: " the mountains.",
      titleAccent: "Soul of the Caucasus.",
      description:
        "Natural products shaped by mountain air, ancient craft and a deep respect for the land.",
      primaryCta: "Explore collection",
      secondaryCta: "Discover our story",
    },
  },

  ru: {
    nav: {
      collection: "Коллекция",
      origin: "Происхождение",
      story: "История",
      contact: "Контакты",
      order: "Заказать",
    },

    hero: {
      eyebrow: "Северный Кавказ",
      titleLine1: "Энергия",
      titleLine2: " гор.",
      titleAccent: "Душа Кавказа.",
      description:
        "Натуральные продукты, созданные природой, традициями и уважением к земле.",
      primaryCta: "Смотреть коллекцию",
      secondaryCta: "Наша история",
    },
  },
} as const;

export type Locale = keyof typeof dictionaries;