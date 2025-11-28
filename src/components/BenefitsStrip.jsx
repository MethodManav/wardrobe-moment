// src/components/BenefitsStrip.jsx
import React from "react";

const benefits = [
  {
    label: "Next-day delivery",
    description: "Available in major cities for last-minute plans.",
    icon: "⚡",
  },
  {
    label: "Dry-cleaned & ready",
    description: "Every outfit is cleaned and quality checked.",
    icon: "🫧",
  },
  {
    label: "Size support",
    description: "Chat with us for fit guidance before you rent.",
    icon: "📏",
  },
  {
    label: "Planet-friendly",
    description: "Fewer one-time buys, more shared wardrobes.",
    icon: "🌍",
  },
];

const BenefitsStrip = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-4 grid gap-4 md:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.label}
            className="flex items-start gap-3 text-xs md:text-sm"
          >
            <div className="h-8 w-8 rounded-xl  border border-slate-700 flex items-center justify-center animate-float-slow">
              <span className="text-base">{b.icon}</span>
            </div>
            <div>
              <p className="font-semibold text-slate-100">{b.label}</p>
              <p className="text-[11px] text-slate-400">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsStrip;
