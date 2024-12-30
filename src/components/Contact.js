import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="mailto:emailofsanmoyroy@gmail.com"
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-600">emailofsanmoyroy@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+919874169948"
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+919874169948</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/sanmoy-roy-a55887222/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                <p className="text-gray-600">Connect with me</p>
              </div>
            </a>

            <a 
              href="https://github.com/Sanmoy1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <h3 className="text-xl font-semibold mb-1">GitHub</h3>
                <p className="text-gray-600">Check out my projects</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
