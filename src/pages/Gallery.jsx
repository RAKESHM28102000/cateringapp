import React from 'react';
import 'aos/dist/aos.css';

const images = [
  { title: 'Traditional Wedding Setup', src: '/images/serving-image.jpg' },
  { title: 'Corporate Buffet', src: '/images/group-image.jpg' },
  { title: 'Birthday Special', src: '/images/Catering1.jpg' },
  { title: 'Engagement Feast', src: '/images/4116159.jpg' },
  { title: 'Festival Counter', src: '/images/group-image.jpg' },
  { title: 'Chef at Work', src: '/images/serving-image.jpg' },
  { title: 'Elegant Dining', src: '/images/serving-image.jpg' },
  { title: 'Mocktail Bar', src: '/images/serving-image.jpg' },
  { title: 'Live Counter', src: '/images/serving-image.jpg' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#FFF8E1] min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center text-[#FF6F00] mb-12"
          data-aos="fade-down"
        >
          Our Gallery
        </h2>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 group-hover:blur-sm transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#333333]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-md rounded-2xl">
                <h4 className="text-[#FF6F00] text-lg font-semibold text-center px-2">
                  {item.title}
                </h4>
              </div>

              {/* Glass Card Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#8B0000]/80 text-[#FFF8E1] py-2 px-3 backdrop-blur-md rounded-b-2xl text-sm text-center">
                Tap to View More
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
