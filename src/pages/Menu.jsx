import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import AOS from "aos";
import "aos/dist/aos.css";

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#55883B] mb-12"
          data-aos="fade-down"
        >
          Explore Our Menu
        </h1>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(menuData).map(([key, category], idx) => (
            <Link
              key={key}
              to={`/menu/${key}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#C1E899]/50 hover:-translate-y-2 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#9A6735] mb-2">
                  {category.title}
                </h2>
                <p className="text-[#333333] text-sm sm:text-base">
                  {category.description.slice(0, 90)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional Call to Action */}
        <div
          className="mt-16 bg-[#55883B] text-white p-8 rounded-2xl text-center shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Taste Authentic Tamil Nadu Flavors!
          </h3>
          <p className="mb-6 text-[#E6F0DC]">
            Book your corporate catering today and delight your guests with our specially curated menu.
          </p>
          <Link
            to="/contact"
            className="bg-[#C1E899] text-[#55883B] font-bold px-8 py-3 rounded-full hover:bg-[#9A6735] hover:text-white transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
