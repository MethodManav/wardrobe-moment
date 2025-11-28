import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-xs font-bold">
            RC
          </div>
          <span className="text-md font-semibold tracking-tight text-slate-50">
            RentCircle
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-300"
                : "text-slate-200 hover:text-emerald-300"
            }
          >
            Home
          </NavLink>

          {/* SHOP + SUBMENU (pure CSS hover) */}
          <div className="relative group">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                (isActive
                  ? "text-emerald-300"
                  : "text-slate-200 hover:text-emerald-300") +
                " flex items-center gap-1"
              }
            >
              <span>Shop</span>
              <span className="text-[10px]">▾</span>
            </NavLink>

            {/* Dropdown */}
            <div
              className={`
                absolute left-1/2 top-full -translate-x-1/2
                w-[460px] rounded-xl border border-slate-800
                bg-slate-950/95 shadow-xl backdrop-blur p-4
                hidden group-hover:block
              `}
            >
              <div className="grid grid-cols-2 gap-6 text-xs text-slate-200">
                {/* WOMEN COLUMN */}
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Women
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to="/shop?category=women"
                        className="block hover:text-emerald-300"
                      >
                        – All women
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=women&type=dresses"
                        className="block hover:text-emerald-300"
                      >
                        – Dresses / Anarkali
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=women&type=sarees"
                        className="block hover:text-emerald-300"
                      >
                        – Sarees
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=women&type=lehengas"
                        className="block hover:text-emerald-300"
                      >
                        – Lehengas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=women&type=kurta-sets"
                        className="block hover:text-emerald-300"
                      >
                        – Kurta sets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=women&type=casual"
                        className="block hover:text-emerald-300"
                      >
                        – Casual / sweaters
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* MEN COLUMN */}
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Men
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        to="/shop?category=men"
                        className="block hover:text-emerald-300"
                      >
                        – All men
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=men&type=shirts"
                        className="block hover:text-emerald-300"
                      >
                        – Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=men&type=t-shirts"
                        className="block hover:text-emerald-300"
                      >
                        – T-shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=men&type=trousers-jeans"
                        className="block hover:text-emerald-300"
                      >
                        – Jeans &amp; trousers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=men&type=suits"
                        className="block hover:text-emerald-300"
                      >
                        – Suits
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=men&type=blazers"
                        className="block hover:text-emerald-300"
                      >
                        – Blazers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop?category=men&type=ethnic"
                        className="block hover:text-emerald-300"
                      >
                        – Ethnic / sherwani
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-300"
                : "text-slate-200 hover:text-emerald-300"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-300"
                : "text-slate-200 hover:text-emerald-300"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right side: Profile + Wishlist + Cart */}
        <div className="flex items-center gap-3">
          {/* PROFILE ICON */}
          <Link
            to="/profile"
            className="hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-lg text-slate-200 hover:border-emerald-300 hover:text-emerald-300"
          >
            👤
          </Link>

          {/* Wishlist icon */}
          <Link
            to="/wishlist"
            className="relative h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center text-lg text-slate-200 hover:border-rose-400 hover:text-rose-400"
          >
            ♥
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-400 text-[10px] font-semibold text-slate-950 px-1">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart icon */}
          <Link
            to="/cart"
            className="relative h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center text-lg text-slate-200 hover:border-emerald-300 hover:text-emerald-300"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-semibold text-slate-950 px-1">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="hidden md:inline-flex text-xs text-slate-200 hover:text-emerald-300"
          >
            Sign in
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-200 text-xl"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-2 text-sm">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-emerald-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-emerald-300"
          >
            Shop
          </NavLink>
          <NavLink
            to="/profile"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-emerald-300"
          >
            Profile
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-emerald-300"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-emerald-300"
          >
            Contact
          </NavLink>
          <NavLink
            to="/wishlist"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-rose-300"
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/checkout"
            onClick={() => setOpen(false)}
            className="block text-slate-200 hover:text-emerald-300"
          >
            Checkout
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
