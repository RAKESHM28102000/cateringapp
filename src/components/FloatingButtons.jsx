import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaUtensils } from "react-icons/fa";

const FloatingButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuDownload = () => {
    const menuUrl = "/L'UnicoKitchenMenu.pdf.pdf"; // ensure menu.pdf is in public/assets/
    const link = document.createElement("a");
    link.href = menuUrl;
    link.download = "LUNICO_Kitchen_Menu.pdf";
    link.click();
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Floating Buttons */}
      <div
        className="fixed bottom-6 left-6 flex flex-col items-center gap-4 z-50"
        data-aos="fade-right"
      >
        {/* 🍽️ Menu Download Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#9A6735] text-[#E6F0DC] p-4 rounded-full shadow-lg hover:bg-[#55883B] transition-all duration-300"
          title="Download Menu"
        >
          <FaUtensils size={25} />
        </button>

        {/* 💬 WhatsApp Button */}
        <a
          href="https://wa.me/9629604100?text=Hello%20L’UNICO%20Kitchen!%20I’d%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
          title="Chat on WhatsApp"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <FaWhatsapp size={25} />
        </a>

        {/* 📞 Phone Call Button */}
        <a
          href="tel:+919629604100"
          className="bg-[#55883B] text-[#E6F0DC] p-4 rounded-full shadow-lg hover:bg-[#9A6735] transition-all duration-300"
          title="Call Now"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <FaPhoneAlt size={25} />
        </a>
      </div>

      {/* 🌙 Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          {/* 📄 Modal Box */}
          <div
            className="bg-white text-center rounded-2xl shadow-2xl max-w-sm w-[90%] p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#55883B] mb-3">
              Download Menu
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Would you like to download the latest{" "}
              <span className="font-semibold text-[#9A6735]">
                L’UNICO Kitchen Menu
              </span>
              ?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleMenuDownload}
                className="bg-[#55883B] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#9A6735] transition-all duration-300"
              >
                Yes, Download
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-800 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
