import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Section - Connect with me */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">Connect with me:</h2>
          <p className="text-lg text-gray-400 mb-6">If you're interested in working together, feel free to reach out!</p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-10 text-purple-500 text-4xl">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="w-6 h-6 cursor-pointer transition transform hover:scale-110" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 cursor-pointer transition transform hover:scale-110" />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegram className="w-6 h-6 cursor-pointer transition transform hover:scale-110" />
            </a>
            <a href="#" aria-label="Email">
              <FaEnvelope className="w-6 h-6 cursor-pointer transition transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Let’s make magic together</h2>
          
          {/* Form */}
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-400 mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-400 mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message:</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
