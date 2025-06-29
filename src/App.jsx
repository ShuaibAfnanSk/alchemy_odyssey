import { useEffect, useState } from "react";
import "./index.css";
import Index from "./pages/Index";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Resorts from "./pages/Resorts";
import SingleResort from "./pages/SingleResort";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";
import Aos from "aos";
import "aos/dist/aos.css";

function ScrollToTopOnMount() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
  }, []);

  return (
    <Router>
      <ScrollToTopOnMount />

      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <div className="loader">
            <div class="cloud front">
              <span class="left-front"></span>
              <span class="right-front"></span>
            </div>
            <span class="sun sunshine"></span>
            <span class="sun"></span>
            <div class="cloud back">
              <span class="left-back"></span>
              <span class="right-back"></span>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="resorts" element={<Resorts />} />
        <Route path="resort/:id" element={<SingleResort />} />
        <Route exact path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
