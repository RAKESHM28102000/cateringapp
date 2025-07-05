import React from 'react';

const Works = () => {
  const events = [
    { title: "Wedding Catering", location: "Chennai", year: "2023", desc: "Traditional South Indian feast for 1000+ guests." },
    { title: "Corporate Event", location: "Infosys, Bangalore", year: "2024", desc: "Formal buffet service with live counters." },
    { title: "Birthday Party", location: "Coimbatore", year: "2025", desc: "Fun-themed catering with desserts and snacks." },
    { title: "Engagement Ceremony", location: "Hyderabad", year: "2023", desc: "Elegant sit-down service with curated menu." },
    { title: "Food Festival", location: "Pondicherry", year: "2024", desc: "Multi-cuisine stalls serving 5000+ visitors." },
    { title: "College Fest", location: "IIT Madras", year: "2023", desc: "Quick-serve meals for students and faculty." },
    { title: "NGO Fundraiser", location: "Chennai", year: "2024", desc: "Healthy vegetarian meals for charity event." },
    { title: "Destination Wedding", location: "Ooty", year: "2023", desc: "Mountain-view buffet with personalized setup." },
    { title: "Product Launch", location: "Tidel Park", year: "2025", desc: "Premium canapé service and mocktail bar." }
  ];

  return (
    <section
      className="pt-24 pb-16 px-4 sm:px-6 md:px-10 bg-[#FFF8E1] min-h-screen"
      id="works"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#FF6F00] mb-12"
          data-aos="fade-up"
        >
          Our Past Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-[#FF6F00] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#8B0000] mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-[#555555] mb-2">
                📍 {event.location} • 📅 {event.year}
              </p>
              <p className="text-[#333333] text-sm sm:text-base leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
