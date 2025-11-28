// src/pages/Cart.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, removeFromCart, clearCart, totalAmount } = useCart();

  const totalItems = items.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  if (items.length === 0) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm text-center">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-slate-900">
            Your rental bag is empty
          </h1>
          <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
            You haven&apos;t added any looks yet. Explore the shop, pick your
            dates on the product page, and come back to review your bag.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition"
          >
            Browse rentals
            <span className="ml-2 text-base">→</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Your rental bag
          </h1>
          <p className="text-sm text-slate-600">
            Review your outfits, then proceed to checkout to add address,
            delivery and payment.
          </p>
        </div>
        <div className="text-xs text-slate-600 border border-slate-200 bg-white rounded-2xl px-4 py-2 shadow-sm self-start md:self-auto">
          <span className="font-medium text-slate-900">
            {totalItems} item{totalItems > 1 ? "s" : ""} · ₹{totalAmount}
          </span>
          <span className="block text-[11px] text-slate-500">
            Rental subtotal before fees & deposit
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.7fr,1fr] items-start">
        {/* Cart items */}
        <div className="space-y-4">
          {items.map((item) => {
            const qty = item.quantity || 1;
            const lineTotal =
              item.product.pricePerDay * item.days * qty;

            return (
              <div
                key={item.product.id}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Image */}
                <div
                  className="h-24 w-20 md:h-28 md:w-24 rounded-xl bg-slate-100 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${item.product.image})` }}
                />

                {/* Info */}
                <div className="flex-1 text-sm flex flex-col gap-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {item.product.category === "men" ? "Men" : "Women"}
                  </p>
                  <p className="font-medium text-slate-900 line-clamp-1">
                    {item.product.name}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    ₹{item.product.pricePerDay} / day · {item.days} day
                    {item.days > 1 ? "s" : ""}
                    {qty > 1 && ` · Qty: ${qty}`}
                  </p>

                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-sm font-semibold text-emerald-700">
                      ₹{lineTotal}
                    </p>
                    {qty > 1 && (
                      <span className="text-[11px] text-slate-500">
                        (Base: ₹
                        {item.product.pricePerDay * item.days} × {qty})
                      </span>
                    )}
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="self-start text-[11px] text-slate-500 hover:text-red-500"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>

        {/* Summary + actions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 text-sm shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-slate-900">
            Bag summary
          </h2>

          <div className="space-y-1 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>Rental subtotal</span>
              <span className="font-medium">₹{totalAmount}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Service fee (approx)</span>
              <span>₹99</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Security deposit (refundable)</span>
              <span>₹500</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3 flex items-center justify-between text-sm">
            <span className="text-slate-800 font-medium">Estimated total</span>
            <span className="text-lg font-semibold text-emerald-700">
              ₹{totalAmount + 99 + 500}
            </span>
          </div>

          <p className="text-[11px] text-slate-500">
            Exact fees and deposit details will be confirmed on the checkout
            page before you pay. Deposit is fully refundable after successful
            return.
          </p>

          <Link
            to="/checkout"
            className="block w-full mt-1 text-center rounded-full bg-emerald-600 text-white py-2.5 text-sm font-medium hover:bg-emerald-500 transition"
          >
            Proceed to checkout
          </Link>

          <button
            onClick={clearCart}
            className="w-full mt-2 rounded-full border border-red-200 text-red-600 py-2 text-xs font-medium hover:bg-red-50 transition"
          >
            Clear bag
          </button>

          <Link
            to="/shop"
            className="block w-full mt-1 text-center text-[11px] text-slate-500 hover:text-emerald-700"
          >
            ← Continue browsing outfits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
