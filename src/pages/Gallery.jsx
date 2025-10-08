import React from "react";
import 'aos/dist/aos.css';

const images = [
  { title: 'Traditional Wedding Setup', src: '/images/serving-image.jpg', size: 'large' },
  { title: 'Corporate Buffet', src: '/images/group-image.jpg', size: 'small' },
  { title: 'Birthday Special', src: '/images/Catering1.jpg', size: 'medium' },
  { title: 'Engagement Feast', src: '/images/4116159.jpg', size: 'small' },
  { title: 'Festival Counter', src: '/images/group-image.jpg', size: 'medium' },
  { title: 'Chef at Work', src: '/images/serving-image.jpg', size: 'large' },
  { title: 'Elegant Dining', src: '/images/serving-image.jpg', size: 'small' },
  { title: 'Mocktail Bar', src: '/images/serving-image.jpg', size: 'medium' },
  { title: 'Live Counter', src: '/images/serving-image.jpg', size: 'large' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[#55883B] mb-12"
          data-aos="fade-down"
        >
          Our Gallery
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((item, index) => (
            <div
              key={index}
              className={`relative w-full mb-4 group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 
              ${item.size === 'large' ? 'break-inside-avoid' : 'break-inside-avoid'} `}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`w-full object-cover rounded-2xl transform transition duration-500 group-hover:scale-110
                ${item.size === 'large' ? 'h-96 sm:h-[28rem]' : item.size === 'medium' ? 'h-72 sm:h-80' : 'h-52 sm:h-64'}`}
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-[#333333]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl">
                <h4 className="text-[#55883B] text-lg font-semibold text-center px-2">
                  {item.title}
                </h4>
              </div>

              {/* Glass Footer */}
              <div className="absolute bottom-2 left-2 right-2 bg-[#9A6735]/70 text-[#E6F0DC] py-1 px-3 backdrop-blur-md rounded-lg text-sm text-center">
                Tap to View More
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add small animation at bottom */}
      <div className="mt-12 text-center">
        <p className="text-[#55883B] font-bold text-lg sm:text-xl animate-pulse">
          Explore Our Culinary Moments! 🍽️
        </p>
      </div>
    </section>
  );
}
