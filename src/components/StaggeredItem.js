import React, { useEffect, useRef } from 'react';

const StaggeredItem = ({ children, index = 0, className = '' }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const currentRef = itemRef.current; // Store ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 200}ms`;
          entry.target.classList.add('animate-fade-in-up', 'opacity-100');
          entry.target.classList.remove('opacity-0');
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
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`transform transition-all duration-500 ease-out opacity-0 ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
};

export default StaggeredItem;
