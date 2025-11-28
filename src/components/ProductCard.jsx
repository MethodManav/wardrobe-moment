// src/components/ProductCard.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const renderStars = (rating) => {
  const fullStars = Math.floor(rating || 0);
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(i <= fullStars ? "★" : "☆");
  }

  return stars.join("");
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();

  const wishlisted = isWishlisted(product.id);
  const categoryLabel = product.category === "men" ? "Men" : "Women";

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 3); // default rental 3 days
  };

  const handleView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="group">
      {/* IMAGE + HOVER ICONS */}
      <Link
        to={`/product/${product.id}`}
        className="block relative bg-white"
      >
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-sm bg-emerald-500 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}

        <div className="aspect-[3/4] overflow-hidden bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Hover icons */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          <div className="flex gap-3 pointer-events-auto">
            {/* View / zoom icon */}
            <button
              type="button"
              onClick={handleView}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs shadow-md hover:bg-slate-100"
              aria-label="View details"
            >
              🔍
            </button>

            {/* Wishlist icon */}
            <button
              type="button"
              onClick={handleWishlist}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs shadow-md hover:bg-slate-100"
              aria-label="Add to wishlist"
            >
              {wishlisted ? "♥" : "♡"}
            </button>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs shadow-md hover:bg-slate-100"
              aria-label="Add to cart"
            >
              🛒
            </button>
          </div>
        </div>
      </Link>

      {/* TEXT BLOCK BELOW (Asion-style) */}
      <div className="pt-3 text-center text-sm">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          {categoryLabel}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="mt-1 inline-block text-[13px] font-semibold text-slate-900 hover:text-emerald-600"
        >
          {product.name}
        </Link>

        {product.rating && (
          <div className="mt-1 flex items-center justify-center gap-1 text-[11px]">
            <span className="text-amber-400 text-xs">
              {renderStars(product.rating)}
            </span>
            <span className="text-slate-500">
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}

        <p className="mt-1 text-sm font-semibold text-slate-900">
          ₹{product.pricePerDay.toFixed(0)}
          <span className="ml-1 text-[11px] font-normal text-slate-500">
            / day
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
