import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4 mb-8">
            <h3 className="text-2xl font-bold">Technical Developer</h3>
            <h4 className="text-xl text-gray-600 mb-2">Trimplin</h4>
            <p className="text-gray-500 mb-4">Feb 2023 – Present | Kolkata, West Bengal</p>
            <ul className="list-disc pl-5 text-gray-700 text-left">
              <li className="mb-2">Native and cross-platform app development with a focus on workflow optimization</li>
              <li className="mb-2">Implemented secure authentication systems and efficient database management practices</li>
              <li className="mb-2">Streamlined project workflows reducing completion time by two weeks on average</li>
              <li className="mb-2">Developed and enhanced core pages, navigation, and routing for the organization's website</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
