import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Sample clients data
const clients = [
  {
    name: "TechCorp",
    type: "Corporate",
    logo: "/assets/client1.jpg",
    testimonial:
      "L’UNICO Kitchen transformed our corporate event with impeccable service and delicious South Indian cuisine.",
  },
  {
    name: "Priya Weddings",
    type: "Wedding Planner",
    logo: "/assets/client2.jpg",
    testimonial:
      "The wedding catering was flawless! Guests loved the flavors and presentation. A truly professional team.",
  },
  {
    name: "Pondicherry Food Festival",
    type: "Event",
    logo: "/assets/client5.jpg",
    testimonial:
      "Multi-cuisine stalls handled perfectly. Guests were thrilled with the quality and service.",
  },
  {
    name: "NGO Foodies",
    type: "NGO",
    logo: "/assets/client4.jpg",
    testimonial:
      "Healthy and delicious meals for our fundraiser. They managed everything smoothly and professionally.",
  },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#55883B] mb-8 sm:mb-12"
          data-aos="fade-down"
        >
          Our Esteemed Clients
        </h1>
        <p
          className="text-[#333333] text-sm sm:text-base mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          We proudly serve a wide range of clients across corporate events, weddings,
          festivals, and community initiatives. Our commitment to quality, freshness,
          and authentic flavors keeps our clients coming back.
        </p>

        {/* Client Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {clients.map((client, idx) => (
            <div
              key={client.name}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center transition-all hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-3 sm:mb-4 border-4 border-[#C1E899]"
              />
              <h3 className="text-sm sm:text-lg font-semibold text-[#9A6735]">{client.name}</h3>
              <p className="text-xs sm:text-sm text-[#55883B]/90">{client.type}</p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {clients.map((client, idx) => (
            <div
              key={client.name + "-testimonial"}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-xl border-l-4 border-[#C1E899] transition-transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#9A6735] mb-2">
                {client.name}
              </h3>
              <p className="text-sm sm:text-base text-[#333333] italic">
                "{client.testimonial}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-12 sm:mt-16 bg-[#55883B] text-white p-6 sm:p-8 rounded-2xl shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Want to become our next satisfied client?
          </h3>
          <p className="text-sm sm:text-base mb-4 sm:mb-6">
            Book your event catering today and let us serve happiness through every meal.
          </p>
          <a
            href="/contact"
            className="bg-[#C1E899] text-[#55883B] font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#9A6735] hover:text-white transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
