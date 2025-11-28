import React from "react";
import blogPosts from "../data/blogPosts";
import BlogPostCard from "../components/BlogPostCard";

const Blog = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-12 pt-6">
      {/* Hero header */}
      <div className="mb-8 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-sky-50 px-6 py-6 md:py-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 mb-2">
          Style journal
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Rental stories, styling tips & care hacks.
            </h1>
            <p className="text-sm text-slate-600">
              Explore ideas on how to style your rentals, care for outfits, and
              get the most out of every look without buying more.
            </p>
          </div>
          <div className="text-xs text-slate-700 border border-slate-200 bg-white rounded-2xl px-4 py-3 shadow-sm self-start md:self-auto">
            <p className="font-medium text-slate-900">
              {blogPosts.length} articles
            </p>
            <p className="text-[11px] text-slate-500">
              Updated regularly with fresh inspiration from the rental world.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of posts */}
      {blogPosts.length === 0 ? (
        <p className="text-sm text-slate-500">
          No posts yet. Check back soon for new stories and tips.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
