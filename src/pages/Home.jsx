import React from 'react';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Gallery from './Gallery';
import Services from './Services';

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-24 px-4 sm:px-6 pb-16 bg-cover bg-center min-h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: `url('./assets/hero-catering.jpg')` }}
        data-aos="fade"
      >
        <div
          className="w-full max-w-4xl mx-auto text-center bg-[#333333]/70 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-lg hover:shadow-white transition-all"
          data-aos="zoom-in"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF6F00] mb-4 sm:mb-6 leading-tight">
            Delicious Catering Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#FFF8E1] mb-3 sm:mb-4" data-aos="fade-up">
            Premium food catering for weddings, parties, and corporate events — delivering quality, taste, and unforgettable experiences.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
            From traditional South Indian feasts to elegant continental platters, we tailor our menus to match your celebration’s vibe.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <a
              href="/contact"
              className="bg-[#FF6F00] hover:bg-[#8B0000] text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:scale-105 text-center"
            >
              Book Now
            </a>
            <a
              href="/works"
              className="border-2 border-[#FF6F00] text-[#FF6F00] hover:bg-[#FF6F00] hover:text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow hover:scale-105 text-center"
            >
              View Our Works
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 bg-[#FFF8E1]" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FF6F00]">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left mt-10">
            {[
              {
                title: 'Custom Menus',
                desc: 'Tailor-made menus to suit the occasion — from weddings to intimate house parties.',
              },
              {
                title: 'Professional Chefs',
                desc: 'Experienced chefs bringing authentic flavors and creative presentation to your plate.',
              },
              {
                title: 'End-to-End Service',
                desc: 'From kitchen to cleanup, we handle everything while you enjoy the event stress-free.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg shadow hover:shadow-lg transition bg-white border border-[#FF6F00]/30"
                data-aos="flip-left"
                data-aos-delay={idx * 100}
              >
                <h3 className="text-xl font-semibold text-[#8B0000] mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-24 pb-20 px-4 bg-[#FFF8E1] min-h-screen" id="about">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="text-[#333333]">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#FF6F00]" data-aos="fade-right">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg mb-4 text-[#333333]" data-aos="fade-right" data-aos-delay="100">
                With over a decade of expertise in the catering industry, we blend passion and professionalism to deliver unforgettable culinary experiences.
              </p>
              <p className="text-sm sm:text-base text-[#333333] mb-6" data-aos="fade-right" data-aos-delay="150">
                We believe in quality, hygiene, timely service, and a personal touch. Our chefs craft every dish with care, using fresh, locally sourced ingredients, ensuring that every bite tells a story.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[
                  { title: 'Experienced Chefs', text: 'Creative, skilled, and passionate about perfection.' },
                  { title: 'Fresh Ingredients', text: 'Locally sourced, seasonal, and always fresh.' },
                  { title: 'Timely Delivery', text: 'On-time every time, with flawless setup.' },
                  { title: 'Custom Menus', text: 'Personalized to your theme, taste, and guests.' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-[#FF6F00]/30 shadow hover:shadow-md transition duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#333333]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center" data-aos="fade-left">
              <img
                src="/assets/group-image.jpg"
                alt="Catering Team"
                className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="mt-20 text-center px-2 sm:px-4" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#8B0000] mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
              To make every event flavorful and stress-free. Our mission is to delight customers with exquisite taste, beautiful presentation, and world-class hospitality.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#8B0000] mt-12 mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
              To be the most trusted catering partner in South India — known for quality, reliability, and unforgettable food experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
