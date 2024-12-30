import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className={`App min-h-screen transition-colors duration-300`}>
        <Header />
        <main className="dark:bg-gray-900 dark:text-white">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
