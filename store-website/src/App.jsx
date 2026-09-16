import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedBooks from "./components/FeaturedBooks";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
        <FeaturedBooks />
    </div>
  );
}

export default App;