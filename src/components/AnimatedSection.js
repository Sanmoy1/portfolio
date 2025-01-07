import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({ children, className = '' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Store ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-1000 ease-out opacity-0 translate-y-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
