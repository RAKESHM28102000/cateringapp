import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/L'Unico Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Menu", "Clients", "Contact"];

  // 🧭 Scroll behavior (show/hide and solidify on scroll)
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY || window.scrollY < 50);
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-xl border-b border-white/20 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-gradient-to-r from-[#4b2d73] via-[#7a4cc0] to-[#f4b942] shadow-lg"
          : "bg-gradient-to-r from-[#4b2d73]/60 via-[#7a4cc0]/50 to-[#f4b942]/40 bg-opacity-30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ✅ Logo Section */}
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <img
            src={logo}
            alt="L’UNICO Kitchen Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 shadow-md"
          />
          <h1 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
            L’UNICO <span className="text-[#f4b942]">Kitchen</span>
          </h1>
        </NavLink>

        {/* ✅ Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* ✅ Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 items-center font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                    isActive
                      ? "bg-gradient-to-r from-[#f45d4a] to-[#fc9a2b] text-white shadow-md scale-105"
                      : "bg-white/20 text-white hover:bg-gradient-to-r hover:from-[#f45d4a] hover:to-[#fc9a2b] hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-gradient-to-b from-[#4b2d73]/95 via-[#7a4cc0]/90 to-[#f4b942]/90 text-white py-4 px-6 space-y-3 backdrop-blur-xl border-t border-white/20">
          {navItems.map((item) => (
            <li key={item} className="text-center">
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#f45d4a] to-[#fc9a2b] text-white shadow-md scale-[1.03]"
                      : "bg-white/20 hover:bg-gradient-to-r hover:from-[#f45d4a] hover:to-[#fc9a2b] hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
