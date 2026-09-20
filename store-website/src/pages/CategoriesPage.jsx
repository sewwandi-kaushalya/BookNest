import {
  BookOpen,
  Heart,
  Search,
  Code2,
  BriefcaseBusiness,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { books } from "../data/books";

const categories = [
  {
    name: "Fiction",
    description:
      "Lose yourself in unforgettable stories, adventures, and imaginative worlds.",
    icon: BookOpen,
  },
  {
    name: "Romance",
    description:
      "Discover stories about love, relationships, emotions, and unforgettable connections.",
    icon: Heart,
  },
  {
    name: "Mystery",
    description:
      "Explore thrilling mysteries, hidden secrets, suspense, and unexpected twists.",
    icon: Search,
  },
  {
    name: "Technology",
    description:
      "Learn programming, software development, technology, and modern digital skills.",
    icon: Code2,
  },
  {
    name: "Business",
    description:
      "Build your knowledge with books about business, finance, leadership, and success.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Self Development",
    description:
      "Improve your habits, mindset, productivity, confidence, and personal growth.",
    icon: Sparkles,
  },
];

function CategoriesPage() {
  const getBookCount = (categoryName) => {
    return books.filter(
      (book) => book.category === categoryName
    ).length;
  };

  return (
    <div className="min-h-screen bg-[#f6f3ee]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-white border-b border-slate-200">

        <div className="px-5 py-16 mx-auto max-w-7xl lg:px-8 lg:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore BookNest
          </p>

          <h1 className="max-w-3xl mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Find books that match
            <span className="block text-slate-500">
              your interests.
            </span>
          </h1>

          <p className="max-w-2xl mt-6 text-base leading-7 text-slate-500 sm:text-lg">
            Explore our collection by category and discover
            books selected for curious minds, passionate
            readers, and lifelong learners.
          </p>

        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="px-5 py-16 mx-auto max-w-7xl lg:px-8 lg:py-20">

        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Browse collection
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Explore by category
          </h2>

          <p className="max-w-2xl mt-3 text-sm leading-6 text-slate-500">
            Choose a category and find books that fit your
            interests and reading goals.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {

            const Icon = category.icon;

            const bookCount =
              getBookCount(category.name);

            return (
              <Link
                key={category.name}
                to={`/books?category=${encodeURIComponent(
                  category.name
                )}`}
                className="relative overflow-hidden transition duration-300 bg-white border group rounded-3xl border-slate-200 p-7 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-950"
              >

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 transition rounded-2xl bg-slate-100 text-slate-700 group-hover:bg-white/10 group-hover:text-white">
                  <Icon size={22} />
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold transition mt-7 text-slate-900 group-hover:text-white">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500 transition group-hover:text-slate-300">
                  {category.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-5 transition border-t mt-7 border-slate-100 group-hover:border-white/10">

                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-400">
                    {bookCount}{" "}
                    {bookCount === 1
                      ? "book"
                      : "books"}
                  </span>

                  <span className="flex items-center gap-2 text-sm font-semibold transition text-slate-900 group-hover:text-white">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          ALL BOOKS CTA
      ====================================================== */}

      <section className="px-5 pb-20 mx-auto max-w-7xl lg:px-8">

        <div className="py-12 overflow-hidden text-center rounded-3xl bg-slate-950 px-7 sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Can't decide?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore the complete collection.
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-sm leading-6 text-slate-400">
            Browse all available books and find something
            that catches your attention.
          </p>

          <Link
            to="/books"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Browse All Books
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default CategoriesPage;

