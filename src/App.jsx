import { useEffect } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Resorts from './pages/Resorts';
import SingleResort from './pages/SingleResort';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

function ScrollToTopOnMount() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {

  return (

    <Router>
      <ScrollToTopOnMount />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='resorts' element={<Resorts />} />
        <Route path='resort/:id' element={<SingleResort />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
