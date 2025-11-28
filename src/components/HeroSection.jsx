import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-12 grid gap-10 md:grid-cols-[1.3fr,1fr] items-center">
      <div className="space-y-6">
        <p className="text-md font-bold uppercase tracking-[0.2em] text-emerald-300/80">
          Rent, wear, repeat
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Luxury looks for men & women,{" "}
          <span className="text-emerald-300">on rental</span>.
        </h1>
        <p className="text-sm md:text-base text-slate-700 max-w-xl">
          Swap buying once-a-year outfits with a curated rental wardrobe. Premium
          fits for weddings, parties, office events and everyday flex.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-emerald-300 text-slate-950 hover:bg-emerald-200 transition"
          >
            Browse collection
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm border border-slate-700 text-slate-100 hover:border-emerald-300 hover:bg-slate-900 transition"
          >
            How it works
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="relative h-72 w-full rounded-3xl bg-gradient-to-br from-emerald-400/20 via-slate-900 to-slate-900 border border-emerald-400/40 overflow-hidden flex items-center justify-center">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-300/40 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="relative z-10 flex gap-3">
            <div className="h-52 w-32 rounded-2xl bg-[url('https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center shadow-xl shadow-emerald-500/20" />
            <div className="h-52 w-32 rounded-2xl bg-[url('https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center shadow-xl shadow-emerald-500/20 translate-y-6" />
          </div>
        </div>
        <div className="absolute -bottom-5 left-6 rounded-full bg-slate-900/90 border border-slate-700 px-4 py-2 text-xs text-slate-700 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-emerald-300 text-slate-900 flex items-center justify-center text-[10px] font-bold">
            24h
          </span>
          <span>Doorstep delivery & easy returns.</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
