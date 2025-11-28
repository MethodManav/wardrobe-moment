import React from "react";

const BlogPostCard = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // If your blogPosts have tags like ["Styling", "Care"], this will show them.
  const hasTags = Array.isArray(post.tags) && post.tags.length > 0;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 flex flex-col gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Date + optional tag pill */}
      <div className="flex items-center justify-between gap-2 text-[11px]">
        <p className="text-slate-500">{formattedDate}</p>
        {hasTags && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">
            {post.tags[0]}
            {post.tags.length > 1 && (
              <span className="text-emerald-500">
                +{post.tags.length - 1} more
              </span>
            )}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-xs md:text-sm text-slate-600 line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer: read button + reading time if available */}
      <div className="mt-1 flex items-center justify-between text-[11px]">
        <button className="inline-flex items-center gap-1 text-emerald-700 font-medium hover:text-emerald-800">
          Read post
          <span className="text-xs">→</span>
        </button>
        {post.readingTime && (
          <span className="text-slate-400">{post.readingTime} min read</span>
        )}
      </div>
    </article>
  );
};

export default BlogPostCard;
