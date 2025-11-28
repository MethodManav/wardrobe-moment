// src/pages/Shop.jsx

import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import productsData from "../data/products";
import ProductList from "../components/ProductList";
import ShopFilters from "../components/ShopFilters";
import Pagination from "../components/Pagination";

const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

const typeToLabel = (type) =>
  type
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const Shop = () => {
  const query = useQuery();

  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [priceMax, setPriceMax] = useState(1500);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9; // adjust if you want 12, etc.

  useEffect(() => {
    const initialCat = query.get("category") || "";
    const initialType = query.get("type") || "";
    setCategoryFilter(initialCat);
    setTypeFilter(initialType);
    setCurrentPage(1);
  }, [query]);

  const typeOptions = useMemo(() => {
    const map = new Map();
    productsData.forEach((p) => {
      if (p.type && !map.has(p.type)) {
        map.set(p.type, typeToLabel(p.type));
      }
    });
    return Array.from(map.entries()).map(([value, label]) => ({
      value,
      label,
    }));
  }, []);

  const sizeOptions = ["XS", "S", "M", "L", "XL"];
  const colorOptions = [
    "Black",
    "White",
    "Red",
    "Blush Pink",
    "Navy",
    "Olive",
    "Cream",
    "Rust",
    "Sky Blue",
    "Indigo",
    "Beige Tones",
    "Gold",
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      if (categoryFilter && p.category !== categoryFilter) return false;
      if (typeFilter && p.type !== typeFilter) return false;
      if (p.pricePerDay > priceMax) return false;

      if (
        selectedSizes.length &&
        !selectedSizes.some((s) => p.sizes?.includes(s))
      ) {
        return false;
      }

      if (
        selectedColors.length &&
        !selectedColors.some((c) => p.colors?.includes(c))
      ) {
        return false;
      }

      return true;
    });
  }, [categoryFilter, typeFilter, priceMax, selectedSizes, selectedColors]);

  const readableType = typeFilter ? typeToLabel(typeFilter) : "";

  const handleCategoryTypeChange = (category, type = "") => {
    setCategoryFilter(category);
    setTypeFilter(type);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setCategoryFilter("");
    setTypeFilter("");
    setPriceMax(1500);
    setSelectedSizes([]);
    setSelectedColors([]);
    setCurrentPage(1);
  };

  // Whenever filters change, reset to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, typeFilter, priceMax, selectedSizes, selectedColors]);

  // Pagination calculations
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  // Ensure currentPage never goes out of range (e.g. filters reduced results)
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      {/* BREADCRUMB + TITLE */}
      <div className="pt-4 pb-6">
        <p className="text-xs text-slate-500">
          Home <span className="mx-1">/</span>
          <span className="font-medium">Shop</span>
        </p>
        <div className="mt-2 flex items-baseline justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Shop
          </h1>
          <p className="text-xs text-slate-500">
            Showing {filteredProducts.length} outfits
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT: SIDEBAR LEFT + PRODUCTS RIGHT */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 items-start">
        {/* LEFT: FILTER SIDEBAR */}
        <div className="md:col-span-1">
          <ShopFilters
            categoryFilter={categoryFilter}
            typeFilter={typeFilter}
            priceMax={priceMax}
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            typeOptions={typeOptions}
            sizeOptions={sizeOptions}
            colorOptions={colorOptions}
            onCategoryTypeChange={handleCategoryTypeChange}
            onTypeChange={setTypeFilter}
            onPriceChange={setPriceMax}
            onSizesChange={setSelectedSizes}
            onColorsChange={setSelectedColors}
            onReset={handleResetFilters}
          />
        </div>

        {/* RIGHT: FILTER CHIPS + PRODUCTS GRID + PAGINATION */}
        <div className="md:col-span-3 space-y-4">
          {(categoryFilter || typeFilter) && (
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="text-slate-500">Filters:</span>
              {categoryFilter && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
                  <span>Category:</span>
                  <span className="font-medium capitalize">
                    {categoryFilter}
                  </span>
                </span>
              )}
              {typeFilter && (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
                  <span>Type:</span>
                  <span className="font-medium">{readableType}</span>
                </span>
              )}
            </div>
          )}

          <ProductList products={paginatedProducts} />

          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Shop;
