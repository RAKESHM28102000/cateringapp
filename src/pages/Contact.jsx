import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
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
      className="pt-24 px-4 sm:px-6 py-16 bg-[#FFF8E1] min-h-screen"
      data-aos="fade-up"
    >
      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-xl border border-[#FF6F00] transition-all">
        <h2 className="text-4xl font-extrabold text-center text-[#FF6F00] mb-4" data-aos="zoom-in">
          Get in Touch
        </h2>
        <p className="text-center text-[#333333] mb-8">
          Have questions or want to book our catering services? Fill the form and we’ll get back to you.
        </p>

        <form className="space-y-6" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-[#FFF8E1] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F00] shadow"
            data-aos="fade-right"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#FFF8E1] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F00] shadow"
            data-aos="fade-left"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 bg-[#FFF8E1] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F00] shadow"
            data-aos="fade-right"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-[#FFF8E1] text-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F00] shadow resize-none"
            data-aos="fade-left"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#8B0000] text-white hover:bg-[#388E3C] font-semibold rounded-full shadow-lg transition transform hover:scale-105"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p
            className={`mt-6 text-center text-md font-medium ${
              status.includes('successfully') ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'
            } p-3 rounded`}
            data-aos="fade-up"
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
