function Newsletter() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 text-center sm:px-12">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Stay in the story
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Get new books & reading inspiration in your inbox.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Join our reading community and discover new releases,
          recommendations, and special offers.
        </p>

        <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email address"
            className="min-w-0 flex-1 rounded-full border border-slate-700 bg-white/10 px-5 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-white"
          />

          <button className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;

