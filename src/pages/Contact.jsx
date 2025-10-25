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
        'service_h6eng78',       // replace with your EmailJS service ID
        'template_c56l5np',      // replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'RV5UEeN1IX6VKRKTl'      // replace with your public key
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
      className="pt-24 pb-20 px-4 sm:px-6 lg:px-12 bg-[#E6F0DC] min-h-screen"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Contact Form */}
        <div data-aos="fade-right" className="bg-white p-8 rounded-2xl shadow-lg border border-[#C1E899]">
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
                status.includes('successfully') ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'
              }`}
            >
              {status}
            </p>
          )}
        </div>

        {/* Google Map */}
        <div data-aos="fade-left" className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-[#C1E899]">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.410348237823!2d77.50006607540484!3d12.835149790907062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad60b8d33d0e27%3A0x3a0a64b9e6d2f5a3!2sChengalpattu%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1696684500000!5m2!1sen!2sin"
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
