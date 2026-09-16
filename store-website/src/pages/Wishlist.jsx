import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/cartContextValue";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleAddToCart = (book) => {
    addToCart(book, 1);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center bg-[#f6f3ee] px-5">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <Heart
              size={32}
              className="text-slate-400"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-950">
            Your wishlist is empty
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Save books you love and find them here later.
          </p>

          <Link
            to="/books"
            className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Discover Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f3ee]">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Saved for later
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            My Wishlist
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {wishlistItems.length}{" "}
            {wishlistItems.length === 1
              ? "book"
              : "books"}{" "}
            saved in your wishlist.
          </p>
        </div>
      </section>

      {/* Wishlist */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {wishlistItems.map((book) => (
            <div
              key={book.id}
              className="group relative"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-[#e9e4db] p-5">
                <button
                  onClick={() =>
                    removeFromWishlist(book.id)
                  }
                  aria-label="Remove from wishlist"
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition hover:bg-red-50"
                >
                  <Trash2 size={16} />
                </button>

                <Link to={`/books/${book.id}`}>
                  <div className="mx-auto aspect-[3/4] max-w-[190px] overflow-hidden rounded-lg shadow-lg transition duration-500 group-hover:-translate-y-2">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
              </div>

              {/* Details */}
              <div className="pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {book.category}
                </p>

                <Link to={`/books/${book.id}`}>
                  <h2 className="mt-2 font-semibold text-slate-900 transition hover:text-slate-500">
                    {book.title}
                  </h2>
                </Link>

                <p className="mt-1 text-sm text-slate-500">
                  {book.author}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-slate-900">
                    Rs. {book.price.toLocaleString()}
                  </p>

                  <button
                    onClick={() =>
                      handleAddToCart(book)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-slate-700"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Wishlist;

