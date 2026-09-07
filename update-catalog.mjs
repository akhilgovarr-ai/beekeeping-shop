import fs from "fs";

const path = "app/[locale]/page.tsx";

let text = fs.readFileSync(path, "utf8");

// Добавляем ProductCard
const productImport =
  'import ProductCard from "../components/ProductCard";';

if (!text.includes(productImport)) {
  const imports = [...text.matchAll(/^import .*?;$/gm)];

  if (!imports.length) {
    throw new Error("Не удалось найти imports");
  }

  const last = imports[imports.length - 1];
  const position = last.index + last[0].length;

  text =
    text.slice(0, position) +
    "\n" +
    productImport +
    text.slice(position);
}

// Удаляем старый UrbechShowcase import
text = text.replace(
  /^import UrbechShowcase from "\.\.\/components\/UrbechShowcase";\s*$/gm,
  ""
);

function findMatchingDiv(source, start) {
  const regex = /<div\b[^>]*>|<\/div>/g;

  regex.lastIndex = start;

  let depth = 0;
  let match;

  while ((match = regex.exec(source)) !== null) {
    if (match[0].startsWith("<div")) {
      depth++;
    } else {
      depth--;

      if (depth === 0) {
        return regex.lastIndex;
      }
    }
  }

  throw new Error("Не найден закрывающий </div>");
}

function replaceGrid(oldClass, productsName) {
  const marker = `<div className="${oldClass}">`;
  const start = text.indexOf(marker);

  if (start === -1) {
    throw new Error(`Не найден блок ${oldClass}`);
  }

  const end = findMatchingDiv(text, start);

  const replacement = `<div className="shop-products-grid">
            {${productsName}.map((product) => (
              <ProductCard
                key={product.id}
                name={product.content.name}
                description={product.content.description}
                image={product.image}
                category={categoryLabels[lang][product.category]}
                locale={lang}
              />
            ))}
          </div>`;

  text =
    text.slice(0, start) +
    replacement +
    text.slice(end);
}

// Honey
replaceGrid("standard-products-grid", "honeyProducts");

// From the Hive
replaceGrid("hive-products-grid", "hiveProducts");

// Tea
replaceGrid("tea-products-grid", "teaProducts");

// Urbech
const urbechRegex =
  /<UrbechShowcase\s+products=\{urbechProducts\}\s+categoryLabel=\{categoryLabels\[lang\]\["urbech"\]\}\s*\/>/s;

if (!urbechRegex.test(text)) {
  throw new Error("Не удалось найти UrbechShowcase");
}

text = text.replace(
  urbechRegex,
  `<div className="shop-products-grid">
            {urbechProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.content.name}
                description={product.content.description}
                image={product.image}
                category={categoryLabels[lang][product.category]}
                locale={lang}
              />
            ))}
          </div>`
);

fs.writeFileSync(path, text, "utf8");

console.log("Catalog updated successfully.");