import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import BookCard from "../components/BookCard";
import { books } from "../data/books";

function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(books.map((book) => book.category)),
  ];

  const filteredBooks = books
    .filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || book.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  return (
    <div className="min-h-screen bg-[#f6f3ee]">

      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Our collection
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Explore our books
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500">
            Discover your next favorite book from our carefully
            selected collection.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

        {/* Search + Sort */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="relative w-full lg:max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-11 pr-11 text-sm outline-none transition focus:border-slate-900"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900"
              >
                <X size={18} />
              </button>
            )}

          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">

            <SlidersHorizontal
              size={18}
              className="text-slate-500"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 outline-none"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

          </div>

        </div>

        {/* Categories */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === item
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-900"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

        {/* Result Count */}
        <div className="mb-8 mt-10">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filteredBooks.length}
            </span>{" "}
            books
          </p>
        </div>

        {/* Books */}
        {filteredBooks.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white px-6 py-20 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              📚
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              No books found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Try another title, author, or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Clear filters
            </button>

          </div>
        )}

      </section>
    </div>
  );
}

export default Books;

