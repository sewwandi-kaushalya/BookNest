import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedBooks from "./components/FeaturedBooks";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

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
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;





