import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Kotlin", "Python", "C", "SQL (MySQL, SQLite)", "JavaScript", "HTML/CSS", "PHP"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Android Studio", "Flutter", "Tailwind CSS"]
    },
    {
      title: "Technologies",
      skills: ["Git", "Gradle", "XAMPP", "Firebase", "Figma", "Tableau", "AWS"]
    },
    {
      title: "Libraries",
      skills: ["Rest API", "Android Volley", "Picasso", "PhotoView"]
    }
  ];

  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
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
