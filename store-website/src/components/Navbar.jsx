import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContextValue";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const { cartCount } = useCart();
  const { wishlistItems } = useWishlist();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-xl shadow-sm">
            📚
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

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-900 transition hover:text-slate-600"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Books
          </Link>
          <Link
            to="/#categories"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Categories
          </Link>
          <Link
            to="/#about"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <Search size={20} />
          </button>

          {/* Wishlist */}
<Link
  to="/wishlist"
  aria-label="Wishlist"
  className="relative hidden rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-red-500 sm:block"
>
  <Heart size={20} />

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

            {/* Cart Count */}
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="ml-2 hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 sm:flex"
          >
            <UserRound size={17} />
            Login
          </Link>

          {/* Mobile Menu */}
          <button
            type="button"
            aria-label="Open menu"
            className="ml-1 rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={23} />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;