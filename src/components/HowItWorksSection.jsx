// src/components/HowItWorksSection.jsx
import React from "react";

const steps = [
  {
    title: "Pick your look",
    description:
      "Filter by category, style and event type. See real photos, ratings and fit notes.",
    icon: "🧥",
  },
  {
    title: "Choose your dates",
    description:
      "Select how many days you want to rent. We handle cleaning and quality checks.",
    icon: "📅",
  },
  {
    title: "Wear, flex, return",
    description:
      "Rock your fit, click pictures, make memories — then hand it back, guilt-free.",
    icon: "📸",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <p className="text-md font-bold uppercase tracking-[0.25em] text-emerald-300/80 mt-2">
            How it works
          </p>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight mt-1">
            Renting outfits is easier than buying them.
          </h2>
        </div>
        <p className="text-xs md:text-sm text-slate-400 max-w-md">
          No dry-cleaning runs. No “I&apos;ll only wear this once” regrets. Just
          premium looks on rotation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-2xl border p-4 overflow-hidden border-emerald-300/60 transition group"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl bg-emerald-500/20 transition" />
            <div className="relative flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-xs text-slate-500">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <p className="text-xs text-slate-800">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
