import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A0D0D] text-[#FFF8E1] pt-12 pb-6 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#FF6F00] mb-4">Catering Co.</h2>
          <p className="text-sm sm:text-base text-[#FFF8E1] opacity-90 mb-4">
            We serve memorable moments with delicious flavors. Our vision is to be the top catering choice for every celebration.
          </p>
          <div className="flex space-x-4 mt-4 text-[#FFF8E1]">
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-green-300 transition"><FaWhatsapp size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-red-400 transition"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-xl font-semibold text-[#388E3C] mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {[
              "Wedding Event",
              "60th Wedding Celebration",
              "80th Wedding Celebration",
              "Engagement",
              "Seemantham",
              "Birthday Party",
              "House Warming",
              "Mehndi Function",
              "Corporate Events",
              "Retirement Function",
            ].map((item, index) => (
              <li key={index} className="flex items-center hover:text-[#FF6F00] transition">
                <FaArrowRight className="mr-2 text-[#8B0000]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#388E3C] mb-4">Contact Now</h3>
          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex items-start hover:text-[#FF6F00] transition">
              <FaMapMarkerAlt className="mt-1 mr-3 text-[#FF6F00]" />
              <span>123 Main Street, Near Anna Salai, Chennai - 600002</span>
            </li>
            <li className="flex items-center hover:text-[#FF6F00] transition">
              <FaPhoneAlt className="mr-3 text-[#FF6F00]" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li className="flex items-center hover:text-[#FF6F00] transition">
              <FaEnvelope className="mr-3 text-[#FF6F00]" />
              <a href="mailto:info@cateringco.in">info@cateringco.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-12 text-center">
        <h4 className="text-lg font-semibold text-[#8B0000] mb-3">Subscribe to our Newsletter</h4>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full sm:w-72 rounded-md focus:outline-none text-[#333333] text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-[#FF6F00] hover:bg-orange-700 text-white px-5 py-2 rounded-md transition text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-[#8B0000] mt-10 pt-4 text-center text-xs sm:text-sm text-[#FFF8E1] opacity-80">
        © {new Date().getFullYear()} Catering Co. | Designed by <span className="text-[#FF6F00] font-medium">Rakesh Creative Solution</span>
      </div>
    </footer>
  );
};

export default Footer;
