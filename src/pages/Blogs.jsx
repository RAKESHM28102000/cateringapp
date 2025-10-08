import React from 'react';
import 'aos/dist/aos.css';

const blogs = [
  {
    title: 'Top 5 Corporate Catering Tips',
    date: 'Oct 1, 2025',
    excerpt:
      'Discover how to make your corporate events memorable with fresh meals, presentation tips, and timely service.',
    image: '/assets/buffet-image-1.jpg',
  },
  {
    title: 'Healthy Menu Ideas for Office Events',
    date: 'Sep 20, 2025',
    excerpt:
      'Boost productivity and morale by serving nutritious, balanced meals that delight your employees.',
    image: '/assets/buffet-image-2.jpg',
  },
  {
    title: 'Trendy Catering Presentation Techniques',
    date: 'Sep 10, 2025',
    excerpt:
      'From themed platters to interactive live counters, learn creative ways to impress your guests.',
    image:'/assets/buffet-image-3.jpg',
  },
  {
    title: 'Why Sustainability Matters in Catering',
    date: 'Aug 25, 2025',
    excerpt:
      'Eco-friendly catering practices reduce waste, support local farmers, and enhance brand reputation.',
    image:'/assets/buffet-image.jpg',
  },
];

const Blog = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#55883B] mb-12"
          data-aos="fade-down"
        >
          Our Blog
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-[#C1E899]/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#9A6735] mb-1">{blog.date}</p>
                <h2 className="text-lg sm:text-xl font-bold text-[#55883B] mb-3 group-hover:text-[#C1E899] transition duration-300">
                  {blog.title}
                </h2>
                <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <a
                  href="#"
                  className="text-[#55883B] font-semibold hover:text-[#9A6735] transition duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Call-to-Action */}
        <div
          className="mt-20 bg-[#55883B] text-white p-8 rounded-2xl text-center shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Stay Updated with Our Catering Tips!
          </h3>
          <p className="mb-6 text-[#E6F0DC]">
            Subscribe to our newsletter to receive the latest corporate catering trends, recipes, and event ideas.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-full w-full sm:w-1/3 text-[#333333] focus:outline-none"
            />
            <button className="bg-[#C1E899] text-[#55883B] font-bold px-6 py-3 rounded-full hover:bg-[#9A6735] hover:text-white transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;
