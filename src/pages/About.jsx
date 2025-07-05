import React from 'react';

const About = () => {
  return (
    <section
      className="pt-24 pb-20 px-4 bg-[#FFF8E1] min-h-screen relative z-10"
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-[#333333]">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-[#FF6F00]"
              data-aos="fade-right"
            >
              Who We Are
            </h2>
            <p
              className="text-base sm:text-lg mb-4 leading-relaxed text-[#333333]"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              With over a decade of expertise in the catering industry, we blend passion and professionalism to deliver
              unforgettable culinary experiences. From grand weddings to cozy housewarmings, our service is a perfect
              recipe of flavor, hospitality, and trust.
            </p>
            <p
              className="text-sm sm:text-base text-[#333333] mb-6"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              We believe in quality, hygiene, timely service, and a personal touch. Our chefs craft every dish with care,
              using fresh, locally sourced ingredients, ensuring that every bite tells a story.
            </p>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: 'Experienced Chefs', text: 'Creative, skilled, and passionate about perfection.' },
                { title: 'Fresh Ingredients', text: 'Locally sourced, seasonal, and always fresh.' },
                { title: 'Timely Delivery', text: 'On-time every time, with flawless setup.' },
                { title: 'Custom Menus', text: 'Personalized to your theme, taste, and guests.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-[#FF6F00] shadow hover:shadow-lg transition duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <h4 className="text-lg font-semibold text-[#8B0000] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#333333]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center" data-aos="fade-left">
            <img
              src="/assets/group-image.jpg"
              alt="Catering Team"
              className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md border-4 border-[#FF6F00]"
            />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-20 text-center px-2 sm:px-4" data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#388E3C] mb-4">Our Mission</h3>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            To make every event flavorful and stress-free. Our mission is to delight customers with exquisite taste,
            beautiful presentation, and world-class hospitality.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold text-[#388E3C] mt-12 mb-4">Our Vision</h3>
          <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            To be the most trusted catering partner in South India — known for quality, reliability, and unforgettable food experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
