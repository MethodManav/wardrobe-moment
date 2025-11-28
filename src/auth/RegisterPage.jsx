import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agree) {
      setError("You must agree to the Terms and Privacy Policy.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: hook this into your register API
    console.log("Register data:", form);
  };

  return (
    <div className=" bg-slate-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
              RC
            </div>
            <span className="text-base font-semibold tracking-tight text-slate-900">
              RentCircle
            </span>
          </Link>
        </div>

        {/* Main card */}
        <div className="rounded-md border border-slate-200 bg-white shadow-sm px-6 py-5">
          <h1 className="text-lg font-semibold text-slate-900 mb-3">
            Create account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Full name */}
            <div className="space-y-1">
              <label
                htmlFor="fullName"
                className="text-[11px] font-medium text-slate-800"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-[11px] font-medium text-slate-800"
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

            {/* Phone (optional) */}
            <div className="space-y-1">
              <label
                htmlFor="phone"
                className="text-[11px] font-medium text-slate-800"
              >
                Phone number (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-[11px] font-medium text-slate-800"
              >
                Password
              </label>
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

            {/* Confirm password */}
            <div className="space-y-1">
              <label
                htmlFor="confirmPassword"
                className="text-[11px] font-medium text-slate-800"
              >
                Re-enter password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
                className="mt-[3px] h-3 w-3 rounded border-slate-400 text-emerald-600 focus:ring-0"
              />
              <label
                htmlFor="agree"
                className="text-[11px] text-slate-700 leading-snug"
              >
                I agree to RentCircle&apos;s{" "}
                <button
                  type="button"
                  className="text-emerald-700 hover:text-emerald-600 underline underline-offset-2"
                >
                  Terms
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-emerald-700 hover:text-emerald-600 underline underline-offset-2"
                >
                  Privacy Policy
                </button>
                .
              </label>
            </div>

            {/* Error */}
            {error && (
              <p className="text-[11px] text-red-600 bg-red-50 border border-red-100 rounded-sm px-2 py-1">
                {error}
              </p>
            )}

            {/* Create account button */}
            <button
              type="submit"
              className="w-full rounded-sm bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
            >
              Create account
            </button>
          </form>
        </div>

        {/* Already have account */}
        <div className="mt-4">
          <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
            <span className="flex-1 h-px bg-slate-200" />
            <span>Already have an account?</span>
            <span className="flex-1 h-px bg-slate-200" />
          </div>

          <Link
            to="/login"
            className="block w-full rounded-sm border border-slate-300 bg-slate-100 px-4 py-2 text-center text-xs font-medium text-slate-800 hover:bg-slate-200 hover:border-slate-400 transition-colors"
          >
            Sign in to RentCircle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
