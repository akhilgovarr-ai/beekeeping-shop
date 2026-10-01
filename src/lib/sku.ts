const CATEGORY_PREFIX: Record<string, string> = {
  honey: "HON",
  "honey-products": "HIVE",
  urbech: "URB",
  tea: "TEA",
  candles: "CND",
  "gift-sets": "SET",
};

export function buildSkuMap(
  items: { id: string; category: string }[]
): Map<string, string> {
  const map = new Map<string, string>();
  const counters: Record<string, number> = {};

  items.forEach((item) => {
    const prefix = CATEGORY_PREFIX[item.category] ?? "KH";
    counters[prefix] = (counters[prefix] ?? 0) + 1;
    map.set(
      item.id,
      `KH-${prefix}-${String(counters[prefix]).padStart(3, "0")}`
    );
  });

  return map;
}