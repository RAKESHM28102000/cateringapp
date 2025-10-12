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
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#9A6735] text-[#E6F0DC] p-4 rounded-full shadow-lg hover:bg-[#55883B] transition-all duration-300"
      >
        <FaWpforms size={25} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20place%20an%20order."
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
        href="tel:+919876543210"
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
