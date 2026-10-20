"use client";
import { createContext, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
type CartItem = { id: string; name: string; price: number; quantity: number };
type CartContextValue = {
  items: CartItem[]; totalItems: number; totalPrice: number; isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void; openCart: () => void; closeCart: () => void;
};
const CART_STORAGE_KEY = "kavkazhills_cart";
const CART_EVENT = "kavkazhills-cart-change";
let memoryCart = "[]";
let memoryOnly = false;
function snapshot() {
  if (memoryOnly) return memoryCart;
  try { return localStorage.getItem(CART_STORAGE_KEY) ?? "[]"; }
  catch { return memoryCart; }
}
function parseItems(raw: string): CartItem[] {
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter((item): item is CartItem => item !== null && typeof item === "object" &&
      typeof item.id === "string" && typeof item.name === "string" &&
      typeof item.price === "number" && Number.isFinite(item.price) && item.price >= 0 &&
      Number.isSafeInteger(item.quantity) && item.quantity > 0);
  } catch { return []; }
}
function subscribe(callback: () => void) {
  const storage = (event: StorageEvent) => { if (event.key === CART_STORAGE_KEY || event.key === null) callback(); };
  window.addEventListener("storage", storage);
  window.addEventListener(CART_EVENT, callback);
  return () => { window.removeEventListener("storage", storage); window.removeEventListener(CART_EVENT, callback); };
}
function updateCart(update: (current: CartItem[]) => CartItem[]) {
  memoryCart = JSON.stringify(update(parseItems(snapshot())));
  try { localStorage.setItem(CART_STORAGE_KEY, memoryCart); memoryOnly = false; }
  catch { memoryOnly = true; }
  window.dispatchEvent(new Event(CART_EVENT));
}
const CartContext = createContext<CartContextValue | null>(null);
export function CartProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const items = useMemo(() => parseItems(raw), [raw]);
  const [isOpen, setIsOpen] = useState(false);
  const addItem = (item: Omit<CartItem, "quantity">) => updateCart(current => current.some(i => i.id === item.id)
    ? current.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
    : [...current, { ...item, quantity: 1 }]);
  const removeItem = (id: string) => updateCart(current => current.filter(i => i.id !== id));
  const updateQuantity = (id: string, delta: number) => updateCart(current => current
    .map(i => i.id === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i).filter(i => i.quantity > 0));
  return <CartContext.Provider value={{ items, isOpen, addItem, removeItem, updateQuantity,
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    clearCart: () => updateCart(() => []), openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false),
  }}>{children}</CartContext.Provider>;
}
export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart requires CartProvider");
  return cart;
}
