import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.jpg";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo login
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] bg-[#f6f3ee] px-5 py-16">
      <div className="grid max-w-5xl mx-auto overflow-hidden bg-white shadow-sm rounded-3xl lg:grid-cols-2">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="hidden p-10 text-white bg-slate-950 lg:flex lg:flex-col lg:justify-between">

          <div>

            {/* Logo */}
            <div className="flex items-center justify-center overflow-hidden bg-white h-14 w-14 rounded-xl">
              <img
                src={logo}
                alt="BookNest Logo"
                className="object-contain w-full h-full rounded-full"
              />
            </div>

            {/* Heading */}
            <h1 className="mt-10 text-4xl font-bold leading-tight">
              Welcome back to
              <span className="block text-slate-400">
                BookNest.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-sm mt-5 text-sm leading-6 text-slate-400">
              Continue your reading journey and discover books
              worth remembering.
            </p>

          </div>

          {/* Bottom Text */}
          <p className="text-xs text-slate-500">
            Read. Discover. Repeat.
          </p>

        </div>

        {/* =====================================================
            LOGIN FORM
        ====================================================== */}

        <div className="p-7 sm:p-10 lg:p-12">
          <div className="max-w-md mx-auto">

            {/* Mobile Logo */}
            <div className="lg:hidden">
              <div className="flex items-center justify-center overflow-hidden bg-white shadow-sm h-14 w-14 rounded-xl">
                <img
                  src={logo}
                  alt="BookNest Logo"
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
            </div>

            {/* Small Heading */}
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Welcome back
            </p>

            {/* Main Heading */}
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Sign in to your account
            </h2>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-500">
              Enter your details to continue.
            </p>

            {/* =================================================
                FORM
            ================================================== */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />

                </div>
              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium transition text-slate-500 hover:text-slate-900"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute -translate-y-1/2 left-4 top-1/2 text-slate-400"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-900 focus:ring-1 focus:ring-slate-900"
                  />

                </div>

              </div>

              {/* Remember Me */}
              <label className="flex items-center gap-3 text-sm cursor-pointer text-slate-500">

                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 accent-slate-900"
                />

                Remember me

              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition duration-300 hover:bg-slate-800 hover:shadow-xl"
              >
                Sign In

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </form>

            {/* Register */}
            <p className="mt-8 text-sm text-center text-slate-500">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-slate-900 hover:underline"
              >
                Create account
              </Link>

            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;