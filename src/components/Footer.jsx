import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#55883B] text-[#E6F0DC] pt-12 pb-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1️⃣ Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#C1E899] mb-4">L’UNICO Kitchen</h2>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">
            Corporate Catering Services since 2023.  
            We specialize in providing delicious, high-quality meals for companies and corporate events.
          </p>
          <div className="flex space-x-4 mt-4 text-[#E6F0DC]">
            <a href="#" className="hover:text-[#C1E899] transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-[#C1E899] transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-[#C1E899] transition"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-[#C1E899] transition"><FaWhatsapp size={20} /></a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#C1E899] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Menu', 'Clients', 'Gallery', 'Blogs', 'Testimonials', 'Contact Us'].map((item, i) => (
              <li key={i} className="hover:text-[#9A6735] transition">
                <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#C1E899] mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 text-[#C1E899]" />
              <span>No. 15, Corporate Park, Mount Road, Chennai - 600002</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-3 text-[#C1E899]" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-[#C1E899]" />
              <a href="mailto:info@lunicokitchen.in">info@lunicokitchen.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#C1E899] mt-10 pt-4 text-center text-xs sm:text-sm text-[#E6F0DC] opacity-80">
        © {new Date().getFullYear()} L’UNICO Kitchen | Designed by{' '}
        <span className="text-[#C1E899] font-medium">Rakesh InspireLoop Tech</span>
      </div>
    </footer>
  );
};

export default Footer;
