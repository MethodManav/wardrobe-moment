import React, { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

// --- helper: small picks from products -----------------
const getFirst = (arr, fallback = null) => (arr && arr.length ? arr[0] : fallback);

const Home = () => {
  const navigate = useNavigate();

  // pick some product slices for sections
  const womenHighlight =
    getFirst(products.filter((p) => p.category === "women")) || products[0];
  const menHighlight =
    getFirst(products.filter((p) => p.category === "men")) || products[1] || products[0];

  const flashRentals = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  const traditionalPicks = products
    .filter(
      (p) =>
        p.tags?.includes("traditional") ||
        p.tags?.includes("ethnic") ||
        p.type === "traditional"
    )
    .slice(0, 4);

  // --- store slider data --------------------------------
  const stores = [
    {
      id: "blr-forum",
      city: "Bengaluru",
      name: "RentCircle Forum Mall",
      address: "Forum Mall, Kanakapura Rd, Bengaluru, Karnataka",
    },
    {
      id: "mum-infinity",
      city: "Mumbai",
      name: "RentCircle Infiniti Mall",
      address: "Infiniti Mall, Malad West, Mumbai, Maharashtra",
    },
    {
      id: "del-vegas",
      city: "New Delhi",
      name: "RentCircle Vegas Mall",
      address: "Vegas Mall, Dwarka, New Delhi",
    },
    {
      id: "hyd-sarath",
      city: "Hyderabad",
      name: "RentCircle Sarath City",
      address: "Sarath City Capital Mall, Gachibowli, Hyderabad",
    },
    {
      id: "pune-amanora",
      city: "Pune",
      name: "RentCircle Amanora",
      address: "Amanora Mall, Hadapsar, Pune, Maharashtra",
    },
    {
      id: "blr-orion",
      city: "Bengaluru",
      name: "RentCircle Orion Mall",
      address: "Orion Mall, Rajajinagar, Bengaluru",
    },
  ];

  const [storeCity, setStoreCity] = useState("");
  const sliderRef = useRef(null);

  const visibleStores = useMemo(() => {
    if (!storeCity) return stores;
    return stores.filter((s) => s.city === storeCity);
  }, [storeCity, stores]);

  const scrollStores = (dir) => {
    if (!sliderRef.current) return;
    const amount = dir === "left" ? -260 : 260;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // --- quick category CTA handlers ----------------------
  const goToShop = (params) => {
    const search = new URLSearchParams(params).toString();
    navigate(`/shop?${search}`);
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-12 grid gap-10 md:grid-cols-[1.15fr,1fr] items-center">
          {/* Left: text / search */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-500">
              Just dropped & never seen before
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Designed specially for{" "}
              <span className="inline-block bg-amber-200 px-2 rounded-md">
                your next occasion
              </span>
              .
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600 max-w-xl">
              Rent premium outfits for weddings, festivals, date nights and
              office parties. Women, men and traditional fits — all under one smart
              wardrobe.
            </p>

            {/* Quick filters like NEWME */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs md:text-sm">
              <button
                onClick={() => goToShop({ category: "women" })}
                className="px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800"
              >
                Women
              </button>
              <button
                onClick={() => goToShop({ category: "men" })}
                className="px-3 py-1.5 rounded-full border border-slate-300 text-slate-700 hover:border-slate-900 hover:text-slate-900"
              >
                Men
              </button>
              <button
                onClick={() => goToShop({ type: "traditional" })}
                className="px-3 py-1.5 rounded-full border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100"
              >
                Traditional
              </button>
              <button
                onClick={() => goToShop({})}
                className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900"
              >
                All clothing
              </button>
            </div>

            {/* "Search" like bar */}
            <div className="mt-6 rounded-2xl bg-white shadow-sm shadow-slate-200 border border-slate-100 p-3 flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex-1 flex flex-wrap gap-2 text-xs md:text-sm">
                <select className="min-w-[120px] flex-1 rounded-xl border border-slate-200 px-3 py-2 text-slate-700 focus:outline-none focus:border-slate-900">
                  <option>Occasion</option>
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Festive</option>
                  <option>Office party</option>
                  <option>Date night</option>
                </select>
                <select className="min-w-[120px] flex-1 rounded-xl border border-slate-200 px-3 py-2 text-slate-700 focus:outline-none focus:border-slate-900">
                  <option>Style</option>
                  <option>Lehenga</option>
                  <option>Saree</option>
                  <option>Kurta set</option>
                  <option>Suit</option>
                  <option>Western dress</option>
                </select>
              </div>
              <button
                onClick={() => goToShop({})}
                className="w-full md:w-auto rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800"
              >
                Explore outfits
              </button>
            </div>

            <p className="mt-3 text-[11px] text-slate-500">
              Dry-cleaned before & after every rental • Doorstep delivery &
              pickup in major cities.
            </p>
          </div>

          {/* Right: hero image cards (for her / for him) */}
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {/* For her */}
              <button
                onClick={() => goToShop({ category: "women" })}
                className="group relative rounded-3xl overflow-hidden h-64 bg-slate-200 shadow-md"
              >
                {womenHighlight?.image && (
                  <img
                    src={womenHighlight.image}
                    alt={womenHighlight.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-200">
                    For her
                  </p>
                  <p className="mt-1 text-base md:text-lg font-semibold text-white">
                    New festive & cocktail drops
                  </p>
                </div>
              </button>

              {/* For him */}
              <button
                onClick={() => goToShop({ category: "men" })}
                className="group relative rounded-3xl overflow-hidden h-64 bg-slate-200 shadow-md"
              >
                {menHighlight?.image && (
                  <img
                    src={menHighlight.image}
                    alt={menHighlight.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-200">
                    For him
                  </p>
                  <p className="mt-1 text-base md:text-lg font-semibold text-white">
                    Suits, sherwanis & more
                  </p>
                </div>
              </button>
            </div>

            {/* small traditional tile */}
            <button
              onClick={() => goToShop({ type: "traditional" })}
              className="relative rounded-3xl overflow-hidden h-28 bg-gradient-to-r from-amber-100 via-amber-50 to-slate-50 border border-amber-200 flex items-center justify-between px-6"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-amber-600">
                  Traditional edit
                </p>
                <p className="mt-1 text-sm md:text-base font-semibold text-slate-900">
                  Sarees, lehengas & kurta sets on rent.
                </p>
              </div>
              <span className="hidden sm:inline-flex text-xs font-medium rounded-full bg-slate-900 text-white px-4 py-1.5">
                View collection →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FLASH RENTALS STRIP (like flash sale) */}
      <section className="bg-slate-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
              Flash rentals
            </h2>
            <Link
              to="/shop"
              className="text-xs md:text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {flashRentals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* STORY BLOCK + IMAGE like "Be yourself" */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Everyday collection 2025
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-900">
              Be yourself, rent the look.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Build a rotating wardrobe instead of buying one-time outfits.
              From easy kurta sets to sharp blazers, dress the way you feel
              today — without committing for life.
            </p>
            <button
              onClick={() => goToShop({})}
              className="mt-5 inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800"
            >
              Explore collection
            </button>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl overflow-hidden h-72 bg-slate-200">
              {womenHighlight?.image && (
                <img
                  src={womenHighlight.image}
                  alt={womenHighlight.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {newArrivals.slice(0, 3).map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl overflow-hidden h-28 bg-slate-200"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS ROW */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            Explore new arrivals
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY (Women / Men / Traditional) */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            Shop by category
          </h2>
          <p className="text-center text-sm text-slate-600 mt-1 mb-5">
            Curated clothing only – western & traditional, for every mood.
          </p>

          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="inline-flex rounded-full bg-slate-100 p-1 text-xs md:text-sm">
              <button
                onClick={() => goToShop({ category: "women" })}
                className="px-4 py-1.5 rounded-full bg-white shadow-sm text-slate-900"
              >
                For Women
              </button>
              <button
                onClick={() => goToShop({ category: "men" })}
                className="px-4 py-1.5 rounded-full text-slate-600 hover:text-slate-900"
              >
                For Men
              </button>
              <button
                onClick={() => goToShop({ type: "traditional" })}
                className="px-4 py-1.5 rounded-full text-slate-600 hover:text-slate-900"
              >
                Traditional
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-[11px] md:text-xs">
              {[
                "Sarees",
                "Lehengas",
                "Kurta Sets",
                "Evening Gowns",
                "Blazers",
                "Dresses",
                "Sherwanis",
                "Indo-western",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-slate-200 text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(traditionalPicks.length ? traditionalPicks : products.slice(0, 4)).map(
              (p) => (
                <ProductCard key={p.id} product={p} />
              )
            )}
          </div>
        </div>
      </section>

      {/* FIND STORES + SLIDER (NEWME-style) */}
      <section className="bg-slate-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                Find a store near you
              </h2>
              <p className="mt-1 text-sm text-slate-600 max-w-md">
                Try traditional outfits in person, get quick alterations and
                pick up or drop your rentals at our partner stores.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <select
                value={storeCity}
                onChange={(e) => setStoreCity(e.target.value)}
                className="min-w-[160px] rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-700 focus:outline-none focus:border-slate-900"
              >
                <option value="">All cities</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
              </select>
              <button className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:border-slate-900 hover:text-slate-900">
                Use my location
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollStores("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white shadow-sm border border-slate-200 items-center justify-center text-lg text-slate-700 hover:bg-slate-50"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollStores("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-white shadow-sm border border-slate-200 items-center justify-center text-lg text-slate-700 hover:bg-slate-50"
            >
              ›
            </button>

            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
            >
              {visibleStores.map((store) => (
                <div
                  key={store.id}
                  className="min-w-[260px] max-w-[260px] flex-shrink-0 rounded-3xl bg-white shadow-sm border border-slate-200 overflow-hidden"
                >
                  <div className="h-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-end px-4 pb-3">
                    <span className="text-xs uppercase tracking-[0.28em] text-slate-200">
                      {store.city}
                    </span>
                  </div>
                  <div className="p-4 space-y-2 text-sm">
                    <p className="font-semibold text-slate-900">{store.name}</p>
                    <p className="text-xs text-slate-600">{store.address}</p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>Everyday 11am – 9pm</span>
                      <button className="text-slate-900 font-medium hover:underline">
                        Navigate
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            More cities coming soon. You can always rent online even if there’s
            no store near you yet.
          </p>
        </div>
      </section>

      {/* BLOG PREVIEW STYLE SECTION – optional mini band like in majestic */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-900">
            Stories from our community
          </h2>
          <p className="text-center text-sm text-slate-600 mt-1 mb-6">
            How people are styling their rentals for weddings, office days and
            everything in between.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="rounded-3xl border border-slate-200 bg-white shadow-sm p-4 flex flex-col gap-2"
              >
                <p className="text-[11px] text-slate-500">Style journal</p>
                <h3 className="text-sm md:text-base font-semibold text-slate-900">
                  {i === 1 &&
                    "What your outfit says at a wedding (without saying it)."}
                  {i === 2 &&
                    "Mixing traditional silhouettes with modern accessories."}
                  {i === 3 &&
                    "Office to after-party: one blazer, two completely different looks."}
                </h3>
                <p className="text-xs text-slate-600">
                  Quick reads from our in-house stylists, so you can focus on
                  enjoying the event instead of stressing in front of the mirror.
                </p>
                <button className="mt-1 text-xs font-medium text-slate-900 hover:underline self-start">
                  Read more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
