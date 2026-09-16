import { Heart, ShoppingBag, Star } from "lucide-react";

function BookCard({ book }) {
  return (
    <div className="group relative">

      {/* Book Cover */}
      <div className="relative overflow-hidden rounded-2xl bg-[#f1eee8] p-5">

        <button className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:text-red-500">
          <Heart size={17} />
        </button>

        <div className="mx-auto aspect-[3/4] max-w-[190px] overflow-hidden rounded-lg shadow-lg transition duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
          <img
            src={book.image}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        </div>

      </div>

      {/* Details */}
      <div className="pt-5">

        <div className="mb-2 flex items-center gap-1">
          <Star
            size={14}
            className="fill-amber-400 text-amber-400"
          />

          <span className="text-xs font-medium text-slate-500">
            {book.rating}
          </span>
        </div>

        <h3 className="font-semibold text-slate-900">
          {book.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {book.author}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <p className="text-lg font-bold text-slate-900">
            Rs. {book.price.toLocaleString()}
          </p>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700">
            <ShoppingBag size={17} />
          </button>

        </div>
      </div>
    </div>
  );
}

export default BookCard;

