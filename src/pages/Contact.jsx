import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_qrlnyba', // replace with your EmailJS service ID
        'template_2cb6uim', // replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'A3T1YhQtqF8gBck65' // replace with your public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#E6F0DC] to-[#F6FAEE] min-h-screen transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Contact Form */}
        <div
          data-aos="fade-right"
          className="bg-white p-8 rounded-2xl shadow-2xl border border-[#C1E899] hover:shadow-[#C1E899]/50 transition duration-300"
        >
          <h2 className="text-4xl font-extrabold text-[#55883B] mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-[#333333] mb-6 text-center">
            Questions or bookings? Fill out the form and we'll get back to you promptly.
          </p>

          <form className="space-y-6" onSubmit={sendEmail}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-[#F0F7E6] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55883B] shadow"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-[#F0F7E6] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55883B] shadow"
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-[#F0F7E6] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55883B] shadow"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-[#F0F7E6] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#55883B] shadow resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#55883B] text-white font-semibold rounded-full shadow-lg hover:bg-[#9A6735] transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p
              className={`mt-6 text-center text-md font-medium p-3 rounded ${
                status.includes('successfully')
                  ? 'text-green-800 bg-green-100'
                  : 'text-red-800 bg-red-100'
              }`}
            >
              {status}
            </p>
          )}

          {/* Address Info */}
          <div className="mt-8 text-center text-[#333333]">
            <h3 className="font-semibold text-lg">📍 Address</h3>
            <p>Plot 5, Park View Apartments, Raj Nandhavanam,</p>
            <p>Chettipunniyam, Chengalpattu – 603 204</p>
            <p className="mt-2 font-semibold text-[#55883B]">GST No: 33ABCDEFGH1234Z1A</p>
          </div>
        </div>

        {/* Google Map */}
        <div
          data-aos="fade-left"
          className="w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#C1E899]"
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps?q=Plot+5,+Park+View+Apartments,+Raj+Nandhavanam,+Chettipunniyam,+Chengalpattu,+Tamil+Nadu+603204&output=embed"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
