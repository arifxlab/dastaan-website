import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="flex flex-col min-h-screen bg-white text-stone-900">
        <Navbar />

        <main className="flex-grow pt-24">
          <Home />
        </main>

        <Footer />
      </div>
  );
}

export default App;