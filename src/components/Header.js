import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${isDarkMode ? 'backdrop-blur-xl text-white text-bold' : 'backdrop-blur-xl text-gray-900 text-bold'} py-4 fixed w-full top-0 z-50 transition-colors duration-300 shadow-md`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Sanmoy Roy</h1>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
            <button 
              className="p-2 focus:outline-none" 
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
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex items-center space-x-6">
                <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li>
                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                        />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <ul className="flex flex-col space-y-3">
            <li><a href="#home" className="block py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</a></li>
            <li><a href="#experience" className="block py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" className="block py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#skills" className="block py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#education" className="block py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Education</a></li>
            <li><a href="#contact" className="block py-2 hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
