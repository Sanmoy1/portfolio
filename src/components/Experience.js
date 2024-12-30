import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-15 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-2xl font-bold dark:text-white">Trimplin</h3>
              <p className="text-gray-600 dark:text-gray-300">Feb 2023 – Present | Kolkata, West Bengal</p>
            </div>
            <ul className="list-disc pl-0 ml-4 mb-2 space-y-3 text-left text-gray-700 dark:text-gray-300">
              <li>Native and cross-platform app development with a focus on workflow optimization</li>
              <li>Implemented secure authentication systems and efficient database management practices</li>
              <li>Streamlined project workflows reducing completion time by two weeks on average</li>
              <li>Developed and enhanced core pages, navigation, and routing for the organization's website</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
