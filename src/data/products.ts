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

    id: "apricot-kernel",

    slug: "apricot-kernel",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_apricot_kernel.png",

    en: {

      name: "Apricot Kernel Urbech",

      description: "Traditional urbech made from apricot kernels.",

    },

    ru: {

      name: "Урбеч из абрикосовой косточки",

      description: "Традиционный урбеч из ядер абрикосовой косточки.",

    },

  },

  {

    id: "black-seed",

    slug: "black-seed",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Black_seed.png",

    en: {

      name: "Black Seed Urbech",

      description: "Urbech made from black seed.",

    },

    ru: {

      name: "Урбеч из чёрного тмина",

      description: "Урбеч из семян чёрного тмина.",

    },

  },

  {

    id: "black-sesame",

    slug: "black-sesame",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Black_sesame_seed.png",

    en: {

      name: "Black Sesame Urbech",

      description: "Traditional urbech made from black sesame seeds.",

    },

    ru: {

      name: "Урбеч из чёрного кунжута",

      description: "Традиционный урбеч из семян чёрного кунжута.",

    },

  },

  {

    id: "cashew",

    slug: "cashew",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_cashew.png",

    en: {

      name: "Cashew Urbech",

      description: "Creamy urbech made from cashews.",

    },

    ru: {

      name: "Урбеч из кешью",

      description: "Нежный урбеч из орехов кешью.",

    },

  },

  {

    id: "chia",

    slug: "chia",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Chia_seeds.png",

    en: {

      name: "Chia Seed Urbech",

      description: "Urbech made from chia seeds.",

    },

    ru: {

      name: "Урбеч из семян чиа",

      description: "Урбеч из семян чиа.",

    },

  },

  {

    id: "cocoa-beans",

    slug: "cocoa-beans",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_cocoa_beans.png",

    en: {

      name: "Cocoa Bean Urbech",

      description: "Rich urbech made from cocoa beans.",

    },

    ru: {

      name: "Урбеч из какао-бобов",

      description: "Насыщенный урбеч из какао-бобов.",

    },

  },

  {

    id: "flax-seed",

    slug: "flax-seed",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Flax_seed.png",

    en: {

      name: "Flax Seed Urbech",

      description: "Traditional urbech made from flax seeds.",

    },

    ru: {

      name: "Льняной урбеч",

      description: "Традиционный урбеч из семян льна.",

    },
    },

  {

    id: "golden-flax",

    slug: "golden-flax",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Golden_flax.png",

    en: {

      name: "Golden Flax Urbech",

      description: "Urbech made from golden flax seeds.",

    },

    ru: {

      name: "Урбеч из золотого льна",

      description: "Урбеч из семян золотого льна.",

    },

  },

  {

    id: "hazelnut",

    slug: "hazelnut",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_hazel-nut.png",

    en: {

      name: "Hazelnut Urbech",

      description: "Smooth urbech made from hazelnuts.",

    },

    ru: {

      name: "Урбеч из фундука",

      description: "Нежный урбеч из фундука.",

    },

  },

  {

    id: "hemp-seed",

    slug: "hemp-seed",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Hemp_seed.png",

    en: {

      name: "Hemp Seed Urbech",

      description: "Urbech made from hemp seeds.",

    },

    ru: {

      name: "Урбеч из семян конопли",

      description: "Урбеч из семян конопли.",

    },

  },

  {

    id: "milk-thistle",

    slug: "milk-thistle",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Milk_thistle.png",

    en: {

      name: "Milk Thistle Urbech",

      description: "Urbech made from milk thistle seeds.",

    },

    ru: {

      name: "Урбеч из расторопши",

      description: "Урбеч из семян расторопши.",

    },

  },

  {

    id: "peanut",

    slug: "peanut",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Peanut.png",

    en: {

      name: "Peanut Urbech",

      description: "Creamy urbech made from peanuts.",

    },

    ru: {

      name: "Арахисовый урбеч",

      description: "Нежный урбеч из арахиса.",

    },

  },

  {

    id: "pine-nut",

    slug: "pine-nut",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Pine_nut.png",

    en: {

      name: "Pine Nut Urbech",

      description: "Delicate urbech made from pine nuts.",

    },

    ru: {

      name: "Урбеч из кедрового ореха",

      description: "Нежный урбеч из кедрового ореха.",

    },

  },

  {

    id: "pistachio",

    slug: "pistachio",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_pistachio.png",

    en: {

      name: "Pistachio Urbech",

      description: "Rich urbech made from pistachios.",

    },

    ru: {

      name: "Фисташковый урбеч",

      description: "Насыщенный урбеч из фисташек.",

    },

  },

  {

    id: "pumpkin-seed",

    slug: "pumpkin-seed",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_pumpkin_seed.png",

    en: {

      name: "Pumpkin Seed Urbech",

      description: "Urbech made from pumpkin seeds.",

    },

    ru: {

      name: "Урбеч из тыквенных семечек",

      description: "Урбеч из семян тыквы.",

    },

  },

  {

    id: "sweet-almond",

    slug: "sweet-almond",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_sweet_almond.png",

    en: {

      name: "Sweet Almond Urbech",

      description: "Smooth urbech made from sweet almonds.",

    },

    ru: {

      name: "Урбеч из сладкого миндаля",

      description: "Нежный урбеч из сладкого миндаля.",

    },

  },

  {

    id: "walnut",

    slug: "walnut",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_Walnut.png",

    en: {

      name: "Walnut Urbech",

      description: "Traditional urbech made from walnuts.",

    },

    ru: {

      name: "Урбеч из грецкого ореха",

      description: "Традиционный урбеч из грецкого ореха.",

    },

  },

  {

    id: "white-amaranth",

    slug: "white-amaranth",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_White_amaranth.png",

    en: {

      name: "White Amaranth Urbech",

      description: "Urbech made from white amaranth seeds.",
    },

    ru: {

      name: "Урбеч из белого амаранта",

      description: "Урбеч из семян белого амаранта.",

    },

  },

  {

    id: "white-sesame",

    slug: "white-sesame",

    category: "urbech",

    price: 0,

    weight: "",

    imageName: "KavHill_urbech_White_sesame_seed.png",

    en: {

      name: "White Sesame Urbech",

      description: "Traditional urbech made from white sesame seeds.",

    },

    ru: {

      name: "Урбеч из белого кунжута",

      description: "Традиционный урбеч из семян белого кунжута.",

    },

  },

  {
    id: "bee-bread",
    slug: "bee-bread",
    category: "honey-products",
    price: 0,
    weight: "",
    imageName: "KavHill_mockup_Bee_Bread.png",
    en: {
      name: "Bee Bread",
      description: "Pollen transformed inside the hive — one of its most remarkable stores of nourishment.",
    },
    ru: {
      name: "Перга",
      description: "Пыльца, преобразованная внутри улья — один из самых удивительных запасов, которые создают пчёлы.",
    },
  },

  {
    id: "pollen",
    slug: "pollen",
    category: "honey-products",
    price: 0,
    weight: "",
    imageName: "KavHill_mockup_pollen.png",
    en: {
      name: "Bee Pollen",
      description: "Collected flower by flower, carrying with it the diversity of the land.",
    },
    ru: {
      name: "Пчелиная пыльца",
      description: "Собранная цветок за цветком, она сохраняет в себе разнообразие земли, на которой появилась.",
    },
  },

  {
    id: "propolis",
    slug: "propolis",
    category: "honey-products",
    price: 0,
    weight: "",
    imageName: "KavHill_mockup_propolis.png",
    en: {
      name: "Propolis",
      description: "A natural substance bees create to protect and preserve the life of the hive.",
    },
    ru: {
      name: "Прополис",
      description: "Природное вещество, которое пчёлы создают, чтобы защищать и сохранять жизнь улья.",
    },
  },

  {
    id: "buckwheat-tea",
    slug: "buckwheat-tea",
    category: "tea",
    price: 0,
    weight: "",
    imageName: "KavHill_mockup_Buckwheat_Tea.png",
    en: {
      name: "Buckwheat Tea",
      description: "A warm, roasted infusion with a quiet character and a naturally deep aroma.",
    },
    ru: {
      name: "Гречишный чай",
      description: "Тёплый напиток с мягким обжаренным ароматом и спокойным, глубоким характером.",
    },
  },

  {
    id: "kalmyk-tea",
    slug: "kalmyk-tea",
    category: "tea",
    price: 0,
    weight: "",
    imageName: "KavHill_mockup_Kalmyk_Tea.png",
    en: {
      name: "Kalmyk Tea",
      description: "A traditional tea with a character shaped by the rituals and hospitality of the Caucasus.",
    },
    ru: {
      name: "Калмыцкий чай",
      description: "Традиционный чай, в котором сохранились ритуал, тепло и культура гостеприимства Кавказа.",
    },
  },

  {

    id: "buckwheat-honey",

    slug: "buckwheat-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Buckwheat.png",

    en: {

      name: "Buckwheat Honey",

      description: "Natural honey with a rich buckwheat character.",

    },

    ru: {

      name: "Гречишный мёд",

      description: "Натуральный мёд с насыщенным гречишным вкусом.",

    },

  },

  {

    id: "chocolate-creamed-honey",

    slug: "chocolate-creamed-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_chocolate Creamed.png",

    en: {

      name: "Chocolate Creamed Honey",

      description: "Creamed honey with chocolate.",

    },

    ru: {

      name: "Крем-мёд с шоколадом",

      description: "Нежный крем-мёд с шоколадом.",

    },

  },

  {

    id: "goldenrod-honey",

    slug: "goldenrod-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Goldenrod.png",

    en: {

      name: "Goldenrod Honey",

      description: "Natural goldenrod honey.",

    },

    ru: {

      name: "Мёд из золотарника",

      description: "Натуральный мёд из золотарника.",

    },

  },

  {

    id: "honeycomb-honey",

    slug: "honeycomb-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_honeycomb.png",

    en: {

      name: "Honeycomb Honey",

      description: "Natural honey with honeycomb.",

    },

    ru: {

      name: "Мёд с сотами",

      description: "Натуральный мёд с медовыми сотами.",

    },

  },

  {

    id: "mountain-linden-honey",

    slug: "mountain-linden-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Mountain Linden.png",

    en: {

      name: "Mountain Linden Honey",

      description: "Natural mountain linden honey.",

    },

    ru: {

      name: "Горный липовый мёд",

      description: "Натуральный мёд из горной липы.",

    },

  },

  {

    id: "mountain-spurge-honey",

    slug: "mountain-spurge-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Mountain Spurge.png",

    en: {

      name: "Mountain Spurge Honey",

      description: "Natural mountain spurge honey.",

    },

    ru: {

      name: "Горный молочаевый мёд",

      description: "Натуральный горный мёд из молочая.",

    },

  },

  {

    id: "raspberry-creamed-honey",

    slug: "raspberry-creamed-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Raspberry Creame.png",

    en: {

      name: "Raspberry Creamed Honey",

      description: "Creamed honey with raspberry.",

    },

    ru: {

      name: "Крем-мёд с малиной",

      description: "Нежный крем-мёд с малиной.",

    },

  },

  {

    id: "strawberry-creamed-honey",

    slug: "strawberry-creamed-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Strawberry Creamed.png",

    en: {

      name: "Strawberry Creamed Honey",

      description: "Creamed honey with strawberry.",

    },

    ru: {

      name: "Крем-мёд с клубникой",

      description: "Нежный крем-мёд с клубникой.",

    },

  },

  {

    id: "wildflower-honey",

    slug: "wildflower-honey",

    category: "honey",

    price: 100,

    weight: "",

    imageName: "KavHill_honey_creamed_Wildflower.png",

    en: {

      name: "Wildflower Honey",

      description: "Natural wildflower honey.",

    },

    ru: {

      name: "Разнотравный мёд",

      description: "Натуральный мёд из горного разнотравья.",

    },

  },

]; 