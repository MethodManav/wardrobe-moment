// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // No need to show if only 1 page or 0 products
  if (totalPages <= 1) return null;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  // Build a compact set of page numbers: 1 ... current-1 current current+1 ... last
  const buildPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    // Always show first
    pages.push(1);

    // Left ellipsis
    if (currentPage > 3) pages.push("left-ellipsis");

    // Middle pages around current
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    // Right ellipsis
    if (currentPage < totalPages - 2) pages.push("right-ellipsis");

    // Always show last
    pages.push(totalPages);

    return pages;
  };

  const pages = buildPages();

  return (
    <div className="mt-6 flex items-center justify-center gap-2 text-xs">
      {/* Prev */}
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page numbers */}
      {pages.map((p, idx) =>
        typeof p === "string" ? (
          <span key={p + idx} className="px-1 text-slate-400">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => goToPage(p)}
            className={`h-8 min-w-8 rounded-full border text-xs px-2 flex items-center justify-center ${
              p === currentPage
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-medium"
                : "border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700"
            }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        className="px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
