// src/components/TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    name: "Aman Verma",
    location: "Mumbai",
    text: "Rented a black suit for my friend’s engagement. Fit was perfect, and honestly looked better than most people who bought theirs.",
    rating: 5,
    tag: "Wedding guest",
  },
  {
    name: "Riya Sharma",
    location: "Delhi",
    text: "I used to buy a new outfit for every function. Now I rotate looks for half the cost and zero guilt. Super smooth delivery + return.",
    rating: 4.8,
    tag: "Festival & party",
  },
  {
    name: "Kunal Mehta",
    location: "Bengaluru",
    text: "Needed a sharp blazer for a pitch. Got it on rent, crushed the meeting, and didn’t have to spend a bomb on a one-time outfit.",
    rating: 4.7,
    tag: "Work & events",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.round(rating);
  const full = "★★★★★".slice(0, fullStars);
  const empty = "☆☆☆☆☆".slice(fullStars);
  return full + empty;
};

const TestimonialsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14 pt-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-700">
            People renting with us
          </p>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight mt-1 text-slate-900">
            What our renters are saying.
          </h2>
        </div>
        <p className="text-xs md:text-sm text-slate-600 max-w-md">
          Real stories from people who switched from buying once-a-year outfits
          to sharing a smarter wardrobe.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative rounded-2xl border border-slate-200 bg-white p-4 md:p-5 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* soft glow blob */}
            <div className="pointer-events-none absolute -left-10 top-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />

            <div className="relative flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-[11px] text-slate-500">{t.location}</p>
                </div>
                <span className="text-[11px] px-2 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700">
                  {t.tag}
                </span>
              </div>

              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                “{t.text}”
              </p>

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span className="text-amber-400 text-xs">
                  {renderStars(t.rating)}
                </span>
                <span>{t.rating.toFixed(1)} / 5.0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
