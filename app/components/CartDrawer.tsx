"use client";

import { useCart } from "./CartContext";
import { CONTACT } from "../../src/lib/constants";

type Locale = "ru" | "en";

function buildOrderMessage(
  items: { name: string; price: number; quantity: number }[],
  total: number,
  locale: Locale
) {
  const intro =
    locale === "ru" ? "Здравствуйте! Хочу заказать:" : "Hello! I'd like to order:";
  const lines = items.map(
    (item: { name: string; price: number; quantity: number }) =>
      `— ${item.name} × ${item.quantity} — $${item.price * item.quantity} ₽`
  );
  const totalLine =
    locale === "ru" ? `Итого: $${total} ₽` : `Total: $${total} ₽`;

  return [intro, ...lines, "", totalLine].join("\n");
}

export default function CartDrawer({ locale }: { locale: Locale }) {
  const {
    items,
    totalPrice,
    isOpen,
    removeItem,
    updateQuantity,
    clearCart,
    closeCart,
  } = useCart();

  if (!isOpen) return null;

  const message = buildOrderMessage(items, totalPrice, locale);
  const encodedMessage = encodeURIComponent(message);

  const whatsappHref = CONTACT.whatsapp
    ? `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`
    : null;

  const telegramHref = CONTACT.telegram
    ? `https://t.me/${CONTACT.telegram}?text=${encodedMessage}`
    : // Фолбэк, если обычная ссылка не подставляет текст на практике:
      // `https://t.me/share/url?url=&text=${encodedMessage}`
      null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end bg-paper/60">
      <div
        className="flex h-full w-full max-w-md flex-col bg-paper"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="text-sm tracking-label text-gold">
            {locale === "ru" ? "Корзина" : "Cart"}
          </h2>
          <button
  type="button"
  onClick={closeCart}
  aria-label={locale === "ru" ? "Закрыть корзину" : "Close cart"}
  className="flex h-11 w-11 items-center justify-center text-ink"
>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <p className="text-sm text-ink-soft">
              {locale === "ru" ? "Корзина пуста." : "Your cart is empty."}
            </p>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-ink">{item.name}</span>
                    <span className="text-xs text-gold">{item.price} ₽</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-line">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label={locale === "ru" ? "Уменьшить" : "Decrease"}
                       className="flex h-11 w-11 items-center justify-center text-ink"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={locale === "ru" ? "Увеличить" : "Increase"}
                      className="flex h-11 w-11 items-center justify-center text-ink"
                      >
                        +
                      </button>
                    </div>

                   <button
  type="button"
  onClick={() => removeItem(item.id)}
  aria-label={locale === "ru" ? "Удалить товар" : "Remove item"}
  className="flex h-11 w-11 items-center justify-center text-ink-soft hover:text-ink"
>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="flex flex-col gap-4 border-t border-line px-6 py-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-ink-soft">
                {locale === "ru" ? "Итого" : "Total"}
              </span>
              <span className="text-lg font-medium text-gold">{totalPrice} ₽</span>
            </div>

            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
               className="border border-gold px-8 py-3 text-center text-xs tracking-label text-gold transition-colors hover:bg-gold hover:text-paper"
              >
                {locale === "ru" ? "Оформить в WhatsApp" : "Order via WhatsApp"}
              </a>
            )}

            {telegramHref && (
              <a
                href={telegramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gold px-8 py-3 text-center text-xs tracking-label text-gold transition-colors hover:bg-gold hover:text-paper"
              >
                {locale === "ru" ? "Оформить в Telegram" : "Order via Telegram"}
              </a>
            )}

            {!whatsappHref && !telegramHref && (
              <p className="text-xs text-ink-soft">
                {locale === "ru"
                  ? "Контакты для заказа ещё не добавлены."
                  : "Order contacts are not set up yet."}
              </p>
            )}

            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-ink-soft underline hover:text-ink"
            >
              {locale === "ru" ? "Очистить корзину" : "Clear cart"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}