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
    { icon: <FaProjectDiagram className="text-4xl mb-3 text-[#55883B]" />, number: 14, text: "Projects Worked" },
    { icon: <FaUsers className="text-4xl mb-3 text-[#55883B]" />, number: 102, text: "Happy Clients" },
    { icon: <FaUserTie className="text-4xl mb-3 text-[#55883B]" />, number:79, text: "Team Members" },
    { icon: <FaClock className="text-4xl mb-3 text-[#55883B]" />, number:1008, text: "Hours Of Work" },
  ];

  return (
    <section className="bg-[#E6F0DC] w-full py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden">

      {/* ------------------- FIRST SECTION ------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="text-[#333333]" data-aos="fade-right">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-[#55883B] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            About L’UNICO Kitchen
          </h2>
          <p className="text-lg sm:text-xl mb-6 leading-relaxed font-medium" data-aos="fade-right" data-aos-delay="100">
            Founded in <b>September 2023</b>, <b>L’UNICO Kitchen</b> has quickly become a trusted name in
            <b> corporate catering</b>. We deliver nutritious, delicious, and visually stunning meals for offices,
            conferences, and corporate events.
          </p>
          <p className="text-base sm:text-lg text-[#333333] mb-8" data-aos="fade-right" data-aos-delay="150">
            Our mission is simple — to serve freshness, maintain hygiene, and provide impeccable service every single
            time. With a team of skilled chefs and event professionals, we ensure every corporate meal feels special and
            energizing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Corporate Specialists", text: "Dedicated to professional dining solutions." },
              { title: "Experienced Chefs", text: "Crafting gourmet meals with precision." },
              { title: "Quality Assured", text: "Every dish meets the highest standards." },
              { title: "Timely Service", text: "Always on schedule for your corporate needs." },
            ].map((item, index) => (
              <div key={index}
                   className="bg-white p-6 rounded-2xl border border-[#C1E899]/50 shadow hover:bg-[#55883B] hover:text-white transition duration-300"
                   data-aos="zoom-in" data-aos-delay={index * 100}>
                <h4 className="text-xl font-bold mb-2 text-[#9A6735]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h4>
                <p className="text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center" data-aos="fade-left">
          <img src="/assets/group-image.jpg" alt="Corporate Catering Team"
               className="rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg border-4 border-[#C1E899] object-cover" />
        </div>
      </div>

      {/* ------------------- SECOND SECTION (Mission & Vision) ------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32" data-aos="fade-up">
        {[
          {
            title: "Our Mission",
            text: "To craft delightful, healthy meals and create exceptional corporate dining experiences that inspire productivity and satisfaction.",
            icon: "🎯",
          },
          {
            title: "Our Vision",
            text: "To be South India’s most preferred corporate catering brand — recognized for taste, trust, and transformative service.",
            icon: "🌟",
          },
        ].map((card, index) => (
          <div key={index}
               className="bg-white border border-[#C1E899]/60 rounded-3xl shadow-md p-8 text-center hover:bg-[#55883B] hover:text-[#E6F0DC] transition duration-500"
               data-aos="zoom-in" data-aos-delay={index * 200}>
            <div className="text-5xl mb-4 text-green-600">{card.icon}</div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
            <p className="text-lg leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

      {/* ------------------- THIRD SECTION (Dynamic Stats) ------------------- */}
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-32">
        {stats.map((item, index) => (
          <div key={index}
               className="bg-white border border-[#C1E899]/50 rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:bg-[#55883B] hover:text-white transition duration-500"
               data-aos="fade-up" data-aos-delay={index * 150}>
            {item.icon}
            <h4 className="text-4xl font-extrabold mb-2">
              {inView && <CountUp end={item.number} duration={3} />}+
            </h4>
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>

      {/* ------------------- FOURTH SECTION (Our Strength) ------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32" data-aos="fade-up">
        {/* Image */}
        <div className="flex justify-center">
          <img src="/assets/dining.jpg" alt="Our Strength"
               className="rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg border-4 border-[#C1E899] object-cover" />
        </div>

        {/* Content Points */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-[#55883B]" style={{ fontFamily: "'Playfair Display', serif" }}>Our Strength</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#333333] text-lg">
            <li>High-quality fresh ingredients for all meals</li>
            <li>Experienced culinary and event management team</li>
            <li>Customizable menu options for every client</li>
            <li>Strict hygiene and food safety standards</li>
          </ul>
        </div>
      </div>

      {/* ------------------- FIFTH SECTION (Founder Details) ------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32" data-aos="fade-up">
        {/* Content */}
        <div className="space-y-6 order-2 md:order-1">
          <h3 className="text-3xl font-bold text-[#55883B]" style={{ fontFamily: "'Playfair Display', serif" }}>Founder</h3>
          <p className="text-lg text-[#333333] leading-relaxed">
            John Doe, our founder, has a passion for culinary excellence and corporate hospitality. With over 15 years in the food industry, he ensures that every catering experience is memorable and delightful.
          </p>
          <p className="text-lg text-[#333333] leading-relaxed">
            His vision drives the company’s mission to deliver top-notch meals with hygiene, flavor, and reliability.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <img src="/assets/dinning-2.jpg" alt="Founder"
               className="rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg border-4 border-[#C1E899] object-cover" />
        </div>
      </div>

      {/* ------------------- MARQUEE ------------------- */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div className="whitespace-nowrap animate-marquee my-4 ring-2 ring-pink-500 py-4 px-4 bg-[#55883B] rounded-full text-[#E6F0DC] font-bold text-xl sm:text-2xl text-center">
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
