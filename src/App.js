import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={isDarkMode}  />
      <About darkMode={isDarkMode} />
      <Skills darkMode={isDarkMode}/>
      <Work darkMode={isDarkMode}/>
      <Contact darkMode={isDarkMode}/>
      <Footer darkMode={isDarkMode}/>
    </div>
  );
};

export default App;