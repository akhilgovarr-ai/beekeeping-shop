export type ProductCategory =
  | "tea"
  | "urbech"
  | "honey"
  | "honey-products";

export type ProductLocale = {
  name: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  category: ProductCategory;

  price: number;
  weight: string;

  imageName: string;

  en: ProductLocale;
  ru: ProductLocale;
};

export const products: Product[] = [
  {
    id: "mountain-honey",
    slug: "mountain-honey",
    category: "honey",

    price: 24,
    weight: "250 g",

    imageName: "mountain-honey.png",

    en: {
      name: "Mountain Honey",
      description:
        "Natural mountain honey from the North Caucasus.",
    },

    ru: {
      name: "Горный мёд",
      description:
        "Натуральный горный мёд с Северного Кавказа.",
    },
  },

  {
    id: "flax-urbech",
    slug: "flax-urbech",
    category: "urbech",

    price: 16,
    weight: "250 g",

    imageName: "flax-urbech.png",

    en: {
      name: "Flax Urbech",
      description:
        "Traditional Caucasian paste made from flax seeds.",
    },

    ru: {
      name: "Льняной урбеч",
      description:
        "Традиционный кавказский урбеч из семян льна.",
    },
  },

  {
    id: "apricot-urbech",
    slug: "apricot-urbech",
    category: "urbech",

    price: 18,
    weight: "250 g",

    imageName: "apricot-urbech.png",

    en: {
      name: "Apricot Kernel Urbech",
      description:
        "Traditional urbech made from apricot kernels.",
    },

    ru: {
      name: "Урбеч из абрикосовой косточки",
      description:
        "Традиционный урбеч из ядер абрикосовой косточки.",
    },
  },

  {
    id: "mountain-tea",
    slug: "mountain-tea",
    category: "tea",

    price: 14,
    weight: "80 g",

    imageName: "mountain-tea.png",

    en: {
      name: "Mountain Tea",
      description:
        "A herbal tea inspired by the mountains of the Caucasus.",
    },

    ru: {
      name: "Горный чай",
      description:
        "Травяной чай, вдохновлённый горами Кавказа.",
    },
  },

  {
    id: "propolis",
    slug: "propolis",
    category: "honey-products",

    price: 12,
    weight: "50 g",

    imageName: "propolis.png",

    en: {
      name: "Propolis",
      description:
        "Natural bee product from our apiaries.",
    },

    ru: {
      name: "Прополис",
      description:
        "Натуральный продукт пчеловодства с наших пасек.",
    },
  },
];