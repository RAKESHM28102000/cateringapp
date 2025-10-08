import React, { useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Menu",
    "Clients",
    "Gallery",
    "Blogs",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav className="bg-[#E6F0DC] fixed top-0 w-full z-50 shadow-md border-b border-[#C1E899]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl lg:text-2xl font-extrabold text-[#55883B]">
          L’UNICO <span className="text-[#9A6735]">Kitchen</span>
        </NavLink>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8 text-[#55883B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-6 items-center font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Menu" ? "/menu" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#55883B] text-white shadow" : "hover:bg-[#9A6735] hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden bg-[#E6F0DC] text-[#2F2F2F] py-4 px-6 space-y-2">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Menu" ? "/menu" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded font-medium transition-all duration-200 ${
                    isActive ? "bg-[#55883B] text-white" : "hover:bg-[#9A6735] hover:text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
