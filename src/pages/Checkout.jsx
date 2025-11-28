// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items, totalAmount, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi"); // "upi" | "card" | "cod"
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [notes, setNotes] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const serviceFee = items.length ? 99 : 0;
  const securityDeposit = items.length ? 500 : 0;
  const payableNow = totalAmount + serviceFee + securityDeposit;

  const validate = () => {
    if (!items.length) {
      setFormError("Your bag is empty. Add items before checkout.");
      return false;
    }
    if (!fullName || !email || !phone) {
      setFormError("Please fill in your name, email and phone.");
      return false;
    }
    if (!address1 || !city || !state || !pincode) {
      setFormError("Please complete your delivery address.");
      return false;
    }
    if (paymentMethod === "upi" && !upiId) {
      setFormError("Please enter your UPI ID.");
      return false;
    }
    if (
      paymentMethod === "card" &&
      (!cardNumber || !cardExpiry || !cardCvv)
    ) {
      setFormError("Please enter full card details.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // In a real app, call your API here.
    setSuccessMessage(
      "Order placed successfully! 🎉 We’ll share updates on your email."
    );
    clearCart();
  };

  if (!items.length) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight mb-2 text-slate-900">
            Checkout
          </h1>
          <p className="text-sm text-slate-600">
            Your rental bag is empty. Add some looks from the shop first.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      {/* Header / step info */}
      <div className="mb-6 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-sky-50 px-6 py-5 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-700 mb-1">
            Step 2 of 2
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Checkout & delivery details
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Add your address and payment details to confirm your rental. We only
            charge for the selected rental period and a refundable deposit.
          </p>
        </div>
        <div className="text-xs text-slate-700 border border-slate-200 bg-white rounded-2xl px-4 py-2 shadow-sm self-start md:self-auto">
          <p className="font-medium text-slate-900">
            Payable now: ₹{payableNow}
          </p>
          <p className="text-[11px] text-slate-500">
            Includes rental total, service fee & deposit
          </p>
        </div>
      </div>

      <form
        onSubmit={handlePlaceOrder}
        className="grid gap-6 md:grid-cols-[1.6fr,1fr] items-start"
      >
        {/* LEFT: ADDRESS + PAYMENT FORM */}
        <div className="space-y-5">
          {/* Contact details */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 space-y-3 text-sm shadow-sm">
            <h2 className="text-base font-semibold mb-1 text-slate-900">
              Contact details
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                Full name*
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                Email*
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-xs text-slate-700">
              Phone number*
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
              />
            </label>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 space-y-3 text-sm shadow-sm">
            <h2 className="text-base font-semibold mb-1 text-slate-900">
              Delivery address
            </h2>
            <label className="flex flex-col gap-1 text-xs text-slate-700">
              Address line 1*
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs text-slate-700">
              Address line 2 (optional)
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
              />
            </label>
            <div className="grid gap-3 md:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                City*
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                State*
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1 text-xs text-slate-700">
              Pincode / ZIP*
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
              />
            </label>
          </div>

          {/* Payment method */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 space-y-4 text-sm shadow-sm">
            <h2 className="text-base font-semibold mb-1 text-slate-900">
              Payment method
            </h2>

            <div className="flex flex-wrap gap-3 text-xs">
              <button
                type="button"
                onClick={() => setPaymentMethod("upi")}
                className={`px-3 py-1.5 rounded-full border transition ${
                  paymentMethod === "upi"
                    ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-300"
                }`}
              >
                UPI
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`px-3 py-1.5 rounded-full border transition ${
                  paymentMethod === "card"
                    ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-300"
                }`}
              >
                Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("cod")}
                className={`px-3 py-1.5 rounded-full border transition ${
                  paymentMethod === "cod"
                    ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                    : "border-slate-300 bg-white text-slate-700 hover:border-emerald-300"
                }`}
              >
                Cash on delivery
              </button>
            </div>

            {paymentMethod === "upi" && (
              <label className="flex flex-col gap-1 text-xs text-slate-700">
                UPI ID*
                <input
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                />
              </label>
            )}

            {paymentMethod === "card" && (
              <div className="space-y-3 text-xs text-slate-700">
                <label className="flex flex-col gap-1">
                  Card number*
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  <label className="flex flex-col gap-1">
                    Expiry (MM/YY)*
                    <input
                      type="text"
                      placeholder="08/27"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </label>
                  <label className="flex flex-col gap-1">
                    CVV*
                    <input
                      type="password"
                      placeholder="***"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </label>
                </div>
              </div>
            )}

            {paymentMethod === "cod" && (
              <p className="text-[11px] text-slate-500">
                Please keep the payable amount ready. We may call to confirm the
                order before dispatch.
              </p>
            )}
          </div>

          {/* Notes */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 text-sm shadow-sm">
            <h2 className="text-base font-semibold mb-2 text-slate-900">
              Order notes
            </h2>
            <label className="flex flex-col gap-1 text-xs text-slate-700">
              Any special delivery notes or fit preferences?
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:border-emerald-400"
              />
            </label>
          </div>

          {formError && (
            <p className="text-xs text-red-500">{formError}</p>
          )}
          {successMessage && (
            <p className="text-xs text-emerald-600">{successMessage}</p>
          )}
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 text-sm shadow-sm space-y-4">
          <h2 className="text-base font-semibold text-slate-900">
            Order summary
          </h2>

          {/* Items mini-list */}
          <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between gap-2 text-xs"
              >
                <div className="flex-1">
                  <p className="font-medium text-slate-900 line-clamp-1">
                    {item.product.name}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    ₹{item.product.pricePerDay} / day × {item.days} days
                  </p>
                </div>
                <p className="font-semibold text-slate-900">
                  ₹{item.product.pricePerDay * item.days}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-3 space-y-2">
            <div className="flex items-center justify-between text-slate-700">
              <span>Rental total</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Service fee</span>
              <span>₹{serviceFee}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Security deposit (refundable)</span>
              <span>₹{securityDeposit}</span>
            </div>
            <div className="border-t border-slate-200 pt-3 flex items-center justify-between font-semibold">
              <span className="text-slate-900">Payable now</span>
              <span className="text-lg text-emerald-700">
                ₹{payableNow}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-full bg-emerald-600 text-white py-2.5 text-sm font-medium hover:bg-emerald-500 transition"
          >
            Place rental order
          </button>

          <p className="text-[11px] text-slate-500">
            By placing this order you agree to our rental terms, damage policy
            and security deposit conditions.
          </p>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
