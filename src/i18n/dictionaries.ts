export const dictionaries = {
  en: {
    catalogue: {
      showCategories: "Show all categories", hideCategories: "Hide categories",
      all: "All products", comingSoon: "Coming soon",
    },
    header: {
      home: "Kavkaz Hills — home", call: "Call us", locations: "Sales locations",
      certificates: "Certificates", menu: "Menu", close: "Close panel", catalogue: "Catalogue",
      delivery: "Delivery and payment", cart: "Cart", story: "Our story",
      language: "Language", hours: "Opening hours", phone: "Russian phone number",
      missing: "Details will be added", whatsapp: "WhatsApp",
      noLocations: "Sales locations will be added.",
      deliveryInfo: "Delivery across Russia via CDEK",
    },
    nav: {
      collection: "Collection",
      origin: "Our origin",
      story: "Story",
      contact: "Contact",
      order: "Order",
    },

    hero: {
      headline: "Natural bee products",
      catalogueCta: "Go to catalogue",
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
    catalogue: {
      showCategories: "Показать все категории", hideCategories: "Скрыть категории",
      all: "Все товары", comingSoon: "Скоро в продаже",
    },
    header: {
      home: "Kavkaz Hills — главная", call: "Позвонить", locations: "Точки продаж",
      certificates: "Сертификаты", menu: "Меню", close: "Закрыть панель", catalogue: "Каталог",
      delivery: "Доставка и оплата", cart: "Корзина", story: "История",
      language: "Язык", hours: "Режим работы", phone: "Российский номер",
      missing: "Данные будут добавлены", whatsapp: "WhatsApp",
      noLocations: "Точки продаж будут добавлены.",
      deliveryInfo: "Доставка по всей России службой СДЭК",
    },
    nav: {
      collection: "Коллекция",
      origin: "Происхождение",
      story: "История",
      contact: "Контакты",
      order: "Заказать",
    },

    hero: {
      headline: "Натуральные пчелопродукты",
      catalogueCta: "Перейти в каталог",
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
