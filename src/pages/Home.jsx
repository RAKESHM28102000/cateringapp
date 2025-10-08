import React from "react";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import servicesData from "../data/servicesData";
import Testimonials from "./Testimonials";
import Blog from "./Blogs";
export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-24 px-4 sm:px-6 pb-20 bg-cover bg-center min-h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url('./assets/hero-catering.jpg')` }}
        data-aos="fade"
      >
        <div className="w-full max-w-5xl mx-auto text-center p-6 sm:p-10 rounded-2xl shadow-lg bg-[black]/90">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-aos="zoom-in"
          >
            L’UNICO Kitchen
          </h1>
          <p
            className="text-xl sm:text-3xl text-[#E6F0DC] mb-4 font-semibold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            data-aos="fade-up"
          >
            Corporate Catering Services
          </p>
          <p
            className="text-md sm:text-lg md:text-xl text-[#E6F0DC]/90 mb-8 font-medium max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Serving excellence since September 2023 — We redefine corporate dining with quality, creativity,
            and impeccable service for offices, conferences, and corporate events.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-6 mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="/contact"
              className="bg-[#55883B] hover:bg-[#9A6735] text-white px-10 py-4 rounded-full font-bold transition duration-300 shadow-lg hover:scale-105"
            >
              Book a Tasting
            </a>
            <a
              href="/menu"
              className="border-2 border-[#C1E899] text-[#C1E899] hover:bg-[#C1E899] hover:text-[#9A6735] px-10 py-4 rounded-full font-bold transition duration-300 shadow hover:scale-105"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 bg-[#E6F0DC]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#55883B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why Choose L’UNICO Kitchen?
          </h2>
          <div className="grid gap-10 md:grid-cols-3 text-left">
            {[
              {
                title: "Corporate Expertise",
                desc: "Specialized in corporate catering, delivering fresh, balanced meals for professionals and events.",
              },
              {
                title: "Reliable Service",
                desc: "Punctual delivery and seamless event management for meetings, conferences, and office gatherings.",
              },
              {
                title: "Eco-Friendly Approach",
                desc: "Committed to sustainable practices with locally sourced ingredients and minimal waste.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition bg-white border border-[#C1E899]/50"
                data-aos="flip-left"
                data-aos-delay={idx * 150}
              >
                <h3
                  className="text-2xl font-bold text-[#9A6735] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#333333] text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="pt-24 pb-20 px-4 sm:px-6 md:px-10 bg-[#E6F0DC]"
        data-aos="fade"
        id="services"
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-[#55883B] mb-14"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-aos="fade-down"
          >
            Our Corporate Menus
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-[#C1E899]/50"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="p-6 sm:p-8">
                  <h2
                    className="text-xl sm:text-2xl font-bold text-[#9A6735] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-[#333333] text-base sm:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Gallery />
      <Blog/>
      <Testimonials/>
      <Contact />
    </>
  );
};

export default Home;
