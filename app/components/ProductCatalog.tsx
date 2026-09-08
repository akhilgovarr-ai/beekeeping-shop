"use client";

import { useState } from "react";

type ProductCategory = "honey" | "honey-products" | "urbech" | "tea";

type CatalogProduct = {
  id: string;
  category: ProductCategory;
  image: string;
  name: string;
  description: string;
  price?: number;
};

type ProductCatalogProps = {
  products: CatalogProduct[];
  locale: "ru" | "en";
};

type Filter = "all" | "honey" | "honey-products" | "urbech" | "tea";

function CategoryIcon({ category }: { category: ProductCategory }) {
  if (category === "urbech") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <ellipse cx="16" cy="16" rx="10" ry="7" />
        <path d="M10 18c4-6 8-8 13-7" />
        <path d="M13 11c1 5 4 8 9 10" />
      </svg>
    );
  }

  if (category === "tea") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M25 7C16 8 9 12 8 23c8 1 15-4 17-16Z" />
        <path d="M9 23c4-5 8-8 14-12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M11 6h10l5 8-5 8H11l-5-8Z" />
      <path d="M11 6 6 14l5 8" />
      <path d="M21 6 26 14l-5 8" />
      <path d="M6 14h20" />
    </svg>
  );
}

function getShortDescription(text: string) {
  const words = text.trim().split(/\s+/);

  if (words.length <= 5) {
    return text;
  }

  return `${words.slice(0, 5).join(" ")}…`;
}

export default function ProductCatalog({
  products,
  locale,
}: ProductCatalogProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const getQuantity = (id: string) => quantities[id] ?? 1;

  const updateQuantity = (id: string, change: number) => {
    setQuantities((current) => ({
      ...current,
      [id]: Math.max(1, (current[id] ?? 1) + change),
    }));
  };

  const categoryName = (category: ProductCategory) => {
    if (locale === "ru") {
      if (category === "urbech") return "Урбеч";
      if (category === "tea") return "Чай";
      if (category === "honey") return "Мёд";
      return "Из улья";
    }

    if (category === "urbech") return "Urbech";
    if (category === "tea") return "Tea";
    if (category === "honey") return "Honey";

    return "From the Hive";
  };

  return (
    <section className="catalog-new" id="collection">
      <div className="catalog-new-header">
        <div>
          <span className="catalog-new-eyebrow">
            {locale === "ru" ? "Коллекция" : "Collection"}
          </span>

          <h2>
            {locale === "ru"
              ? "Выберите свой продукт"
              : "Choose your product"}
          </h2>
        </div>

        <div className="catalog-filters">
          <button
            type="button"
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            {locale === "ru" ? "Всё" : "All"}
          </button>

         <button
           type="button"
           className={filter === "honey" ? "active" : ""}
           onClick={() => setFilter("honey")}
         >
            {locale === "ru" ? "Мёд" : "Honey"}
        </button>

          <button
            type="button"
            className={filter === "honey-products" ? "active" : ""}
            onClick={() => setFilter("honey-products")}
          >
            {locale === "ru" ? "Из улья" : "From the Hive"}
          </button>

          <button
            type="button"
            className={filter === "urbech" ? "active" : ""}
            onClick={() => setFilter("urbech")}
          >
            {locale === "ru" ? "Урбеч" : "Urbech"}
          </button>

          <button
            type="button"
            className={filter === "tea" ? "active" : ""}
            onClick={() => setFilter("tea")}
          >
            {locale === "ru" ? "Чай" : "Tea"}
          </button>
        </div>
      </div>

      <div className="catalog-new-grid">
        {filteredProducts.map((product) => {
          const quantity = getQuantity(product.id);

          const unitPrice = quantity > 10 ? 90 : product.price || 100;

          return (
            <article className="catalog-new-card" key={product.id}>
            <div className="catalog-new-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <div
                  className={`catalog-category-tag category-${product.category}`}
                >
                  <span className="catalog-category-icon">
                    <CategoryIcon category={product.category} />
                  </span>

                  {categoryName(product.category)}
                </div>
              </div>

              <div className="catalog-new-body">
                <h3>{product.name}</h3>

                <p className="catalog-short-description">
                  {getShortDescription(product.description)}
                </p>

                {product.description.trim().split(/\s+/).length > 5 && (
                  <details className="catalog-details">
                    <summary>
                      {locale === "ru" ? "Подробнее" : "Details"}
                    </summary>

                    <p>{product.description}</p>
                  </details>
                )}

                <div className="catalog-price">
                  <strong>${unitPrice}</strong>
                  <span>{locale === "ru" ? "/ шт." : "/ pc."}</span>
                </div>

                {quantity > 10 && (
                  <div className="catalog-wholesale">
                    {locale === "ru"
                      ? "Оптовая цена"
                      : "Wholesale price"}
                  </div>
                )}

                <div className="catalog-card-footer">
                  <div className="catalog-quantity">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      −
                    </button>

                    <span>{quantity}</span>

                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="catalog-total">
                    <span>
                      {locale === "ru" ? "Итого" : "Total"}
                    </span>

                    <strong>${unitPrice * quantity}</strong>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}