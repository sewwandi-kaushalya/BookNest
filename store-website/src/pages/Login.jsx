import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

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
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden bg-slate-950 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
              📚
            </div>

            <h1 className="mt-10 text-4xl font-bold leading-tight">
              Welcome back to
              <span className="block text-slate-400">BookNest.</span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Continue your reading journey and discover books worth remembering.
            </p>
          </div>

          <p className="text-xs text-slate-500">Read. Discover. Repeat.</p>
        </div>

        {/* Login Form */}
        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            
            <div className="lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-xl">
                📚
              </div>
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Welcome back
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Sign in to your account
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Enter your details to continue.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-900"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-medium text-slate-500 hover:text-slate-900"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-900"
                  />
                </div>
              </div>

              {/* Remember */}
              <label className="flex items-center gap-3 text-sm text-slate-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />
                Remember me
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Sign In
                <ArrowRight size={17} />
              </button>
            </form>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-slate-500">
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