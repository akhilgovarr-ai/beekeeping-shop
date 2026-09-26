"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CartItem = { id: string; name: string; price: number; quantity: number };

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: { id: string; name: string; price: number }) => void;
};

const CART_STORAGE_KEY = "kavkazhills_cart";

const CartContext = createContext<CartContextValue>({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addItem: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // localStorage недоступен — корзина просто останется пустой
    }
  }, []);

  const addItem = (item: { id: string; name: string; price: number }) => {
    setItems((current) => {
      const existing = current.find((i) => i.id === item.id);
      const next = existing
        ? current.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...current, { ...item, quantity: 1 }];

      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }

      return next;
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}