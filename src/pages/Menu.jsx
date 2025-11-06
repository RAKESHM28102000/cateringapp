import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaDownload,
  FaCoffee,
  FaUtensils,
  FaPizzaSlice,
  FaMoon,
} from "react-icons/fa";

const menuData = {
  Monday: {
    breakfast: ["Pongal, Sambar, Chutney, Urad Vada"],
    lunch: [
      "Chappathi, Kurma",
      "White Rice, Sambar, Rasam, Poriyal, Kootu",
      "Buttermilk, Appalam, Pickle",
    ],
    dinner: ["Idly, Sambar, Chutney", "Rava Kichadi, Sambar, Chutney"],
    supper: ["Dosa, Sambar, Chutney", "Masala Vada"],
    extra: "Egg Charges Extra",
  },
  Tuesday: {
    breakfast: ["Idly, Sambar, Chutney", "Masala Vada"],
    lunch: [
      "Chappathi, Kurma",
      "White Rice, Karakulambu, Rasam, Poriyal, Kootu",
      "Buttermilk, Appalam, Pickle",
    ],
    dinner: ["Sambar Rice, Fryums"],
    supper: ["Curd Rice, Pickle"],
  },
  Wednesday: {
    breakfast: ["Dosa, Sambar, Chutney", "Urad Vada"],
    lunch: [
      "Chappathi, Kurma",
      "White Rice, Keerai Sambar, Rasam, Poriyal, Kootu",
      "Buttermilk, Appalam, Pickle",
    ],
    dinner: ["Egg Curry (Optional)", "Roti, Kurma"],
    supper: ["Idly, Sambar, Chutney"],
  },
  Thursday: {
    breakfast: ["Poori, Potato Masala"],
    lunch: [
      "Chappathi, Kurma",
      "White Rice, Vathal Kulambu, Rasam, Poriyal, Kootu",
      "Buttermilk, Appalam, Pickle",
    ],
    dinner: ["Dosa, Sambar, Chutney"],
    supper: ["Idly, Sambar, Chutney"],
  },
  Friday: {
    breakfast: ["Idly, Sambar, Chutney", "Urad Vada"],
    lunch: [
      "Chappathi, Kurma",
      "Variety Rice / White Rice, Rasam, Poriyal",
      "Buttermilk, Appalam, Pickle, Sweet",
    ],
    dinner: ["Pongal, Sambar, Chutney"],
    supper: ["Dosa, Sambar, Chutney"],
  },
  Saturday: {
    breakfast: ["Dosa, Sambar, Chutney", "Masala Vada"],
    lunch: [
      "Chappathi, Kurma",
      "White Rice, Sambar, Rasam, Poriyal, Kootu",
      "Buttermilk, Appalam, Pickle",
    ],
    dinner: ["Idly, Sambar, Chutney"],
    supper: ["Rava Kichadi, Sambar, Chutney"],
  },
};

const masterMenu = {
  Kurma: [
    "Veg Kurma",
    "White Channa Kurma",
    "Mix Veg Kurma",
    "Potato Kurma",
    "Cauliflower Kurma",
  ],
  Poriyal: ["Cabbage", "Carrot", "Beetroot", "Potato", "Raw Banana", "Mix Veg"],
  Kootu: ["Bottle Gourd", "Snake Gourd", "Chow Chow", "Keerai"],
  VarietyRice: ["Tomato Rice", "Veg Biryani", "Lemon Rice", "Tamarind Rice"],
  Chutney: [
    "Tomato Chutney",
    "Mint Chutney",
    "Coriander Chutney",
    "Coconut Chutney",
  ],
};

const iconMap = {
  Breakfast: <FaCoffee className="text-4xl text-[#9A6735]" />,
  Lunch: <FaUtensils className="text-4xl text-[#55883B]" />,
  Dinner: <FaPizzaSlice className="text-4xl text-[#9A6735]" />,
  Supper: <FaMoon className="text-4xl text-[#55883B]" />,
};

const Menu = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleDownload = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      const link = document.createElement("a");
      link.href = "/L'UnicoKitchenMenu.pdf.pdf";
      link.download = "LUnicoKitchenMenu.pdf";
      link.click();
    }, 2000);
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#E6F0DC] via-[#C1E899] to-[#55883B]/30 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#9A6735] to-[#55883B] mb-10 tracking-wide"
          data-aos="fade-down"
        >
         Our Weekly Menu
        </h1>

        {/* Day Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-10">
          {Object.keys(menuData).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 sm:px-7 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md ${
                selectedDay === day
                  ? "bg-gradient-to-r from-[#55883B] to-[#9A6735] text-white"
                  : "bg-white text-[#55883B] border border-[#C1E899] hover:bg-gradient-to-r hover:from-[#9A6735] hover:to-[#55883B] hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Menu Card */}
        <div
          data-aos="zoom-in"
          className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl border border-[#C1E899]/70 p-8 sm:p-10 max-w-5xl mx-auto transition-all duration-500 hover:shadow-[0_0_35px_rgba(154,103,53,0.4)]"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#9A6735] mb-8">
            {selectedDay}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MealSection title="Breakfast" icon={iconMap.Breakfast} items={menuData[selectedDay].breakfast} />
            <MealSection title="Lunch" icon={iconMap.Lunch} items={menuData[selectedDay].lunch} />
            <MealSection title="Dinner" icon={iconMap.Dinner} items={menuData[selectedDay].dinner} />
            <MealSection title="Supper" icon={iconMap.Supper} items={menuData[selectedDay].supper} />
          </div>

          {menuData[selectedDay].extra && (
            <p className="text-sm italic text-red-700 mt-6 text-center">
              {menuData[selectedDay].extra}
            </p>
          )}
        </div>

        {/* Master Menu */}
        <div
          className="mt-20 bg-gradient-to-r from-[#E6F0DC] via-[#C1E899] to-[#E6F0DC] p-10 rounded-3xl shadow-lg text-left border border-[#9A6735]/20"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#9A6735] to-[#55883B]">
            Master Menu
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(masterMenu).map(([category, items]) => (
              <div
                key={category}
                className="bg-white/70 rounded-2xl p-6 border border-[#C1E899]/50 shadow-md hover:shadow-[0_0_25px_rgba(85,136,59,0.3)] transition-all"
              >
                <h3 className="text-xl font-semibold text-[#9A6735] mb-3">
                  {category}
                </h3>
                <div className="text-[#333333] space-y-1 text-sm sm:text-base">
                  {items.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-12" data-aos="fade-up">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9A6735] to-[#55883B] text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-transform duration-300"
          >
            <FaDownload />
            Download Full Menu
          </button>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
            <div className="bg-white px-8 py-6 rounded-2xl shadow-xl text-center animate-pulse">
              <h3 className="text-xl font-semibold text-[#55883B] mb-2">
                Preparing your download...
              </h3>
              <p className="text-[#9A6735]">Your menu will download shortly!</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Meal Section with Icon (No Bullets)
const MealSection = ({ title, items, icon }) => (
  <div
    className="bg-white rounded-2xl p-6 border border-[#C1E899]/60 shadow-md hover:shadow-[0_0_25px_rgba(154,103,53,0.3)] transition-all duration-500 group"
    data-aos="fade-up"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-3 rounded-full bg-gradient-to-br from-[#E6F0DC] via-[#C1E899] to-[#55883B]/30 group-hover:from-[#9A6735]/30 group-hover:to-[#55883B]/60 transition-all duration-500">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-[#55883B]">{title}</h4>
    </div>
    <div className="text-[#333333] space-y-1 text-sm sm:text-base">
      {items.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  </div>
);

export default Menu;
