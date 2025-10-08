// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blogs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";

import MenuOverview from "./pages/MenuOverview";
import MenuCategory from "./pages/MenuCategory";

import AOS from "aos";
import "aos/dist/aos.css";
import Clients from "./pages/Clients";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="mx-auto overflow-hidden">
      <Navbar />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/blogs" element={<Blog />} />

        {/* ✅ Dynamic Menu Pages */}
        <Route path="/menu" element={<MenuOverview />} />
        <Route path="/menu/:category" element={<MenuCategory />} />

        {/* Error & Fallback */}
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
