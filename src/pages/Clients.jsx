import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Factory, Landmark, Briefcase } from "lucide-react";
import { NavLink } from "react-router-dom";

const clients = [
  {
    name: "B. Braun Medical Pvt. Ltd",
    type: "Corporate Client",
    icon: <Factory className="w-10 h-10 sm:w-12 sm:h-12 text-[#9A6735]" />,
    feedback:"On behalf of BBraun, thank you very much for making the special Diwali food arrangements like a feast. All the employees were thoroughly satisfied, and the food was excellent, with no compromise on quality and service.You’ve truly made this Diwali memorable for all the BBraun Chennai plant employees by providing the required menu in a grand feast. This is the first time we’ve provided this type of meal option, and we received very positive feedback from everyone.",
    person: "Amarnath PK, Human Resources Business Partner – BBraun",
  },
  {
    name: "Netafim Irrigation India Pvt. Ltd",
    type: "Corporate Client",
    icon: <Landmark className="w-10 h-10 sm:w-12 sm:h-12 text-[#9A6735]" />,
    feedback:
      "From the quality of the products to the timelines of delivery, you have consistently exceeded our expectations.",
    person: "Kanimozhi Manogaran, HR – Orbia Precision Agriculture (Netafim)",
  },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#55883B] mb-6 sm:mb-10 transition-colors duration-300 hover:text-[#9A6735]"
          data-aos="fade-down"
        >
          Our Esteemed Clients
        </h1>
        <p
          className="text-[#333333] text-base sm:text-lg max-w-3xl mx-auto mb-12"
          data-aos="fade-up"
        >
          We proudly serve some of the most reputed corporate and industrial clients in
          Chennai, offering hygienic, nutritious, and homestyle meals every day.
        </p>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 mb-16">
          {clients.map((client, idx) => (
            <div
              key={client.name}
              className="bg-gradient-to-br from-[#ffffff] via-[#F3F8ED] to-[#EAF4DE] p-6 sm:p-8 rounded-2xl shadow-md border border-[#C1E899]/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={idx * 120}
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-4">{client.icon}</div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#9A6735] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {client.name}
                </h3>
                <p className="text-sm sm:text-base text-[#55883B] font-medium mb-4">
                  {client.type}
                </p>
                <p className="text-[#333333] italic text-sm sm:text-base leading-relaxed mb-3">
                  “{client.feedback}”
                </p>
                <p className="text-xs sm:text-sm text-[#9A6735]/80 font-semibold">
                  — {client.person}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div
          className="mt-10 bg-gradient-to-r from-[#55883B] via-[#6f8f47] to-[#9A6735] text-white p-8 sm:p-10 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
          data-aos="fade-up"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want to become our next satisfied client?
          </h3>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Experience premium catering services with a homely touch. Reach out to us today
            and make your corporate meals truly special.
          </p>
          <NavLink
            to="/contact"
            className="inline-block bg-[#C1E899] text-[#55883B] font-bold px-8 py-3 sm:px-10 sm:py-4 rounded-full shadow-md hover:bg-white hover:text-[#9A6735] transition duration-300 ease-in-out"
          >
            Contact Us
          </NavLink>
         
        </div>
      </div>
    </section>
  );
};

export default Clients;
