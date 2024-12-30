import React from 'react';
import profileImage from '../assets/image.jpeg'; // Adjust the path and filename according to your image

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-100 pt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left content */}
          <div className="text-left md:pr-8">
            <h1 className="text-5xl font-bold mb-4">Sanmoy Roy</h1>
            <h2 className="text-3xl text-gray-700 mb-6">Software Developer</h2>
            <div className="flex space-x-4 mb-8">
              <a href="https://www.linkedin.com/in/sanmoy-roy-a55887222/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/Sanmoy1" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300">
                GitHub
              </a>
            </div>
            <div className="text-gray-600 space-y-2">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:emailofsanmoyroy@gmail.com" className="hover:text-blue-600 transition duration-300">
                  emailofsanmoyroy@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+919874169948" className="hover:text-blue-600 transition duration-300">
                  +919874169948
                </a>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img 
                src={profileImage} 
                alt="Sanmoy Roy"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
