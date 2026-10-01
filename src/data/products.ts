import type { Product } from "../types/product";

export const products: Product[] = [
  // ───────── УРБЕЧ ─────────
  {
    id: "apricot-kernel",
    slug: "apricot-kernel",
    category: "urbech",
    name: { ru: "Абрикосовая косточка", en: "Apricot Kernel Urbech" },
    shortDescription: {
      ru: "Традиционный урбеч из ядер абрикосовой косточки.",
      en: "Traditional urbech made from apricot kernels.",
    },
    variants: [{ weight: "150 г", price: 550 }],
    imageName: "KavHill_urbech_apricot_kernel.png",
    available: true,
  },
  {
    id: "flax-seed",
    slug: "flax-seed",
    category: "urbech",
    name: { ru: "Тёмный лён", en: "Dark Flax Urbech" },
    shortDescription: {
      ru: "Традиционный урбеч из семян тёмного льна.",
      en: "Traditional urbech made from dark flax seeds.",
    },
    variants: [{ weight: "150 г", price: 450 }],
    imageName: "KavHill_urbech_Flax_seed.png",
    available: true,
  },
  {
    id: "sweet-almond",
    slug: "sweet-almond",
    category: "urbech",
    name: { ru: "Миндаль", en: "Sweet Almond Urbech" },
    shortDescription: { ru: "Нежный урбеч из сладкого миндаля.", en: "Smooth urbech made from sweet almonds." },
    variants: [{ weight: "150 г", price: 650 }],
    imageName: "KavHill_urbech_sweet_almond.png",
    available: true,
  },
  {
    id: "hemp-seed",
    slug: "hemp-seed",
    category: "urbech",
    name: { ru: "Конопля", en: "Hemp Seed Urbech" },
    shortDescription: { ru: "Урбеч из семян конопли.", en: "Urbech made from hemp seeds." },
    variants: [{ weight: "150 г", price: 550 }],
    imageName: "KavHill_urbech_Hemp_seed.png",
    available: true,
  },

  // ───────── ИЗ УЛЬЯ ─────────
  {
    id: "bee-bread",
    slug: "bee-bread",
    category: "honey-products",
    name: { ru: "Перга", en: "Bee Bread" },
    shortDescription: {
      ru: "Пыльца, преобразованная внутри улья — один из самых ценных запасов пчелиной семьи.",
      en: "Pollen transformed inside the hive — one of its most remarkable stores of nourishment.",
    },
    variants: [
      { weight: "100 г", price: 700 },
      { weight: "300 г", price: 1800 },
    ],
    imageName: "KavHill_mockup_Bee_Bread.png",
    available: true,
  },
  {
    id: "pollen",
    slug: "pollen",
    category: "honey-products",
    name: { ru: "Пчелиная пыльца", en: "Bee Pollen" },
    shortDescription: {
      ru: "Собрана цветок за цветком — хранит разнообразие горного разнотравья.",
      en: "Collected flower by flower, carrying with it the diversity of the land.",
    },
    variants: [
      { weight: "100 г", price: 400 },
      { weight: "300 г", price: 1000 },
    ],
    imageName: "KavHill_mockup_pollen.png",
    available: true,
  },
  {
    id: "propolis",
    slug: "propolis",
    category: "honey-products",
    name: { ru: "Прополис", en: "Propolis" },
    shortDescription: {
      ru: "Природное вещество, которым пчёлы защищают и сохраняют жизнь улья. Формат «сигары» — для точной дозировки.",
      en: "A natural substance bees create to protect and preserve the life of the hive.",
    },
    variants: [
      { weight: "20 г · 1 сигара", price: 600 },
      { weight: "80 г · 4 сигары", price: 2000 },
    ],
    imageName: "KavHill_mockup_propolis.png",
    available: true,
  },
  {
    id: "royal-jelly",
    slug: "royal-jelly",
    category: "honey-products",
    name: { ru: "Маточное молочко с пергой и мёдом", en: "Royal Jelly with Bee Bread and Honey" },
    shortDescription: {
      ru: "Самый концентрированный продукт улья — курсовой приём для восстановления и поддержки организма.",
      en: "The most concentrated product of the hive — a course intended to support and restore the body.",
    },
    variants: [{ weight: "450 г · 1 курс", price: 8500 }],
    imageName: "",
    available: true,
  },

  // ───────── ЧАЙ ─────────
  {
    id: "kalmyk-tea",
    slug: "kalmyk-tea",
    category: "tea",
    name: { ru: "Калмыцкий чай", en: "Kalmyk Tea" },
    shortDescription: {
      ru: "Традиционный чай, в котором сохранились ритуал и культура гостеприимства Кавказа.",
      en: "A traditional tea with a character shaped by the rituals and hospitality of the Caucasus.",
    },
    variants: [
      { weight: "100 г", price: 350 },
      { weight: "500 г", price: 1500 },
    ],
    imageName: "KavHill_mockup_Kalmyk_Tea.png",
    available: true,
  },
  {
    id: "minisota-tea",
    slug: "minisota-tea",
    category: "tea",
    name: { ru: "Минисота (травяной сбор)", en: "Minisota Herbal Blend" },
    shortDescription: {
      ru: "Мягкий травяной сбор для повседневного чаепития.",
      en: "A gentle herbal blend for everyday tea.",
    },
    variants: [{ weight: "100 г", price: 300 }],
    imageName: "",
    available: true,
  },

  // ───────── МЁД ─────────
  {
    id: "buckwheat-honey",
    slug: "buckwheat-honey",
    category: "honey",
    name: { ru: "Гречишный мёд", en: "Buckwheat Honey" },
    shortDescription: {
      ru: "Насыщенный тёмный мёд с мягким обжаренным характером.",
      en: "A rich, dark honey with a soft roasted character.",
    },
    variants: [
      { weight: "130 г", price: 250 },
      { weight: "150 г", price: 350 },
      { weight: "450 г", price: 1000 },
      { weight: "1 кг", price: 1600 },
    ],
    imageName: "KavHill_honey_creamed_Buckwheat.png",
    available: true,
  },
  {
    id: "goldenrod-honey",
    slug: "goldenrod-honey",
    category: "honey",
    name: { ru: "Мёд из золотарника", en: "Goldenrod Honey" },
    shortDescription: {
      ru: "Светлый, с лёгкой пряной нотой горного разнотравья.",
      en: "Light-colored, with a subtle spiced note of mountain wildflowers.",
    },
    variants: [
      { weight: "130 г", price: 250 },
      { weight: "150 г", price: 350 },
      { weight: "450 г", price: 1000 },
      { weight: "1 кг", price: 1600 },
    ],
    imageName: "KavHill_honey_creamed_Goldenrod.png",
    available: true,
  },
  {
    id: "wildflower-honey",
    slug: "wildflower-honey",
    category: "honey",
    name: { ru: "Разнотравный мёд", en: "Wildflower Honey" },
    shortDescription: {
      ru: "Собран с высокогорного разнотравья — мягкий и цветочный.",
      en: "Gathered from high-mountain wildflowers — soft and floral.",
    },
    variants: [
      { weight: "130 г", price: 350 },
      { weight: "150 г", price: 450 },
      { weight: "450 г", price: 1500 },
      { weight: "1 кг", price: 2600 },
    ],
    imageName: "KavHill_honey_creamed_Wildflower.png",
    available: true,
  },
  {
    id: "mountain-linden-honey",
    slug: "mountain-linden-honey",
    category: "honey",
    name: { ru: "Горный липовый мёд", en: "Mountain Linden Honey" },
    shortDescription: {
      ru: "Классический липовый мёд с мягкой сладостью и лёгкой ментоловой свежестью.",
      en: "A classic linden honey with soft sweetness and a light mentholic freshness.",
    },
    variants: [
      { weight: "130 г", price: 350 },
      { weight: "150 г", price: 450 },
      { weight: "450 г", price: 1500 },
      { weight: "1 кг", price: 2600 },
    ],
    imageName: "KavHill_honey_creamed_Mountain_Linden.png",
    available: true,
  },
  {
    id: "mountain-spurge-honey",
    slug: "mountain-spurge-honey",
    category: "honey",
    name: { ru: "Горный молочаевый мёд", en: "Mountain Spurge Honey" },
    shortDescription: {
      ru: "Редкий сорт с плотной текстурой и глубоким, насыщенным вкусом.",
      en: "A rare variety with a dense texture and a deep, rich flavor.",
    },
    variants: [
      { weight: "130 г", price: 350 },
      { weight: "150 г", price: 450 },
      { weight: "450 г", price: 1500 },
      { weight: "1 кг", price: 2600 },
    ],
    imageName: "KavHill_honey_creamed_Mountain_Spurge.png",
    available: true,
  },
  {
    id: "honeycomb-honey",
    slug: "honeycomb-honey",
    category: "honey",
    name: { ru: "Сотовый мёд", en: "Honeycomb Honey" },
    shortDescription: {
      ru: "Натуральный мёд прямо в сотах — редкая, самая нетронутая форма мёда.",
      en: "Natural honey straight from the comb — a rare, untouched form of honey.",
    },
    variants: [{ weight: "1500–2000 г", price: 2500 }],
    imageName: "KavHill_honey_creamed_honeycomb.png",
    available: true,
  },

  // ───────── СВЕЧИ ─────────
  {
    id: "beeswax-candles",
    slug: "beeswax-candles",
    category: "candles",
    name: { ru: "Свечи из вощины", en: "Beeswax Candles" },
    shortDescription: {
      ru: "Ручная скрутка, натуральный воск с пасеки. Чистое горение и лёгкий медовый аромат.",
      en: "Hand-rolled from natural beeswax from our own apiary. Clean burn and a light honey scent.",
    },
    variants: [{ weight: "3 шт", price: 1000 }],
    imageName: "",
    available: true,
  },

  // ───────── НАБОРЫ ─────────
  {
    id: "gift-set-large",
    slug: "gift-set-large",
    category: "gift-sets",
    name: { ru: "Kavkaz Hills — большой бокс", en: "Kavkaz Hills — Large Box" },
    shortDescription: {
      ru: "Собранная коллекция пасеки в одной коробке: пыльца, перга, чай, прополис, мёд — 4 банки, свеча, веретено.",
      en: "A curated collection from the apiary in one box: pollen, bee bread, tea, propolis, 4 jars of honey, a candle, and a honey dipper.",
    },
    variants: [{ weight: "набор", price: 9800 }],
    imageName: "",
    available: true,
  },
  {
    id: "gift-set-medium",
    slug: "gift-set-medium",
    category: "gift-sets",
    name: { ru: "Корзина средняя", en: "Medium Gift Basket" },
    shortDescription: {
      ru: "Мёд — 2 банки, чай, пыльца, свеча.",
      en: "2 jars of honey, tea, pollen, and a candle.",
    },
    variants: [{ weight: "набор", price: 3500 }],
    imageName: "",
    available: true,
  },
  {
    id: "gift-set-small",
    slug: "gift-set-small",
    category: "gift-sets",
    name: { ru: "Корзина малая", en: "Small Gift Basket" },
    shortDescription: {
      ru: "Мёд — 2 банки (по наличию), чай, свеча.",
      en: "2 jars of honey (subject to availability), tea, and a candle.",
    },
    variants: [{ weight: "набор", price: 1500 }],
    imageName: "",
    available: true,
  },
];