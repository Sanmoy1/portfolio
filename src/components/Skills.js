import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Kotlin", "Python", "C", "SQL (MySQL, SQLite)", "JavaScript", "HTML/CSS", "PHP"]
    },
    {
      title: "Frameworks",
      skills: ["Android Studio", "Flutter", "Tailwind CSS"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Gradle", "XAMPP", "Firebase", "Figma", "Tableau", "AWS"]
    },
    {
      title: "Libraries & APIs",
      skills: ["Rest API", "Android Volley", "Picasso", "PhotoView"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
