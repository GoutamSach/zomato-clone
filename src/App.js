import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="mx-auto max-w-[1148px]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
