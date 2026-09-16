import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedBooks from "./components/FeaturedBooks";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import { CartProvider } from "./context/cartContextValue";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "./context/WishlistContext";
import CategoriesPage from "./pages/CategoriesPage";
import About from "./pages/About";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedBooks />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/books" element={<Books />} />

            <Route
              path="/books/:id"
              element={<BookDetails />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />
<Route
  path="/categories"
  element={<CategoriesPage />}
/>

<Route
  path="/about"
  element={<About />}
/>

<Route path="/wishlist" element={<Wishlist />} />

<Route path="/login" element={<Login />} /> 
<Route path="/register" element={<Register />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
     </WishlistProvider>
    </CartProvider>
   
  );
}

export default App;





