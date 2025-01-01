import React from 'react';
import StaggeredItem from './StaggeredItem';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: "SentimentScope",
      date: "Jan 2024 – Mar 2024",
      tech: "Python, Kotlin, Android Studio",
      points: [
        "Implemented a real-time stock market sentiment analysis mobile application",
        "Integrated Python ML models with Kotlin using Chaquopy for efficient processing",
        "Built an intuitive user interface for analyzing market sentiments from news and social media",
        "Achieved 20% reduction in processing time while handling 1,000+ data sources"
      ]
    },
    {
      title: "Art Institute App",
      date: "Aug 2024 – Oct 2024",
      tech: "Java, Android Volley, Picasso",
      points: [
        "Created an interactive mobile application showcasing 300,000+ artworks",
        "Optimized efficient data loading and image caching using Android Volley and Picasso",
        "Developed advanced search functionality and smooth zoom features",
        "Improved search performance by 10% leading to enhanced user engagement"
      ]
    },
    {
      title: "QuickRead",
      date: "Nov 2024 – Present",
      tech: "Flutter, Dart, Provider, News API, Firebase",
      points: [
        "Developed a news application with headlines, advanced filters, and text-to-speech functionality",
        "Implemented Firebase Authentication for secure user account sign-up, login, and logout features",
        "Architected a scalable MVVM architecture using Provider for state management and business logic",
        "Elevated user engagement with bookmarking, theme customization, and seamless article-sharing options"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 dark:bg-gray-900">
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggeredItem 
              key={index} 
              index={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
                <p className="text-blue-600 dark:text-blue-400">{project.tech}</p>
              </div>
              <ul className="list-disc pl-0 ml-4 text-left space-y-2 text-gray-700 dark:text-gray-300">
                {project.points.map((point, idx) => (
                  <li key={idx} className="mb-2">{point}</li>
                ))}
              </ul>
            </StaggeredItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;
