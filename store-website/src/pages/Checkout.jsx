import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Lock, ShoppingBag } from "lucide-react";
import { useState } from "react";

import { useCart } from "../context/cartContextValue";

function Checkout() {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = cartTotal > 0 ? 300 : 0;
  const grandTotal = cartTotal + deliveryFee;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  // Empty cart
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center bg-[#f6f3ee] px-5">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <ShoppingBag size={32} className="text-slate-400" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-950">
            Your cart is empty
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Add some books before proceeding to checkout.
          </p>

          <Link
            to="/books"
            className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  // Order success
  if (orderPlaced) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center bg-[#f6f3ee] px-5 py-20">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle size={42} className="text-emerald-500" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
            Order Confirmed
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Thank you for your order!
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Your BookNest order has been successfully placed. We'll prepare
            your books for delivery.
          </p>

          <div className="mt-7 rounded-2xl bg-[#f6f3ee] p-5 text-left">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Order number</span>
              <span className="font-semibold text-slate-900">#BN-2026-001</span>
            </div>

            <div className="mt-3 flex justify-between text-sm">
              <span className="text-slate-500">Payment</span>
              <span className="font-semibold text-slate-900">
                Cash on Delivery
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/books")}
            className="mt-7 w-full rounded-full bg-slate-950 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f3ee]">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={17} />
            Back to cart
          </Link>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
            Checkout
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Complete your details to place your order.
          </p>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Customer Information */}
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                <ShoppingBag size={18} className="text-slate-700" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900">Delivery Information</h2>
                <p className="text-xs text-slate-500">
                  Where should we deliver your books?
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-slate-900"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-slate-900"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your delivery address"
                  rows="4"
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-slate-900"
                ></textarea>
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none transition focus:border-slate-900"
                />
              </div>

              {/* Payment */}
              <div className="border-t border-slate-200 pt-7">
                <h2 className="font-bold text-slate-900">Payment Method</h2>

                <div className="mt-4 rounded-2xl border-2 border-slate-900 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full border-[5px] border-slate-900"></div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Cash on Delivery
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Pay when your order arrives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <Lock size={17} />
                Place Order
              </button>

              <p className="text-center text-xs text-slate-400">
                Your information is used only for this demo checkout.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-3xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-lg font-bold text-slate-900">Your Order</h2>

            <div className="mt-6 space-y-5">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-14 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Qty: {item.quantity}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-4 border-t border-slate-200 pt-6 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium text-slate-900">
                  Rs. {cartTotal.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Delivery</span>
                <span className="font-medium text-slate-900">
                  Rs. {deliveryFee.toLocaleString()}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="text-xl font-bold text-slate-950">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;