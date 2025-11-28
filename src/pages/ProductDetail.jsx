// src/pages/ProductDetail.jsx

import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import RelatedProducts from "../components/RelatedProducts";
import { useWishlist } from "../context/WishlistContext";

const renderStars = (rating) => {
  const rounded = Math.round(rating || 0);
  const full = "★★★★★".slice(0, rounded);
  const empty = "☆☆☆☆☆".slice(rounded);
  return full + empty;
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  // handle case if product not found
  if (!product) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-sm text-slate-700">Outfit not found.</p>
      </section>
    );
  }

  const wishlisted = isWishlisted(product.id);

  // Build gallery: use product.gallery if present, else just [image]
  const gallery =
    product && Array.isArray(product.gallery) && product.gallery.length > 0
      ? product.gallery
      : [product.image].filter(Boolean);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || ""
  );
  const [userRating, setUserRating] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(0); // index-based gallery
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description"); // "description" | "info" | "reviews"

  const activeImage = gallery[activeIndex];

  const rentalDays = useMemo(() => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
    const diffMs = end.getTime() - start.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
    return diffDays > 0 ? diffDays : 0;
  }, [startDate, endDate]);

  const handleQtyChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!startDate || !endDate) {
      setError("Please select a rental start date and return date.");
      return;
    }
    if (rentalDays <= 0) {
      setError("Return date must be on or after the start date.");
      return;
    }
    if (!selectedSize || !selectedColor) {
      setError("Please choose a size and color.");
      return;
    }

    setError("");
    addToCart(product, rentalDays, quantity);
  };

  const categoryLabel = product.category === "men" ? "Men" : "Women";
  const typeLabel = product.type
    ? product.type.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  const totalPrice = rentalDays * product.pricePerDay;

  const goPrev = () => {
    if (!gallery.length) return;
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!gallery.length) return;
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12 pt-6">
      {/* TOP: IMAGE/GALLERY LEFT + CONTENT RIGHT */}
      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* LEFT: GALLERY + MAIN IMAGE */}
        <div className="flex gap-5 items-start">
          {/* Thumbnails column (desktop) */}
          <div className="hidden md:flex md:flex-col gap-3 w-24 shrink-0">
            {gallery.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`border rounded-xl overflow-hidden h-20 w-20 bg-slate-100 flex items-center justify-center transition ${
                  activeIndex === index
                    ? "border-emerald-500 shadow-sm"
                    : "border-slate-200 hover:border-emerald-300"
                }`}
              >
                {img && (
                  <img
                    src={img}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Main image block */}
          <div className="relative flex-1 max-w-xl mx-auto">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
              {activeImage && (
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              )}
            </div>

            {/* Prev / Next arrows */}
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-sm text-slate-700 shadow-sm hover:bg-white hover:border-emerald-400"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-sm text-slate-700 shadow-sm hover:bg-white hover:border-emerald-400"
                >
                  ›
                </button>
              </>
            )}

            {/* Mobile thumbnails under image */}
            {gallery.length > 1 && (
              <div className="mt-3 flex md:hidden gap-3 justify-center">
                {gallery.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`border rounded-xl overflow-hidden h-16 w-16 bg-slate-100 flex items-center justify-center transition ${
                      activeIndex === index
                        ? "border-emerald-500 shadow-sm"
                        : "border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    {img && (
                      <img
                        src={img}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Badge bottom-left */}
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 border border-slate-200 px-3 py-1 text-[11px] text-slate-700 flex items-center gap-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Dry-cleaned & ready to wear
            </div>
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO BLOCK */}
        <div className="flex flex-col gap-4">
          {/* Title + short description */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {categoryLabel}
            </p>
            <h1 className="mt-1 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              {product.description}
            </p>
          </div>

          {/* Free delivery strip */}
          <div className="mt-1 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 flex items-center gap-3 text-xs text-slate-800">
            <span className="text-lg">🚚</span>
            <div>
              <p className="font-medium text-emerald-800">
                Free delivery on eligible rentals
              </p>
              <p className="text-[11px] text-emerald-700">
                Available in select cities • Dry-cleaning included in price.
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-1 text-sm mt-1">
            <div className="flex items-center gap-2 text-slate-800">
              <span className="text-amber-400 text-base">
                {renderStars(product.rating || 4.5)}
              </span>
              <span>{(product.rating || 4.5).toFixed(1)}</span>
              {product.reviewsCount && (
                <span className="text-xs text-slate-500">
                  ({product.reviewsCount} verified rentals)
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>Your rating:</span>
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setUserRating(val)}
                  className={`text-base leading-none ${
                    userRating >= val ? "text-amber-400" : "text-slate-300"
                  }`}
                >
                  ★
                </button>
              ))}
              {userRating > 0 && (
                <span className="text-slate-700">{userRating}.0 / 5</span>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-2xl font-semibold text-emerald-600">
              ₹{product.pricePerDay}
            </p>
            <p className="text-xs text-slate-500">
              per day • cleaning included
            </p>
          </div>

          {/* Color selection */}
          {product.colors?.length > 0 && (
            <div className="flex flex-col gap-2 text-sm mt-2">
              <span className="text-slate-800">Select color</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 rounded-full border text-xs transition ${
                      selectedColor === color
                        ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                        : "border-slate-300 text-slate-700 hover:border-emerald-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size selection */}
          {product.sizes?.length > 0 && (
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-slate-800">Select size</span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-full border text-xs transition ${
                      selectedSize === size
                        ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                        : "border-slate-300 text-slate-700 hover:border-emerald-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-500">
                If you&apos;re between sizes, pick the larger one for comfort.
              </span>
            </div>
          )}

          {/* Quantity + Add to cart + Wishlist */}
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
            {/* Quantity */}
            <div className="flex items-center border border-slate-300 rounded-full overflow-hidden bg-white">
              <button
                type="button"
                onClick={() => handleQtyChange(-1)}
                className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                -
              </button>
              <div className="px-4 py-2 text-sm text-slate-900">
                {quantity}
              </div>
              <button
                type="button"
                onClick={() => handleQtyChange(1)}
                className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                +
              </button>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition"
            >
              ADD TO CART
            </button>

            {/* Wishlist (using global wishlist context) */}
            <button
              type="button"
              onClick={() => toggleWishlist(product)}
              className={`h-10 w-10 rounded-full border flex items-center justify-center text-lg transition ${
                wishlisted
                  ? "border-rose-400 text-rose-500 bg-rose-50"
                  : "border-slate-300 text-slate-500 hover:border-rose-400 hover:text-rose-500"
              }`}
              aria-label="Add to wishlist"
            >
              {wishlisted ? "♥" : "♡"}
            </button>
          </div>

          {/* Rental dates */}
          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-3 text-sm">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Rental dates
            </span>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                Start date
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                Return date
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-700 mt-1">
              <span>
                {rentalDays > 0
                  ? `Rental duration: ${rentalDays} day${
                      rentalDays > 1 ? "s" : ""
                    }`
                  : "Select start and return date to see duration"}
              </span>
              {rentalDays > 0 && (
                <span className="font-semibold text-emerald-700">
                  Est. rental: ₹{totalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Error */}
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
      </div>

      {/* TABS BELOW */}
      <div className="mt-10">
        {/* Tabs header */}
        <div className="border-b border-slate-200">
          <div className="flex justify-center gap-8 text-sm">
            <button
              type="button"
              onClick={() => setActiveTab("description")}
              className={`py-3 border-b-2 transition ${
                activeTab === "description"
                  ? "border-emerald-500 text-emerald-700"
                  : "border-transparent text-slate-500 hover:text-emerald-600"
              }`}
            >
              Description
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("info")}
              className={`py-3 border-b-2 transition ${
                activeTab === "info"
                  ? "border-emerald-500 text-emerald-700"
                  : "border-transparent text-slate-500 hover:text-emerald-600"
              }`}
            >
              Additional information
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`py-3 border-b-2 transition ${
                activeTab === "reviews"
                  ? "border-emerald-500 text-emerald-700"
                  : "border-transparent text-slate-500 hover:text-emerald-600"
              }`}
            >
              Reviews (2)
            </button>
          </div>
        </div>

        {/* Tabs content */}
        <div className="mt-8">
          {/* DESCRIPTION TAB */}
          {activeTab === "description" && (
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
              <div>
                <h2 className="text-lg font-semibold tracking-tight mb-3 text-slate-900">
                  Description
                </h2>
                <p className="text-sm text-slate-700 mb-3">
                  {product.name} is part of our curated rental collection
                  crafted for high-impact occasions. Each piece is inspected,
                  steamed and dry-cleaned before it reaches you — so you can
                  focus on looking great, not on laundry.
                </p>
                <p className="text-sm text-slate-700 mb-3">
                  Ideal for events like{" "}
                  <span className="font-medium">
                    {product.tags?.join(", ") || "functions and gatherings"}
                  </span>
                  , this outfit pairs well with minimal accessories and clean
                  shoes. If you&apos;re between two sizes, we generally
                  recommend choosing the bigger one for extra comfort while
                  sitting, dancing and moving around.
                </p>
                <p className="text-sm text-slate-700">
                  You&apos;ll receive the outfit freshly pressed, on a hanger
                  and packed securely. After your rental period ends, simply
                  return it as it is — we handle all cleaning and maintenance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm">
                <h3 className="text-sm font-semibold mb-3 text-slate-900">
                  Product details
                </h3>
                <dl className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">Category</dt>
                    <dd className="w-1/2 text-right">
                      {categoryLabel} • {typeLabel || "Outfit"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">Available sizes</dt>
                    <dd className="w-1/2 text-right">
                      {product.sizes?.join(", ") || "Standard sizes"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">Available colors</dt>
                    <dd className="w-1/2 text-right">
                      {product.colors?.join(", ") || "Multiple options"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">Ideal for</dt>
                    <dd className="w-1/2 text-right">
                      {product.tags?.join(", ") || "Events & occasions"}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">Rental duration</dt>
                    <dd className="w-1/2 text-right">
                      Min 1 day • You choose dates
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">Cleaning</dt>
                    <dd className="w-1/2 text-right">
                      Professional dry-cleaning included
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500 w-1/2">
                      What&apos;s included
                    </dt>
                    <dd className="w-1/2 text-right">
                      Main garment only (accessories shown in photos are for
                      styling)
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {/* ADDITIONAL INFO TAB */}
          {activeTab === "info" && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg font-semibold tracking-tight mb-4 text-slate-900">
                Additional information
              </h2>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200 py-2 text-xs md:text-sm">
                  <span className="text-slate-500">Colors</span>
                  <span>
                    {product.colors?.join(", ") || "Multiple colourways"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-2 text-xs md:text-sm">
                  <span className="text-slate-500">Sizes</span>
                  <span>{product.sizes?.join(", ") || "Standard sizes"}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-2 text-xs md:text-sm">
                  <span className="text-slate-500">Fit</span>
                  <span>True to size for most body types</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 py-2 text-xs md:text-sm">
                  <span className="text-slate-500">Care</span>
                  <span>No washing needed — we clean it for you</span>
                </div>
              </div>
            </div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === "reviews" && (
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
              {/* Existing reviews (dummy) */}
              <div>
                <h2 className="text-lg font-semibold tracking-tight mb-4 text-slate-900">
                  Reviews (2)
                </h2>
                <div className="space-y-6 text-sm">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="border-b border-slate-200 pb-4 flex gap-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-slate-200" />
                      <div className="flex-1">
                        <p className="text-[11px] text-slate-500">
                          27 Aug 2023
                        </p>
                        <p className="text-sm font-semibold text-slate-900">
                          Brandon William
                        </p>
                        <p className="text-[11px] text-amber-400">
                          {renderStars(4)}
                        </p>
                        <p className="mt-1 text-xs text-slate-700">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add review form (dummy) */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-slate-900">
                  Add review
                </h3>
                <form
                  className="space-y-3 text-xs"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-1">
                    <label className="text-slate-600">Name*</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-600">Email*</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-600">Your rating</label>
                    <div className="flex items-center gap-1 text-amber-400 text-base">
                      {renderStars(userRating || 4)}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-slate-600">Review*</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition"
                  >
                    Submit review
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <RelatedProducts currentId={product.id} category={product.category} />
    </section>
  );
};

export default ProductDetail;
