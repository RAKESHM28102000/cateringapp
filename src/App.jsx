// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import WeddingMenu from './pages/menu/WeddingMenu';
import BirthdayMenu from './pages/menu/BirthdayMenu';
import CorporateMenu from './pages/menu/CorporateMenu';
import PartySpecials from './pages/menu/PartySpecials';
import Vegetarian from './pages/menu/Vegetarian';
import NonVegetarian from './pages/menu/NonVegetarian';
import DessertsDrinks from './pages/menu/DessertsDrinks';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './pages/Services';
import ErrorPage from './pages/ErrorPage';

function App() {
   useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="mx-auto overflow-hidden"> {/* Add padding to avoid content hiding behind fixed navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/menu/wedding-menu" element={<WeddingMenu />} />
        <Route path="/menu/birthday-menu" element={<BirthdayMenu />} />
        <Route path="/menu/corporate-menu" element={<CorporateMenu />} />
        <Route path="/menu/party-specials" element={<PartySpecials />} />
        <Route path="/menu/vegetarian" element={<Vegetarian />} />
        <Route path="/menu/non-vegetarian" element={<NonVegetarian />} />
        <Route path="/menu/desserts-drinks" element={<DessertsDrinks />} />
        {/* Catch-All 404 Route */}
        <Route path="/error" element={<ErrorPage />} />
        {/* Optional: redirect root "/" to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
