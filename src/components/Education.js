import React from 'react';

const Education = () => {
  const education = [
    {
      school: "Adamas University",
      degree: "BTech in Computer Science and Engineering",
      date: "Aug. 2019 – July 2023",
      location: "Kolkata, West Bengal",
      grade: "CGPA: 8.73"
    },
    {
      school: "St. Augustine's Day School",
      degree: "Class 12",
      date: "May 2017 – Mar 2019",
      // grade: "77.66%"
    },
    {
      school: "St. Augustine's Day School",
      degree: "Class 10",
      date: "April 2007 – Mar 2017",
      // grade: "74.83%"
    }
  ];

  const certifications = [
    "Introduction to Generative AI– Google",
    "Kotlin for Java Developers– LinkedIn",
    "Android App Development Masterclass using Kotlin– Udemy",
    "Introduction to Android Graphics– Coursera",
    "Digital Skills: Artificial Intelligence– Accenture",
    "Java SE 8 Features– Infosys"
  ];

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold dark:text-white">{edu.school}</h3>
              <p className="text-xl text-gray-700 dark:text-gray-300">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.date}</p>
              {edu.location && <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>}
              <p className="text-blue-600 dark:text-blue-400 font-semibold">{edu.grade}</p>
            </div>
          ))}

          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6 dark:text-white">Certifications</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <ul className="space-y-2 text-left">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
