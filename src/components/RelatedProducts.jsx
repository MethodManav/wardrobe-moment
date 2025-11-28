import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ currentId, category }) => {
  const related = products.filter(
    (p) => p.category === category && p.id !== currentId
  );

  if (!related.length) return null;

  return (
    <section className="mt-10 border-t border-slate-800 pt-8">
      <h2 className="text-lg font-semibold mb-4">You may also like</h2>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
