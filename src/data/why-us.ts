import type { Locale } from "../i18n/dictionaries";

type WhyUsContent = {
  title: string;
  items: { id: string; title: string; description: string }[];
};

export const whyUs: Record<Locale, WhyUsContent> = {
  ru: {
    title: "Почему выбирают нас?",
    items: [
      {
        id: "choice",
        title: "Вкус на ваш выбор",
        description: "Липовый, гречишный, разнотравный — знакомство с мёдом можно начать с привычного сорта или попробовать другой.",
      },
      {
        id: "clarity",
        title: "Всё перед глазами",
        description: "Фасовки и цены указаны в карточках товаров. Можно спокойно сравнить варианты и выбрать подходящий.",
      },
      {
        id: "everyday",
        title: "Для простых моментов",
        description: "Мёд к завтраку, урбеч к тосту, чай для неспешного вечера. В коллекции есть место повседневным вкусам.",
      },
      {
        id: "gifts",
        title: "С вниманием к близким",
        description: "В каталоге есть отдельные продукты и подарочные наборы. Выбирайте то, что хочется оставить себе или подарить.",
      },
    ],
  },
  en: {
    title: "Why choose us?",
    items: [
      {
        id: "choice",
        title: "Find your flavour",
        description: "Linden, buckwheat or wildflower honey — begin with a familiar variety or try something different.",
      },
      {
        id: "clarity",
        title: "A clear choice",
        description: "Pack sizes and prices are listed on each product card. Take your time to compare the options and choose what suits you.",
      },
      {
        id: "everyday",
        title: "For everyday moments",
        description: "Honey with breakfast, urbech on toast, tea for a quiet evening. There is room in the collection for everyday favourites.",
      },
      {
        id: "gifts",
        title: "A thoughtful gesture",
        description: "Explore individual products and gift sets in the catalogue. Choose something to enjoy yourself or share with someone close.",
      },
    ],
  },
};
