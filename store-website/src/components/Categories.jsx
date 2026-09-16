import {
  BookOpen,
  Heart,
  Search,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fiction",
    icon: BookOpen,
    description: "Stories & adventures",
  },
  {
    name: "Romance",
    icon: Heart,
    description: "Love & relationships",
  },
  {
    name: "Mystery",
    icon: Search,
    description: "Secrets & thrillers",
  },
  {
    name: "Technology",
    icon: Code2,
    description: "Tech & programming",
  },
  {
    name: "Business",
    icon: BriefcaseBusiness,
    description: "Growth & success",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="bg-white px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Browse by category
            </h2>
          </div>

          {/* View All Categories */}
          <Link
            to="/books"
            className="w-fit text-sm font-semibold text-slate-900 underline underline-offset-4 transition hover:text-slate-500"
          >
            View all categories →
          </Link>

        </div>

        {/* Categories */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                to={`/books?category=${encodeURIComponent(
                  category.name
                )}`}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-[#faf9f7] p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900"
              >

                {/* Icon */}
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm transition group-hover:bg-white/10 group-hover:text-white">
                  <Icon size={21} />
                </div>

                {/* Category Name */}
                <h3 className="font-semibold text-slate-900 group-hover:text-white">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-slate-500 group-hover:text-slate-300">
                  {category.description}
                </p>

                {/* Small Arrow */}
                <div className="mt-5 text-xs font-semibold text-slate-400 opacity-0 transition group-hover:translate-x-1 group-hover:text-white group-hover:opacity-100">
                  Explore →
                </div>

              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Categories;
