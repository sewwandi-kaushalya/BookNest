import {
  BookOpen,
  Heart,
  Sparkles,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <div className="min-h-screen bg-[#f6f3ee]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

          {/* Left */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              About BookNest
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A place for
              <span className="block text-slate-500">
                every reader.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              BookNest is a modern online bookstore created
              for people who believe that a good book can
              inspire, educate, and change the way we see
              the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/books"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Books
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/categories"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
              >
                Browse Categories
              </Link>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative flex min-h-[400px] items-center justify-center">

            <div className="absolute h-[300px] w-[300px] rounded-full bg-[#383837] sm:h-[380px] sm:w-[380px]"></div>
<img src={aboutImage}
              alt="About BookNest"
              className="relative z-10 h-[300px] w-[300px] rounded-full object-cover sm:h-[380px] sm:w-[380px]"
            />
            {/* Main Book */}
            {/* <div className="relative z-10 w-56 -rotate-6 rounded-lg bg-slate-950 p-6 shadow-2xl sm:w-64">

              <div className="flex aspect-[3/4] flex-col justify-between border border-white/20 p-5">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                    BookNest
                  </p>

                  <h2 className="mt-8 text-3xl font-bold leading-tight text-white">
                    The Joy
                    <br />
                    of Reading
                  </h2>
                </div>

                <div>
                  <div className="mb-3 h-px bg-white/20"></div>

                  <p className="text-xs text-white/50">
                    Stories. Knowledge. Inspiration.
                  </p>
                </div>

              </div>

            </div> */}

            {/* Small Card */}
            {/* <div className="absolute right-2 top-10 z-20 w-36 rotate-12 rounded-xl bg-white p-4 shadow-xl sm:right-10 sm:w-40">

              <div className="flex aspect-square flex-col justify-center rounded-lg bg-[#e9e4db] p-4">

                <Heart
                  size={24}
                  className="text-slate-700"
                />

                <p className="mt-4 text-sm font-bold text-slate-900">
                  Books you love.
                </p>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Stories worth keeping.
                </p>

              </div>

            </div> */}

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-2 z-30 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-8">

              <div className="flex items-center gap-2">

                <Sparkles
                  size={17}
                  className="text-amber-500"
                />

                <span className="text-sm font-semibold text-slate-900">
                  Made for readers
                </span>

              </div>

              <p className="mt-1 text-xs text-slate-500">
                Discover something new
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="bg-[#f6f3ee] px-5 py-20 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Heading */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Our story
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than just
              <span className="text-slate-500">
                {" "}a bookstore.
              </span>
            </h2>

          </div>

          {/* Content */}
          <div className="space-y-5 text-sm leading-7 text-slate-500 sm:text-base">

            <p>
              BookNest was created with a simple idea:
              finding a great book should feel just as
              enjoyable as reading one.
            </p>

            <p>
              Our platform brings together books from
              different categories so readers can easily
              discover stories, knowledge, ideas, and
              inspiration in one place.
            </p>

            <p>
              Whether you are searching for a new novel,
              learning a technical skill, improving yourself,
              or exploring business ideas, BookNest makes
              discovering your next book simple.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="bg-white px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              What we believe
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Built around the
              <span className="text-slate-500">
                {" "}reading experience.
              </span>
            </h2>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Value 1 */}
            <div className="rounded-3xl border border-slate-200 bg-[#faf9f7] p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                <BookOpen size={22} />
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Discover
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Explore books across different categories
                and discover stories and ideas that match
                your interests.
              </p>

            </div>

            {/* Value 2 */}
            <div className="rounded-3xl border border-slate-200 bg-[#faf9f7] p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                <Heart size={22} />
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Connect
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Save books you love and build your own
                personal collection of stories worth
                coming back to.
              </p>

            </div>

            {/* Value 3 */}
            <div className="rounded-3xl border border-slate-200 bg-[#faf9f7] p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
                <Sparkles size={22} />
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                Grow
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Find books that help you learn new skills,
                develop new ideas, and continue growing.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY BOOKNEST
      ====================================================== */}

      <section className="bg-[#f6f3ee] px-5 py-20 lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Why BookNest
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Everything you need to
              <span className="text-slate-500">
                {" "}find your next book.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
              We keep the experience simple so you can
              spend less time searching and more time
              discovering books you actually want to read.
            </p>

          </div>

          {/* Right */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                  <Check size={17} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Carefully selected collection
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Explore books across popular and useful
                    categories.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                  <Check size={17} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Simple shopping experience
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Search, explore, save, and add your
                    favorite books to your cart easily.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
                  <Check size={17} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Designed for readers
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    A clean and comfortable interface that
                    keeps books at the center.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="bg-slate-950 px-5 py-16 lg:px-8">

        <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">

          <div>
            <p className="text-4xl font-bold text-white">
              10K+
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Books to discover
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-white">
              25+
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Categories
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-white">
              4.9/5
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Reader rating
            </p>
          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white px-5 py-20 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
            <Users size={24} />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Ready to find your next
            <span className="text-slate-500">
              {" "}great read?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
            Explore our collection and discover a book
            that belongs on your reading list.
          </p>

          <Link
            to="/books"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Start Exploring
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;

