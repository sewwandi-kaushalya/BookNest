import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";

import { books } from "../data/books";
import { useCart } from "../context/CartContext"; 
import { useNavigate } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 
  const navigate = useNavigate();

  if (!book) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#f6f3ee] px-5">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            📚
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Book not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sorry, we couldn't find this book.
          </p>

          <Link
            to="/books"
            className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Browse Books
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  return (
    <div className="min-h-screen bg-[#f6f3ee]">

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={17} />
            Back to books
          </Link>
        </div>
      </div>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Book Image */}
          <div className="flex items-center justify-center rounded-3xl bg-[#e9e4db] p-8 sm:p-12">
            <div className="relative">

              <div className="absolute -right-4 -top-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                {book.category}
              </div>

              <img
                src={book.image}
                alt={book.title}
                className="w-64 rounded-xl object-cover shadow-2xl transition duration-500 hover:scale-[1.02] sm:w-80"
              />
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {book.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {book.title}
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              by {book.author}
            </p>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={18}
                  className="fill-amber-400 text-amber-400"
                />
                <span className="font-semibold text-slate-900">
                  {book.rating}
                </span>
              </div>

              <span className="text-slate-300">•</span>

              <span className="text-sm text-slate-500">
                Reader rating
              </span>
            </div>

            {/* Price */}
            <div className="mt-8">
              <p className="text-3xl font-bold text-slate-950">
                Rs. {book.price.toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-emerald-600">
                ✓ In stock
              </p>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-slate-200 pt-8">
              <h2 className="font-semibold text-slate-900">
                About this book
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-500">
                Discover this carefully selected book from the
                BookNest collection. Whether you're looking for
                inspiration, knowledge, or a great story, this book
                is a wonderful addition to your reading shelf.
              </p>
            </div>

            {/* Quantity + Actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              {/* Quantity */}
              <div className="flex h-12 w-fit items-center rounded-full border border-slate-200 bg-white">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-12 w-12 items-center justify-center text-slate-500 transition hover:text-slate-900"
                >
                  <Minus size={17} />
                </button>

                <span className="w-8 text-center text-sm font-semibold text-slate-900">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  className="flex h-12 w-12 items-center justify-center text-slate-500 transition hover:text-slate-900"
                >
                  <Plus size={17} />
                </button>
              </div>

              {/* Add Cart */}
              <button onClick={() => { addToCart(book, quantity); navigate("/cart"); }} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-slate-800" > <ShoppingBag size={18} /> Add to Cart </button>

              {/* Wishlist */}
              <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-900 hover:text-red-500">
                <Heart size={19} />
              </button>

            </div>

            {/* Small info */}
            <div className="mt-8 grid grid-cols-3 border-t border-slate-200 pt-6">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Free
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Delivery
                </p>
              </div>

              <div className="border-l border-slate-200 pl-5">
                <p className="text-sm font-semibold text-slate-900">
                  Secure
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Payment
                </p>
              </div>

              <div className="border-l border-slate-200 pl-5">
                <p className="text-sm font-semibold text-slate-900">
                  Easy
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Returns
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default BookDetails;



