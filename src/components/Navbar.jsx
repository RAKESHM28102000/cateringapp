import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = ['Home', 'About', 'Services', 'Works', 'Gallery', 'Contact'];

  const menuItems = [
    { name: 'Wedding Menu', path: 'wedding-menu' },
    { name: 'Birthday Menu', path: 'birthday-menu' },
    { name: 'Corporate Menu', path: 'corporate-menu' },
    { name: 'Party Specials', path: 'party-specials' },
    { name: 'Vegetarian', path: 'vegetarian' },
    { name: 'Non-Vegetarian', path: 'non-vegetarian' },
    { name: 'Desserts & Drinks', path: 'desserts-drinks' },
  ];

  return (
    <>
      <nav className="bg-[#FFF8E1] text-[#333333] fixed top-0 w-full z-50 shadow-md border-b border-orange-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl lg:text-2xl font-bold tracking-wide text-[#FF6F00]">Catering</div>

          {/* Hamburger - Mobile Only */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8 text-[#333333]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#FF6F00] text-white shadow'
                        : 'hover:bg-[#FF6F00] hover:text-white'
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
            {/* Dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer px-5 py-2 rounded-full bg-[#8B0000] text-white hover:bg-[#FF6F00] shadow transition-all duration-300">
                <span className="font-medium">Menu</span>
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </div>
              <ul className="absolute top-11 left-0 bg-white text-[#333333] rounded-md shadow-lg w-56 hidden group-hover:block z-50">
                {menuItems.map(({ name, path }) => (
                  <li key={name}>
                    <NavLink
                      to={`/menu/${path}`}
                      className="block px-4 py-2 hover:bg-[#FFF8E1] hover:text-[#FF6F00] transition-all duration-200"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFF8E1] text-[#333333] shadow-md fixed top-[70px] left-0 w-full z-40">
          <ul className="space-y-2 py-4 px-6">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded font-medium transition-all duration-200 ${
                      isActive ? 'bg-[#FF6F00] text-white' : 'hover:bg-[#FF6F00] hover:text-white'
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-full flex items-center justify-between px-4 py-2 rounded font-semibold hover:bg-[#FF6F00] hover:text-white transition"
              >
                <span>Menu</span>
                <ChevronDownIcon className="w-5 h-5 text-[#333333]" />
              </button>
              {menuOpen && (
                <ul className="pl-4 space-y-1 mt-1">
                  {menuItems.map(({ name, path }) => (
                    <li key={name}>
                      <NavLink
                        to={`/menu/${path}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-[#FF6F00] hover:text-white"
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
