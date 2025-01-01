import React, { useEffect, useRef } from 'react';

const SlideSection = ({ children, direction = 'left', className = '' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right',
            'opacity-100'
          );
          entry.target.classList.remove('opacity-0');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [direction]);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-1000 ease-out opacity-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideSection;
