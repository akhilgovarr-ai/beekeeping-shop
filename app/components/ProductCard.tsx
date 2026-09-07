"use client";

import { useState } from "react";

type ProductCardProps = {
  name: string;
  description: string;
  image: string;
  category: string;
  locale: "en" | "ru";
};

const RETAIL_PRICE = 100;
const WHOLESALE_PRICE = 90;
const WHOLESALE_FROM = 11;

export default function ProductCard({
  name,
  description,
  image,
  category,
  locale,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const isWholesale = quantity >= WHOLESALE_FROM;
  const unitPrice = isWholesale ? WHOLESALE_PRICE : RETAIL_PRICE;
  const total = unitPrice * quantity;

  const decrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increase = () => {
    setQuantity((current) => current + 1);
  };

  return (
    <article className="shop-product-card">
      <div className="shop-product-image">
        <img src={image} alt={name} />

        {isWholesale && (
          <span className="wholesale-badge">
            {locale === "ru" ? "Оптовая цена" : "Wholesale price"}
          </span>
        )}
      </div>

      <div className="shop-product-content">
        <p className="shop-product-category">{category}</p>

        <h3>{name}</h3>

        <p className="shop-product-description">
          {description}
        </p>

        <div className="shop-product-price-row">
          <div>
            <span className="shop-price">${unitPrice}</span>
            <span className="shop-price-unit">
              {locale === "ru" ? " / шт." : " / pc."}
            </span>
          </div>

          {isWholesale && (
            <span className="old-price">
              ${RETAIL_PRICE}
            </span>
          )}
        </div>

        <p className="wholesale-hint">
          {locale === "ru"
            ? "При заказе от 11 шт. действует оптовая цена"
            : "Wholesale pricing applies from 11 pieces"}
        </p>

        <div className="shop-product-bottom">
          <div className="quantity-selector">
            <button
              type="button"
              onClick={decrease}
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span>{quantity}</span>

            <button
              type="button"
              onClick={increase}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <div className="product-total">
            <span>
              {locale === "ru" ? "Итого" : "Total"}
            </span>

            <strong>${total}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}