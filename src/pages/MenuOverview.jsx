import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuOverview = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <section className="pt-32 pb-16 px-4 sm:px-8 bg-[#E6F0DC] min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#55883B] mb-12" data-aos="fade-down">
          Our Menus
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(menuData).map(([key, menu], index) => (
            <Link
              key={key}
              to={`/menu/${key}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#C1E899]/60 hover:-translate-y-2 transition-transform duration-300"
            >
              <img src={menu.image} alt={menu.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#9A6735] mb-2">{menu.title}</h2>
                <p className="text-[#333333] text-sm sm:text-base">{menu.description.slice(0, 90)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuOverview;
