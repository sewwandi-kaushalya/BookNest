import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/cartContextValue";
import { useWishlist } from "../context/WishlistContext";

function BookCard({ book }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const navigate = useNavigate();

  // Add book to cart
  const handleAddToCart = () => {
    addToCart(book, 1);
    navigate("/cart");
  };

  // Check whether book is already in wishlist
  const wishlistActive = isInWishlist(book.id);

  return (
    <div className="group relative">
      {/* Book Image Section */}
      <div className="relative overflow-hidden rounded-2xl bg-[#f1eee8] p-5">

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(book)}
          aria-label={
            wishlistActive
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105 ${
            wishlistActive
              ? "text-red-500"
              : "text-slate-500 hover:text-red-500"
          }`}
        >
          <Heart
            size={17}
            className={
              wishlistActive
                ? "fill-red-500"
                : ""
            }
          />
        </button>

        {/* Book Image */}
        <Link to={`/books/${book.id}`}>
          <div className="mx-auto aspect-[3/4] max-w-[190px] overflow-hidden rounded-lg shadow-lg transition duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
            <img
              src={book.image}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
      </div>

      {/* Book Information */}
      <div className="pt-5">

        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <Star
            size={14}
            className="fill-amber-400 text-amber-400"
          />

          <span className="text-xs font-medium text-slate-500">
            {book.rating}
          </span>
        </div>

        {/* Book Title */}
        <Link to={`/books/${book.id}`}>
          <h3 className="font-semibold text-slate-900 transition hover:text-slate-500">
            {book.title}
          </h3>
        </Link>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          {book.author}
        </p>

        {/* Price + Cart Button */}
        <div className="mt-4 flex items-center justify-between">

          {/* Price */}
          <p className="text-lg font-bold text-slate-900">
            Rs. {book.price.toLocaleString()}
          </p>

          {/* Add to Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Add ${book.title} to cart`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white transition hover:scale-105 hover:bg-slate-700"
          >
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

