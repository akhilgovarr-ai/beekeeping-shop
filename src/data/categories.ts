import type { LocalizedText, ProductCategory } from "../types/product";

export const categories: { id: ProductCategory; name: LocalizedText }[] = [
  { id: "honey", name: { ru: "Мёд", en: "Honey" } },
  { id: "urbech", name: { ru: "Урбеч", en: "Urbech" } },
  { id: "tea", name: { ru: "Чай", en: "Tea" } },
  { id: "gift-sets", name: { ru: "Подарочные наборы", en: "Gift sets" } },
  { id: "honey-products", name: { ru: "Из улья", en: "From the hive" } },
  { id: "candles", name: { ru: "Свечи", en: "Candles" } },
];
