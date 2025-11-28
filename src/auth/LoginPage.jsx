import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook this into your login API
    console.log("Login data:", form);
  };

  return (
    <div className=" bg-slate-50 flex items-center justify-center px-4 py-0">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold">
              RC
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              RentCircle
            </span>
          </Link>
        </div>

        {/* Main card */}
        <div className="rounded-md border border-slate-200 bg-white shadow-sm px-7 py-6">
          <h1 className="text-xl font-semibold text-slate-900 mb-4">
            Sign in
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-800"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-800"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-[11px] text-emerald-700 hover:text-emerald-600"
                  // TODO: route to forgot password page
                >
                  Forgot your password?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
                className="h-3 w-3 rounded border-slate-400 text-emerald-600 focus:ring-0"
              />
              <label
                htmlFor="remember"
                className="text-[11px] text-slate-700"
              >
                Keep me signed in on this device
              </label>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-sm bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
            >
              Sign in
            </button>
          </form>

          {/* Terms text */}
          <p className="mt-4 text-[11px] leading-relaxed text-slate-600">
            By continuing, you agree to RentCircle&apos;s{" "}
            <button
              type="button"
              className="text-emerald-700 hover:text-emerald-600 underline underline-offset-2"
            >
              Terms of Use
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="text-emerald-700 hover:text-emerald-600 underline underline-offset-2"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>

        {/* Create account block (Amazon-ish) */}
        <div className="mt-6">
          <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-3">
            <span className="flex-1 h-px bg-slate-200" />
            <span>New to RentCircle?</span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>

          <Link
            to="/register"
            className="block w-full rounded-sm border border-slate-300 bg-slate-100 px-4 py-2 text-center text-xs font-medium text-slate-800 hover:bg-slate-200 hover:border-slate-400 transition-colors"
          >
            Create your RentCircle account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
