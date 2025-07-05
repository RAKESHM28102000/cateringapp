import React from 'react';
import servicesData from '../data/servicesData';

const Services = () => {
  return (
    <section
      className="pt-24 pb-16 px-4 sm:px-6 md:px-10 bg-[#FFF8E1] min-h-screen"
      data-aos="fade"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#FF6F00] mb-12"
          data-aos="fade-down"
        >
          Our Services
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-[#FF6F00]/30"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#8B0000] mb-2">
                  {service.title}
                </h2>
                <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
