import React from "react";

const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight mb-2">Contact us</h1>
      <p className="text-sm text-slate-700">
        Have a question about sizing, delivery, or styling assistance? Drop us a
        message and our team will get back to you.
      </p>

      <form className="space-y-3 text-sm">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1">
            Name
            <input
              type="text"
              className="rounded-lg border border-slate-700  px-3 py-2 text-sm focus:outline-none focus:border-emerald-300"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-1">
            Email
            <input
              type="email"
              className="rounded-lg border border-slate-700  px-3 py-2 text-sm focus:outline-none focus:border-emerald-300"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="flex flex-col gap-1">
          Message
          <textarea
            rows={4}
            className="rounded-lg border border-slate-700  px-3 py-2 text-sm focus:outline-none focus:border-emerald-300"
            placeholder="Tell us how we can help."
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-emerald-300 text-slate-950 px-5 py-2.5 text-sm font-medium hover:bg-emerald-200"
        >
          Send message
        </button>
      </form>

      <div className="pt-4 border-t border-slate-800 text-sm text-slate-700">
        <p>Or email us directly at support@rentcircle.app</p>
      </div>
    </section>
  );
};

export default Contact;
