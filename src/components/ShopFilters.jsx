// src/components/ShopFilters.jsx

import React from "react";

const ShopFilters = ({
  categoryFilter,
  typeFilter,
  priceMax,
  selectedSizes,
  selectedColors,
  typeOptions,
  sizeOptions,
  colorOptions,
  onCategoryTypeChange,
  onTypeChange,
  onPriceChange,
  onSizesChange,
  onColorsChange,
  onReset,
}) => {
  // Small helpers to toggle checkbox arrays
  const toggleValue = (value, current, setter) => {
    if (current.includes(value)) {
      setter(current.filter((v) => v !== value));
    } else {
      setter([...current, value]);
    }
  };

  return (
    <aside className="space-y-8 text-sm">
      {/* CATEGORIES SECTION */}
      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
          Categories
        </h3>

        {/* WOMEN */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-800">Women</p>
          <ul className="mt-1 space-y-1 text-xs text-slate-600">
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("women", "")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "women" && !typeFilter
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – All women
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("women", "dresses")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "women" && typeFilter === "dresses"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Dresses / Anarkali
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("women", "sarees")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "women" && typeFilter === "sarees"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Sarees
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("women", "lehengas")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "women" && typeFilter === "lehengas"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Lehengas
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("women", "kurta-sets")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "women" && typeFilter === "kurta-sets"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Kurta sets
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("women", "casual")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "women" && typeFilter === "casual"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Casual / sweaters
              </button>
            </li>
          </ul>
        </div>

        {/* MEN */}
        <div>
          <p className="text-xs font-semibold text-slate-800">Men</p>
          <ul className="mt-1 space-y-1 text-xs text-slate-600">
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && !typeFilter
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – All men
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "shirts")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && typeFilter === "shirts"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Shirts
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "t-shirts")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && typeFilter === "t-shirts"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – T-shirts
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "trousers-jeans")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && typeFilter === "trousers-jeans"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Jeans & trousers
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "suits")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && typeFilter === "suits"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Suits
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "blazers")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && typeFilter === "blazers"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Blazers
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onCategoryTypeChange("men", "ethnic")}
                className={`hover:text-emerald-600 ${
                  categoryFilter === "men" && typeFilter === "ethnic"
                    ? "text-emerald-600 font-medium"
                    : ""
                }`}
              >
                – Ethnic / sherwani
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* QUICK TYPE CHIPS */}
      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
          All clothing types
        </h3>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <button
            type="button"
            onClick={() => onTypeChange("")}
            className={`px-3 py-1.5 rounded-full border ${
              !typeFilter
                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                : "border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-600"
            }`}
          >
            All
          </button>
          {typeOptions.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => onTypeChange(t.value)}
              className={`px-3 py-1.5 rounded-full border ${
                typeFilter === t.value
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* PRICE FILTER */}
      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
          Shop by price
        </h3>
        <div className="space-y-2">
          <input
            type="range"
            min={199}
            max={1500}
            step={50}
            value={priceMax}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full accent-emerald-500"
          />
          <p className="text-xs text-slate-600">
            Price up to <span className="font-semibold">₹{priceMax}</span>
          </p>
        </div>
      </div>

      {/* SIZE FILTER */}
      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
          Shop by size
        </h3>
        <div className="space-y-1 text-xs text-slate-600">
          {sizeOptions.map((size) => (
            <label key={size} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 rounded border-slate-300 text-emerald-500"
                checked={selectedSizes.includes(size)}
                onChange={() =>
                  toggleValue(size, selectedSizes, onSizesChange)
                }
              />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* COLOR FILTER */}
      <div>
        <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
          Shop by color
        </h3>
        <div className="space-y-1 text-xs text-slate-600 max-h-40 overflow-y-auto pr-1">
          {colorOptions.map((color) => (
            <label key={color} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-3 w-3 rounded border-slate-300 text-emerald-500"
                checked={selectedColors.includes(color)}
                onChange={() =>
                  toggleValue(color, selectedColors, onColorsChange)
                }
              />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* RESET */}
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-[11px] text-slate-500 hover:text-emerald-600"
      >
        Reset all filters
      </button>
    </aside>
  );
};

export default ShopFilters;
