import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Ravi Kumar",
    designation: "CEO, TechCorp",
    image: "/assets/buffet-image-1.jpg",
    feedback:
      "L’UNICO Kitchen transformed our corporate event with impeccable service and delicious South Indian cuisine. Highly recommend!",
  },
  {
    name: "Priya Sharma",
    designation: "Wedding Planner",
    image: "/assets/buffet-image-2.jpg",
    feedback:
      "The wedding catering was flawless! Guests loved the flavors and presentation. A truly professional team.",
  },
  {
    name: "Arjun Reddy",
    designation: "Event Manager, Hyderabad",
    image: "/assets/buffet-image-3.jpg",
    feedback:
      "Amazing attention to detail and timely service. Their live counters made our engagement party unforgettable.",
  },
  {
    name: "Sneha Iyer",
    designation: "Founder, NGO Foodies",
    image: "/assets/buffet-image.jpg",
    feedback:
      "Healthy and delicious meals for our fundraiser. They managed everything smoothly and professionally.",
  },
  {
    name: "Karthik V",
    designation: "Director, Pondicherry Food Festival",
    image: "/assets/buffet-image-1.jpg",
    feedback:
      "Multi-cuisine stalls handled perfectly. Guests were thrilled with the quality and service.",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="testimonials"
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#55883B] mb-12"
          data-aos="fade-down"
        >
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl border border-[#C1E899]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3 sm:mb-4 border-4 border-[#C1E899] transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#9A6735]">{item.name}</h3>
              <p className="text-xs sm:text-sm text-[#55883B]/90 mb-3">{item.designation}</p>
              <p className="text-sm sm:text-base text-[#333333] italic">
                “{item.feedback}”
              </p>
              <div className="w-12 h-1 bg-[#C1E899] mt-3 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Scrolling Text */}
        <div className="relative mt-12 overflow-hidden border-t border-[#C1E899]/60 py-4">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-[#9A6735] font-semibold text-base sm:text-lg tracking-wide">
              ✨ Serving happiness one meal at a time — Corporate Events • Weddings • Parties • Festivals ✨
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
