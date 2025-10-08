import React from "react";

const About = () => {
  return (
    <section className="bg-[#E6F0DC] w-full py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className="text-[#333333]">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-[#55883B] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            data-aos="fade-right"
          >
            About L’UNICO Kitchen
          </h2>
          <p
            className="text-lg sm:text-xl mb-6 leading-relaxed font-medium"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Founded in <b>September 2023</b>, <b>L’UNICO Kitchen</b> has quickly
            become a trusted name in <b>corporate catering</b>. We deliver
            nutritious, delicious, and visually stunning meals for offices,
            conferences, and corporate events.
          </p>
          <p
            className="text-base sm:text-lg text-[#333333] mb-8"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Our mission is simple — to serve freshness, maintain hygiene, and
            provide impeccable service every single time. With a team of
            skilled chefs and event professionals, we ensure every corporate
            meal feels special and energizing.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Corporate Specialists",
                text: "Dedicated to professional dining solutions.",
              },
              { title: "Experienced Chefs", text: "Crafting gourmet meals with precision." },
              { title: "Quality Assured", text: "Every dish meets the highest standards." },
              { title: "Timely Service", text: "Always on schedule for your corporate needs." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#C1E899]/50 shadow hover:shadow-xl transition duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold text-[#9A6735] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h4>
                <p className="text-base text-[#333333]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
        >
          <img
            src="/assets/group-image.jpg"
            alt="Corporate Catering Team"
            className="rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg border-4 border-[#C1E899] object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mt-32 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#55883B] mb-6" style={{ fontFamily: "'Playfair Display', serif" }} data-aos="fade-up">
          Our Mission
        </h3>
        <p className="text-base sm:text-lg text-[#333333] mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          To craft delightful, healthy meals and create exceptional corporate dining experiences that inspire productivity and satisfaction.
        </p>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#55883B] mb-6" style={{ fontFamily: "'Playfair Display', serif" }} data-aos="fade-up">
          Our Vision
        </h3>
        <p className="text-base sm:text-lg text-[#333333] mb-20 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          To be South India’s most preferred corporate catering brand — recognized for taste, trust, and transformative service.
        </p>
      </div>

      {/* Moving Text / Marquee */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-4 bg-[#55883B] text-[#E6F0DC] font-bold text-xl sm:text-2xl text-center">
          🍽️ Book your corporate catering now! Exceptional taste & service guaranteed! 🍽️
        </div>
      </div>

      {/* Tailwind Animation for Marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
