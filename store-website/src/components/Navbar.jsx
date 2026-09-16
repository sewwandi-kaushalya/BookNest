
import {
  Search,
  ShoppingBag,
  UserRound,
  Menu,
  Heart,
} from "lucide-react";

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
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
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="text-sm font-semibold text-slate-900"
          >
            Home
          </a>

          <a
            href="#books"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Books
          </a>

          <a
            href="#categories"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Categories
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">

          <button className="rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100">
            <Search size={20} />
          </button>

          <button className="hidden rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 sm:block">
            <Heart size={20} />
          </button>

          <button className="relative rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100">
            <ShoppingBag size={20} />

            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] font-bold text-white">
              0
            </span>
          </button>

          <button className="ml-2 hidden items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 sm:flex">
            <UserRound size={17} />
            Login
          </button>

          <button className="ml-1 rounded-lg p-2 text-slate-700 lg:hidden">
            <Menu size={23} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;

