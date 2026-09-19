import { useState } from "react";

import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  Heart,
  X,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/cartContextValue";
import { useWishlist } from "../context/WishlistContext";
import logo from "../assets/logo.jpg";

function Navbar() {
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();

  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(
        `/books?search=${encodeURIComponent(search.trim())}`
      );

      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex ">
              <img
                src={logo}
                alt="BookNest Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                BookNest
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Read. Discover. Repeat.
              </p>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav className="hidden items-center gap-8 lg:flex">

            <Link
              to="/"
              className="text-sm font-semibold text-slate-900 transition hover:text-slate-600"
            >
              Home
            </Link>

                <Link
  to="/about"
  className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
>
  About
</Link>

            <Link
              to="/books"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Books
            </Link>

            <Link
  to="/categories"
  onClick={closeMobileMenu}
  className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
>
  Categories
</Link>

        
          </nav>

          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}
          <div className="hidden items-center gap-1 lg:flex">

            {/* Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
              className={`rounded-full p-2.5 transition ${
                searchOpen
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {searchOpen ? (
                <X size={20} />
              ) : (
                <Search size={20} />
              )}
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-red-500"
            >
              <Heart
                size={20}
                className={
                  wishlistItems.length > 0
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />

              {wishlistItems.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <ShoppingBag size={20} />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="ml-2 flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              <UserRound size={17} />
              Login
            </Link>
          </div>

          {/* =====================================================
              MOBILE ACTIONS
          ====================================================== */}
          <div className="flex items-center gap-1 lg:hidden">

            {/* Mobile Cart */}
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="relative rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100"
            >
              <ShoppingBag size={20} />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              aria-label="Open menu"
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
            >
              {mobileMenuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>
        </div>

        {/* =====================================================
            DESKTOP SEARCH BAR
        ====================================================== */}
        {searchOpen && (
          <div className="hidden border-t border-slate-100 py-4 lg:block">
            <form
              onSubmit={handleSearch}
              className="relative mx-auto max-w-2xl"
            >
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                placeholder="Search books by title or author..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-5 text-sm outline-none transition focus:border-slate-900 focus:bg-white"
              />
            </form>
          </div>
        )}

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-100 py-5 lg:hidden">

            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="relative mb-5"
            >
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-slate-900"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-1">

              {/* Home */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Books */}
              <Link
                to="/books"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Books
              </Link>

              {/* Categories */}
              <Link
                to="/#categories"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Categories
              </Link>

              {/* About */}
             <Link
  to="/about"
  onClick={closeMobileMenu}
  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
>
  About
</Link>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <Heart
                    size={18}
                    className={
                      wishlistItems.length > 0
                        ? "fill-red-500 text-red-500"
                        : ""
                    }
                  />

                  Wishlist
                </span>

                {wishlistItems.length > 0 && (
                  <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                <span className="flex items-center gap-3">
                  <ShoppingBag size={18} />
                  Cart
                </span>

                {cartCount > 0 && (
                  <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Login */}
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <UserRound size={17} />
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

