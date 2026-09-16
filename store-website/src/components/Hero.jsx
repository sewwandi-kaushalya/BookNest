import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1]">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#e8e2d8] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e4ded3] blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div className="max-w-2xl">

          {/* Small Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">

            <Sparkles
              size={14}
              className="text-amber-500"
            />

            Curated books for curious minds

          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[76px]">

            Find your next

            <span className="mt-2 block text-slate-400">
              great read.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore stories, ideas, and knowledge from a
            carefully selected collection of books made for
            every kind of reader.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-3">

            <Link
              to="/books"
              className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Explore Books

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/categories"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-950 hover:text-slate-950"
            >
              Browse Categories
            </Link>

          </div>

          {/* Trust / Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-5 border-t border-slate-200 pt-7">

            {/* Rating */}
            <div className="flex items-center gap-3">

              <div className="flex -space-x-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f5f1] bg-slate-900 text-[10px] text-white">
                  R
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f5f1] bg-slate-600 text-[10px] text-white">
                  A
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f7f5f1] bg-slate-400 text-[10px] text-white">
                  K
                </div>
              </div>

              <div>

                <div className="flex items-center gap-1">
                  <Star
                    size={13}
                    className="fill-amber-400 text-amber-400"
                  />

                  <span className="text-sm font-bold text-slate-900">
                    4.9/5
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  Loved by readers
                </p>

              </div>

            </div>

            <div className="hidden h-9 w-px bg-slate-200 sm:block" />

            {/* Books */}
            <div>
              <p className="text-xl font-bold tracking-tight text-slate-950">
                10K+
              </p>

              <p className="text-xs text-slate-500">
                Books
              </p>
            </div>

            <div className="hidden h-9 w-px bg-slate-200 sm:block" />

            {/* Categories */}
            <div>
              <p className="text-xl font-bold tracking-tight text-slate-950">
                25+
              </p>

              <p className="text-xs text-slate-500">
                Categories
              </p>
            </div>

          </div>

        </div>

        {/* =================================================
            RIGHT VISUAL
        ================================================== */}

        <div className="relative mx-auto flex h-[500px] w-full max-w-[540px] items-center justify-center">

          {/* Large background shape */}
          <div className="absolute h-[360px] w-[360px] rounded-full bg-[#ded8ce] sm:h-[420px] sm:w-[420px]" />

          {/* Decorative ring */}
          <div className="absolute h-[400px] w-[400px] rounded-full border border-slate-300/60 sm:h-[470px] sm:w-[470px]" />

          {/* =================================================
              MAIN BOOK
          ================================================== */}

          {/* <div className="relative z-20 w-56 -rotate-6 rounded-xl bg-slate-950 p-3 shadow-[0_30px_70px_rgba(15,23,42,0.25)] transition duration-500 hover:-translate-y-2 hover:-rotate-3 sm:w-64">

            <div className="flex aspect-[3/4] flex-col justify-between rounded-lg border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">

              <div>

                <div className="flex items-center gap-2">

                  <BookOpen
                    size={14}
                    className="text-white/50"
                  />

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    BookNest
                  </p>

                </div>

                <h2 className="mt-10 text-4xl font-bold leading-[0.95] tracking-tight text-white">
                  The
                  <br />
                  Art of
                  <br />
                  Reading
                </h2>

              </div>

              <div>

                <div className="mb-4 h-px bg-white/10" />

                <p className="text-[10px] leading-4 text-white/50">
                  Stories that stay with you.
                </p>

              </div>

            </div>

          </div> */}

          {/* =================================================
              SECOND BOOK
          ================================================== */}

          {/* <div className="absolute right-4 top-12 z-30 w-36 rotate-12 rounded-xl bg-white p-2.5 shadow-[0_20px_45px_rgba(15,23,42,0.16)] transition duration-500 hover:rotate-6 sm:right-8 sm:w-40">

            <div className="flex aspect-[3/4] flex-col justify-between rounded-lg bg-[#c9bba8] p-4">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-slate-700">
                  Fiction
                </p>

                <div className="mt-2 h-px w-8 bg-slate-700/30" />

              </div>

              <h3 className="text-2xl font-bold leading-none tracking-tight text-slate-900">
                Lost
                <br />
                Stories
              </h3>

              <p className="text-[9px] leading-3 text-slate-600">
                A collection of moments.
              </p>

            </div>

          </div> */}

          {/* =================================================
              SMALL FLOATING CARD
          ================================================== */}

          <div className="absolute bottom-12 left-2 z-40 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:left-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white">
                <Star
                  size={15}
                  className="fill-white"
                />
              </div>

              <div>

                <p className="text-xs font-bold text-slate-900">
                  4.9 / 5
                </p>

                <p className="text-[10px] text-slate-500">
                  Reader rating
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              SMALL LABEL
          ================================================== */}

          <div className="absolute bottom-8 right-0 z-40 hidden rounded-full border border-white bg-white/80 px-4 py-2 text-[10px] font-semibold text-slate-600 shadow-lg backdrop-blur sm:block">
            Read. Discover. Repeat.
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

