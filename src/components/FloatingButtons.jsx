import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaWpforms } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-center gap-4 z-50"
      data-aos="fade-left"
    >
      {/* Google Form Button */}
      <a
        href="https://forms.gle/qV2mWHbBKBFpoy4N9"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#9A6735] text-[#E6F0DC] p-4 rounded-full shadow-lg hover:bg-[#55883B] transition-all duration-300"
      >
        <FaWpforms size={25} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919941013733?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <FaWhatsapp size={25} />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+91 99410 13733"
        className="bg-[#55883B] text-[#E6F0DC] p-4 rounded-full shadow-lg hover:bg-[#9A6735] transition-all duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <FaPhoneAlt size={25} />
      </a>
    </div>
  );
};

export default FloatingButtons;
