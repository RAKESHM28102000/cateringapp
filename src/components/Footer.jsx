import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Menu",
    "Clients",
    "Contact",
  ];

  return (
    <footer className="bg-[#55883B] text-[#E6F0DC] pt-12 pb-6 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* 1️⃣ Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#C1E899] mb-4">
            L’UNICO Kitchen
          </h2>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">
            Corporate Catering Services since 2023. We specialize in providing
            delicious, high-quality meals for companies, corporate events, and
            special occasions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-[#E6F0DC]">
            <a
              href="https://www.linkedin.com/in/l-unico-kitchen-622a812b3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C1E899] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/l-unico-kitchen-622a812b3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C1E899] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/l-unico-kitchen-622a812b3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C1E899] transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://wa.me/9629604100"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C1E899] transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#C1E899] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `hover:text-[#9A6735] transition ${
                      isActive ? "font-semibold text-[#C1E899]" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#C1E899] mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-center md:justify-start items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-[#C1E899]" />
              <span>
                Plot 5, Park View Apartments, Raj Nandhavanam, Chettipunniyam,
                Chengalpattu – 603 204
              </span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaPhoneAlt className="mr-3 text-[#C1E899]" />
              <div className="flex flex-col items-center md:items-start">
                <a href="tel:+919629604100" className="hover:text-[#C1E899]">
                  +91 96296 04100
                </a>
                <a href="tel:+917550064996" className="hover:text-[#C1E899]">
                  +91 75500 64996
                </a>
              </div>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <FaEnvelope className="mr-3 text-[#C1E899]" />
              <div className="flex flex-col items-center md:items-start">
                <a
                  href="mailto:lunicokitchen@gmail.com"
                  className="hover:text-[#C1E899]"
                >
                  lunicokitchen@gmail.com
                </a>
                <a
                  href="mailto:cs@lunicokitchen.com"
                  className="hover:text-[#C1E899]"
                >
                  cs@lunicokitchen.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#C1E899] mt-10 pt-4 text-center text-xs sm:text-sm text-[#16002c] opacity-80">
        <p>
          © {new Date().getFullYear()} L’UNICO Kitchen | GST No:{" "}
          <span className="text-[#C1E899] font-medium">33AASCL5323H1Z3</span>
        </p>
        <p>
          Designed by{" "}
          <span className="text-[#C1E899] font-medium">
  <a
    href="https://inspireloop.onrender.com" // 🔗 your actual link here
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#9A6735] transition-colors duration-300"
  >
    Rakesh InspireLoop Tech
  </a>
</span>{" "}

          | Created with ❤️ by{" "}
          <span className="text-[#C1E899] font-medium">Indian</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
