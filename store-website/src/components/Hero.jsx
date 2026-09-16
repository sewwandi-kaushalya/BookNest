
function Hero() {
  return (
    <section className="overflow-hidden bg-[#f6f3ee]">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Explore our collection
          </div>

          <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Your next
            <span className="block text-slate-500">
              great story
            </span>
            starts here.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Discover carefully selected books for curious minds.
            From timeless classics to modern favorites, find a story
            worth getting lost in.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <button className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800">
              Explore Books →
            </button>

            <button className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950">
              Browse Categories
            </button>

          </div>

          {/* Small Stats */}
          <div className="mt-12 flex items-center gap-8 border-t border-slate-300 pt-7">

            <div>
              <p className="text-2xl font-bold text-slate-950">10K+</p>
              <p className="mt-1 text-xs text-slate-500">Books</p>
            </div>

            <div className="h-10 w-px bg-slate-300"></div>

            <div>
              <p className="text-2xl font-bold text-slate-950">25+</p>
              <p className="mt-1 text-xs text-slate-500">Categories</p>
            </div>

            <div className="h-10 w-px bg-slate-300"></div>

            <div>
              <p className="text-2xl font-bold text-slate-950">4.9/5</p>
              <p className="mt-1 text-xs text-slate-500">Reader rating</p>
            </div>

          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex min-h-[430px] items-center justify-center">

          {/* Background Circle */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-[#ded8ce] sm:h-[430px] sm:w-[430px]"></div>

          {/* Main Book */}
          <div className="relative z-10 w-52 -rotate-6 rounded-md bg-slate-900 p-6 shadow-2xl sm:w-60">

            <div className="flex aspect-[3/4] flex-col justify-between border border-white/20 p-5">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                  BookNest Edition
                </p>

                <h3 className="mt-8 text-3xl font-bold leading-tight text-white">
                  The Art
                  <br />
                  of Reading
                </h3>
              </div>

              <div>
                <div className="mb-3 h-px bg-white/20"></div>
                <p className="text-xs text-white/60">
                  Stories that stay with you.
                </p>
              </div>

            </div>
          </div>

          {/* Floating Book */}
          <div className="absolute right-5 top-12 z-20 w-36 rotate-12 rounded-md bg-white p-3 shadow-xl sm:right-12 sm:w-40">

            <div className="flex aspect-[3/4] flex-col justify-between rounded-sm bg-[#c9bba8] p-4">

              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-700">
                Fiction
              </p>

              <h4 className="text-xl font-bold leading-tight text-slate-900">
                Lost
                <br />
                Stories
              </h4>

              <p className="text-[9px] text-slate-600">
                A collection of moments
              </p>

            </div>
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-12 left-4 z-30 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-8">

            <div className="flex items-center gap-1 text-sm">
              <span>★★★★★</span>
            </div>

            <p className="mt-1 text-xs text-slate-500">
              Loved by readers
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

