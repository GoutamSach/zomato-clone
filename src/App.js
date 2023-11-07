import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="mx-auto max-w-[1148px]">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
