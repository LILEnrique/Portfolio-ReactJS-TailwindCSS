import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from '../assets/react.png';

const Footer = ({ darkMode }) => {
  return (
    <div className={`py-4 ${darkMode ? 'dark:bg-zinc-900' : 'bg-zinc-100'}`}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center ">
        <div className="flex items-center mb-4 sm:mb-0">
          <img className="w-10 h-10" src={Logo} alt="Logo" />
        </div>
        <div className={`text-center sm:text-left ${darkMode ? 'text-white' : 'text-black'} mb-4 sm:mb-0`}>
          <p>© 2023 All rights reserved by <span className="text-primary">CatPsycho.</span> </p>
        </div>
        <div className={`flex items-center ${darkMode ? 'text-white' : 'text-black'}`}>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 mx-2" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 mx-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
