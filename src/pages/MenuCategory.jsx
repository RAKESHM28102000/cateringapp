import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import menuData from "../data/menuData";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const data = menuData[category];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="pt-32 text-center text-2xl text-[#9A6735] font-semibold">
        Menu not found 😢
      </div>
    );
  }

  return (
    <section className="pt-32 pb-16 px-4 sm:px-8 bg-[#E6F0DC] min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        {/* Back Button */}
        <button
          onClick={() => navigate("/menu")}
          className="mb-6 px-6 py-2 rounded-full bg-[#C1E899] text-[#55883B] font-semibold hover:bg-[#9A6735] hover:text-white transition duration-300 shadow"
        >
          ← Back to Menu
        </button>

        {/* Category Title & Description */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-[#55883B] mb-4"
          data-aos="fade-down"
        >
          {data.title}
        </h1>
        <p
          className="text-[#333333] text-base sm:text-lg mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          {data.description}
        </p>

        {/* Category Image */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full max-h-[400px] object-cover rounded-2xl shadow-md mb-12"
          data-aos="zoom-in"
        />

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.dishes.map((dish, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-[#C1E899]/50 transition-all hover:-translate-y-2"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#9A6735]">
                  {dish.name}
                </h3>
                <p className="text-[#333333] text-sm mt-1">{dish.description}</p>
                <p className="text-[#55883B] font-semibold mt-2">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
