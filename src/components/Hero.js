import React from 'react';
import profileImage from '../assets/image.jpeg'; // Adjust the path and filename according to your image

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="md:w-2/5 text-left">
            <div>
              <h1 className="text-5xl font-bold mb-4 dark:text-white">Sanmoy Roy</h1>
              <h2 className="text-3xl mb-6 text-gray-600 dark:text-gray-300">Software Developer</h2>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/sanmoy-roy-a55887222/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Sanmoy1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-300">📧</span>
                  <a 
                    href="mailto:emailofsanmoyroy@gmail.com" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    emailofsanmoyroy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 dark:text-gray-300">📱</span>
                  <a 
                    href="tel:+919874169948" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                  >
                    +919874169948
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] relative">
              <img 
                src={profileImage} 
                alt="Sanmoy Roy"
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
