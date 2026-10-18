const rubles = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return rubles.format(amount);
}

export function formatPackage(weight: string, locale: "ru" | "en"): string {
  if (locale === "ru") return weight;
  return weight
    .replace("кг", "kg")
    .replace("г", "g")
    .replace("1 сигара", "1 stick")
    .replace("4 сигары", "4 sticks")
    .replace("1 курс", "1 course")
    .replace("шт", "pcs")
    .replace("набор", "set");
}
