import React, { useRef, useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from "./button.js";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: "SentimentScope",
      date: "Jan 2024 – Mar 2024",
      github:"https://github.com/Sanmoy1/SentimentScope",
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
      github:"https://github.com/Sanmoy1/Art-Institute-App",
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
      github:"https://github.com/Sanmoy1/QuickRead",
      tech: "Flutter, Dart, Provider, News API, Firebase",
      points: [
        "Developed a news application with headlines, advanced filters, and text-to-speech functionality",
        "Implemented Firebase Authentication for secure user account sign-up, login, and logout features",
        "Architected a scalable MVVM architecture using Provider for state management and business logic",
        "Elevated user engagement with bookmarking, theme customization, and seamless article-sharing options"
      ]
    },
    {
      "title": "MusicStream",
      "date": "Dec 2024 – Present",
      "github":"https://github.com/Sanmoy1/streaming-platform",
      "tech": "React, Tailwind CSS, Framer Motion, React Router DOM, HTML5 Audio API",
      "points": [
        "Identified the need for a modern, responsive music streaming platform with advanced features.",
        "Tasked with creating a seamless audio player, interactive library, and personalized user profiles.",
        "Built the platform using React, Tailwind CSS, and Framer Motion for smooth, dynamic user experiences.",
        "Achieved a responsive platform with improved user engagement, enhanced interactivity, and smooth playback."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 dark:bg-gray-900">
      <AnimatedSection className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">Projects</h2>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-96 mr-8 bg-white dark:bg-gray-800 border border-black rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <div className="mb-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:underline">GitHub</a>
                  <p className="text-blue-600 dark:text-blue-400">{project.tech}</p>
                </div>
                <ul className="list-disc pl-0 ml-4 text-left space-y-2 text-gray-700 dark:text-gray-300">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {showLeftArrow && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
          {showRightArrow && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;

