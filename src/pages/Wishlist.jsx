// src/pages/Wishlist.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { items, totalItems, removeFromWishlist } = useWishlist();

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      {/* BREADCRUMB + TITLE */}
      <div className="pt-4 pb-6">
        <p className="text-xs text-slate-500">
          Home <span className="mx-1">/</span>
          <span className="font-medium">Wishlist</span>
        </p>
        <div className="mt-2 flex items-baseline justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Wishlist
          </h1>
          <p className="text-xs text-slate-500">
            {totalItems === 0
              ? "No saved outfits yet"
              : `You have ${totalItems} saved outfit${
                  totalItems > 1 ? "s" : ""
                }`}
          </p>
        </div>
      </div>

      {totalItems === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-10 text-center">
          <p className="text-sm text-slate-300">
            Your wishlist is empty. Start browsing and save the outfits you
            love.
          </p>
          <Link
            to="/shop"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400"
          >
            Browse outfits
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {items.map((product) => (
              <div key={product.id} className="relative">
                {/* tiny remove button in corner */}
                <button
                  type="button"
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute right-2 top-2 z-10 h-7 w-7 rounded-full bg-slate-900/80 text-[12px] text-slate-200 hover:bg-rose-500 hover:text-white flex items-center justify-center"
                  aria-label="Remove from wishlist"
                >
                  ✕
                </button>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-xs font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-300"
            >
              Continue browsing
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Wishlist;
