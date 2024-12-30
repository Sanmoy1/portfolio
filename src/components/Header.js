import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sanmoy Roy</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
              <li><a href="#education" className="hover:text-blue-400">Education</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <ul className="flex flex-col space-y-3">
            <li><a href="#home" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Home</a></li>
            <li><a href="#experience" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#skills" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#education" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Education</a></li>
            <li><a href="#contact" className="block py-2 hover:text-blue-400" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
