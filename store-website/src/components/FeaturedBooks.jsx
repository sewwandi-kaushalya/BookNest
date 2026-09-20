import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import BookCard from "./BookCard";
import { books } from "../data/books";

function FeaturedBooks() {
  // Only 5 books for Featured section
  const featuredBooks = books.slice(0, 5);

  return (
    <section
      id="books"
      className="bg-[#f6f3ee] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 mb-12 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Handpicked for you
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Featured Books
            </h2>

            <p className="max-w-lg mt-3 text-sm leading-6 text-slate-500">
              Discover some of our carefully selected books
              for your next great reading experience.
            </p>
          </div>

          {/* View All */}
          <Link
            to="/books"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            View all books

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Books */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedBooks;