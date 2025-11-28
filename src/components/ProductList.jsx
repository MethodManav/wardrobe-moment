// src/components/ProductList.jsx

import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (!products.length) {
    return (
      <p className="text-sm text-slate-500">
        No outfits found for this filter.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
