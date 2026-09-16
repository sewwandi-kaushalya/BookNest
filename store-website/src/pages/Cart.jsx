import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  const deliveryFee = cartTotal > 0 ? 300 : 0;
  const grandTotal = cartTotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[75vh] bg-[#f6f3ee] px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <ShoppingBag size={32} className="text-slate-400" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
            Your cart is empty
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
            Looks like you haven't added any books yet. Discover something you'll love to read.
          </p>
          <Link
            to="/books"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Browse Books
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
          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={17} /> Continue shopping
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
            Your Cart
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Review your selected books before checkout.
          </p>
        </div>
      </section>

      {/* Cart Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          
          {/* Cart Items List */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                {/* Image */}
                <div className="h-32 w-24 shrink-0 overflow-hidden rounded-lg bg-[#f1eee8]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">{item.author}</p>
                  <p className="mt-3 font-bold text-slate-900">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 items-center rounded-full border border-slate-200">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:text-slate-900"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="w-7 text-center text-sm font-semibold text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center text-slate-500 transition hover:text-slate-900"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>
            
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-medium text-slate-900">
                  Rs. {cartTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery</span>
                <span className="font-medium text-slate-900">
                  Rs. {deliveryFee.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-900">Total</span>
                  <span className="text-xl font-bold text-slate-950">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-7 w-full rounded-full bg-slate-950 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Proceed to Checkout
            </button>
            
            <Link
              to="/books"
              className="mt-3 block text-center text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Cart;