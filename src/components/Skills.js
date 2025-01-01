import React from 'react';
import StaggeredItem from './StaggeredItem';
import AnimatedSection from './AnimatedSection';

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
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <StaggeredItem 
              key={index} 
              index={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <StaggeredItem
                    key={skillIndex}
                    index={index * 4 + skillIndex} // Stagger skills within each category
                    className="transform transition-all"
                  >
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm hover:scale-105 transition-transform duration-200">
                      {skill}
                    </span>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;
