import React, { useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers, FaProjectDiagram, FaClock, FaUserTie } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: <FaProjectDiagram className="text-4xl mb-3 text-[#55883B]" />, number: 10000, text: "Servings Daily" },
    { icon: <FaUsers className="text-4xl mb-3 text-[#55883B]" />, number: 105, text: "Happy Corporate Clients" },
    { icon: <FaUserTie className="text-4xl mb-3 text-[#55883B]" />, number: 79, text: "Team Members" },
    { icon: <FaClock className="text-4xl mb-3 text-[#55883B]" />, number: 730, text: "Operational Days/Year" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#E6F0DC] via-[#f7faef] to-[#E6F0DC] w-full py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden transition-colors duration-500">

      {/* ------------------- FIRST SECTION ------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="text-[#333333]" data-aos="fade-right">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-[#55883B] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About L’unico Kitchen
          </h2>
          <p
            className="text-lg sm:text-xl mb-6 leading-relaxed font-medium"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <b>L’Unico Kitchen – The Taste of Heaven</b> is a premier corporate catering service based in Chennai,
            delivering <b>hygienic, nutritious, and home-style meals</b> to large-scale industrial and corporate clients.
          </p>
          <p
            className="text-base sm:text-lg text-[#333333] mb-8"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Operating for over two years, we provide <b>over 10,000 servings daily</b> across six meal sessions —
            from breakfast to midnight snacks — ensuring wholesome meals all day long.  
            Our clients include <b>B. Braun Medical Pvt. Ltd</b>, <b>Musashi Paint India Pvt. Ltd</b>,
            <b> Netafim Irrigation India Pvt. Ltd</b>, and <b>Mahindra City Developers Ltd</b>.
          </p>

          {/* GST Info */}
          <div
            className="bg-gradient-to-r from-[#C1E899]/60 to-[#C1E899]/40 border border-[#C1E899] text-[#333333] px-6 py-4 rounded-2xl shadow-lg mb-8 font-medium"
            data-aos="fade-up"
          >
            <p>
              <b>Licenses & Certifications:</b> FSSAI | Fire Safety | MSME | GST  
              <br />
              <span className="text-[#55883B] font-semibold">GST No: 33ATRPJ9613N1Z1</span>
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Homestyle Taste", text: "Authentic, comforting meals that make you feel at home." },
              { title: "Corporate Expertise", text: "Seamless catering solutions for large-scale operations." },
              { title: "Trusted by Leaders", text: "Serving top brands with consistency and reliability." },
              { title: "Licensed & Certified", text: "FSSAI, Fire Safety, MSME, and GST registered." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-[#C1E899]/50 shadow-md hover:bg-gradient-to-r hover:from-[#55883B] hover:to-[#9A6735] hover:text-white transition duration-500"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h4
                  className="text-xl font-bold mb-2 text-[#9A6735] hover:text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enlarged Image */}
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src="/images/catering-about.jpg"
            alt="Corporate Catering Team"
            className="rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl border-4 border-[#C1E899] object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* ------------------- MISSION & VISION ------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32" data-aos="fade-up">
        {[
          {
            title: "Our Mission",
            text: "To provide quality food at an affordable rate with homestyle taste — consistently scaling up the standard of providing homestyle food into corporate and industrial catering services.",
            icon: "🎯",
          },
          {
            title: "Our Vision",
            text: "With the quality and homely taste that we provide, we aim to make every customer feel at home, even at work during their meal time.",
            icon: "🌟",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white border border-[#C1E899]/60 rounded-3xl shadow-md p-8 text-center hover:bg-gradient-to-r hover:from-[#55883B] hover:to-[#9A6735] hover:text-[#E6F0DC] transition duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="text-5xl mb-4 text-green-600">{card.icon}</div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {card.title}
            </h3>
            <p className="text-lg leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

      {/* ------------------- STATS SECTION ------------------- */}
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-32">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#C1E899]/50 rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:bg-gradient-to-r hover:from-[#55883B] hover:to-[#9A6735] hover:text-white transition duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {item.icon}
            <h4 className="text-4xl font-extrabold mb-2">
              {inView && <CountUp end={item.number} duration={3} />}+
            </h4>
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      {/* ------------------- OUR STRENGTH ------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32" data-aos="fade-up">
        <div className="flex justify-center">
          <img
            src="/assets/festival-image.jpg"
            alt="Our Strength"
            className="rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl border-4 border-[#C1E899] object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="space-y-6">
          <h3
            className="text-3xl font-bold text-[#55883B]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Strength
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-[#333333] text-lg">
            <li>High-quality, fresh ingredients for every meal</li>
            <li>Experienced culinary and event management team</li>
            <li>Customizable menu options for diverse clients</li>
            <li>Strict hygiene and food safety standards</li>
            <li>Licensed under FSSAI, Fire Safety, MSME, and GST</li>
          </ul>
        </div>
      </div>

      {/* ------------------- MARQUEE ------------------- */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div className="whitespace-nowrap animate-marquee my-4 py-4 px-4 bg-gradient-to-r from-[#55883B] to-[#9A6735] rounded-full text-[#E6F0DC] font-bold text-xl sm:text-2xl text-center shadow-lg">
          Book your corporate catering now! Exceptional taste & service guaranteed!
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
