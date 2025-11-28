import React from "react";
import { Link } from "react-router-dom";

const CategoryGrid = () => {
  const categories = [
    {
      id: "men",
      label: "Men",
      description: "Suits, shirts & fits for every function.",
      image:
        "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "women",
      label: "Women",
      description: "Gowns, sarees & power looks on rotation.",
      image:
        "https://images.pexels.com/photos/6311666/pexels-photo-6311666.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight">
          Explore by category
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 hover:border-emerald-300/60 hover:bg-slate-900 transition flex"
          >
            <div
              className="w-1/2 min-h-[180px] bg-cover bg-center"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className="w-1/2 p-5 flex flex-col justify-between bg-slate-900">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  {cat.id === "men" ? "Menswear" : "Womenswear"}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-50">{cat.label}</h3>
                <p className="mt-2 text-sm text-slate-500">{cat.description}</p>
              </div>
              <span className="mt-4 inline-flex text-xs items-center gap-1 text-emerald-300">
                View looks →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
