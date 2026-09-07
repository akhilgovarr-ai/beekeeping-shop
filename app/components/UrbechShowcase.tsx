"use client";

import { useState } from "react";

type UrbechProduct = {
  id: string;
  image: string;
  content: {
    name: string;
    description: string;
  };
};

type Props = {
  products: UrbechProduct[];
  categoryLabel: string;
};

export default function UrbechShowcase({
  products,
  categoryLabel,
}: Props) {
  const [activeUrbechId, setActiveUrbechId] = useState(
    products[0]?.id ?? ""
  );

  const activeUrbech =
    products.find((product) => product.id === activeUrbechId) ??
    products[0];

  if (!activeUrbech) {
    return null;
  }

  return (
    <div className="urbech-showcase">
      <div className="urbech-featured">
        <div className="urbech-featured-image">
          <img
            key={activeUrbech.id}
            src={activeUrbech.image}
            alt={activeUrbech.content.name}
            className="urbech-active-image"
          />
        </div>

        <div className="urbech-featured-content">
          <p className="product-category">
            {categoryLabel}
          </p>

          <h4>{activeUrbech.content.name}</h4>

          <p>{activeUrbech.content.description}</p>
        </div>
      </div>

      <div className="urbech-list">
        {products.map((product, index) => (
          <article
            className={`urbech-list-item ${
              activeUrbech.id === product.id ? "active" : ""
            }`}
            key={product.id}
            onMouseEnter={() => setActiveUrbechId(product.id)}
            onClick={() => setActiveUrbechId(product.id)}
          >
            <span className="urbech-list-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h4>{product.content.name}</h4>
              <p>{product.content.description}</p>
            </div>

            <img
              src={product.image}
              alt={product.content.name}
            />
          </article>
        ))}
      </div>
    </div>
  );
}