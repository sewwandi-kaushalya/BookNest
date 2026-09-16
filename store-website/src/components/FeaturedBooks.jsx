import BookCard from "./BookCard";
import { books } from "../data/books";

function FeaturedBooks() {
  return (
    <section
      id="books"
      className="bg-[#f6f3ee] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Handpicked for you
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Featured books
            </h2>
          </div>

          <button className="w-fit rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900">
            View all books →
          </button>

        </div>

        {/* Books */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedBooks;

