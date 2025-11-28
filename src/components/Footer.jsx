import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-10">
      {/* Top strip CTA */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">
              Rent • Wear • Repeat
            </p>
            <h2 className="mt-2 text-lg md:text-xl font-semibold tracking-tight text-slate-50">
              Ready for your next outfit rotation?
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-emerald-300 text-slate-950 hover:bg-emerald-200 transition"
          >
            Explore rentals
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand / About column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full bg-emerald-400 flex items-center justify-center text-slate-900 font-bold text-xl">
                RC
              </span>
              <div className="leading-tight">
                <p className="font-semibold tracking-tight text-sm text-slate-50">
                  RentCircle
                </p>
                <p className="text-xs text-slate-400">
                  Clothing on rotation
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              Curated menswear and womenswear rentals for weddings, parties,
              shoots and everyday flex — without owning a single hanger more.
            </p>
            <p className="text-xs text-slate-500">
              Based in India • Delivering to major cities • Sustainable fashion
              made easy.
            </p>
          </div>

          {/* Shop column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">
              Shop by category
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  to="/shop?category=men"
                  className="hover:text-emerald-300 transition"
                >
                  Men&apos;s outfits
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=women"
                  className="hover:text-emerald-300 transition"
                >
                  Women&apos;s outfits
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-emerald-300 transition"
                >
                  All rentals
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-emerald-300 transition"
                >
                  Styling tips (blog)
                </Link>
              </li>
            </ul>
          </div>

          {/* Support / info column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">
              Help & info
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-emerald-300 transition"
                >
                  How RentCircle works
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-300 transition"
                >
                  Contact & support
                </Link>
              </li>
              <li>
                {/* You can later route this to a real page */}
                <span className="cursor-default text-slate-500">
                  Rental policy (coming soon)
                </span>
              </li>
              <li>
                <span className="cursor-default text-slate-500">
                  FAQs (coming soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">
              Stay in the loop
            </h3>
            <p className="text-sm text-slate-300">
              Get first access to new drops, styling ideas, and exclusive
              rental offers.
            </p>
            <form
              className="space-y-2 text-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:border-emerald-300"
                />
                <button
                  type="submit"
                  className="rounded-full bg-emerald-300 text-slate-950 px-4 py-2 text-sm font-medium hover:bg-emerald-200 whitespace-nowrap"
                >
                  Join
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
                No spam. Just good outfits and useful updates.
              </p>
            </form>

            {/* Social icons simple row (emoji-based so no extra libs) */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-slate-400">Find us on</span>
              <button
                type="button"
                className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-base hover:border-emerald-300 hover:text-emerald-300 transition"
                aria-label="Instagram"
              >
                🧵
              </button>
              <button
                type="button"
                className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-base hover:border-emerald-300 hover:text-emerald-300 transition"
                aria-label="Facebook"
              >
                📘
              </button>
              <button
                type="button"
                className="h-8 w-8 rounded-full border border-slate-700 flex items-center justify-center text-base hover:border-emerald-300 hover:text-emerald-300 transition"
                aria-label="Pinterest"
              >
                📌
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} RentCircle. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="hover:text-emerald-300 transition"
            >
              Terms & conditions
            </button>
            <button
              type="button"
              className="hover:text-emerald-300 transition"
            >
              Privacy policy
            </button>
            <button
              type="button"
              className="hover:text-emerald-300 transition"
            >
              Cookie preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
