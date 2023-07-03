import React, { useState } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../assets/react.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className={` ${darkMode ? 'dark:bg-zinc-900' : 'bg-zinc-100'} fixed w-full h-[70px] flex justify-between items-center px-4 drop-shadow-md font-medium z-20 `}>
      <div>
        <a href="#home">
          <img src={Logo} alt="Logo" className="cursor-pointer h-[60px] w-[60px]" />
        </a>
      </div>
      {/* Menu */}
      <ul className={`hidden md:flex ${darkMode ? 'text-white' : 'text-black'} cursor-pointer `}>
        <li className={`hover:text-primary px-3 py-2 rounded-md ${darkMode ? 'dark:hover:bg-zinc-800 ' : 'hover:bg-white '}`}>
          <a href="#home">Inicio</a>
        </li>
        <li className={`hover:text-primary px-3 py-2 rounded-md ${darkMode ? 'dark:hover:bg-zinc-800 ' : 'hover:bg-white '}`}>
          <a href="#about">Sobre mí</a>
        </li>
        <li className={`hover:text-primary px-3 py-2 rounded-md ${darkMode ? 'dark:hover:bg-zinc-800 ' : 'hover:bg-white '}`}>
          <a href="#skills">Habilidades</a>
        </li>
        <li className={`hover:text-primary px-3 py-2  rounded-md ${darkMode ? 'dark:hover:bg-zinc-800 ' : 'hover:bg-white '}`}>
          <a href="#work">Proyectos</a>
        </li>
        <li className={`hover:text-primary px-3 py-2 mr-4 rounded-md ${darkMode ? 'dark:hover:bg-zinc-800 ' : 'hover:bg-white '}`}>
          <a href="#contact">Contacto</a>
        </li>
        <li className='my-auto'>
          <label className="swap swap-rotate hover:text-primary">
            <input type="checkbox" onClick={toggleDarkMode} aria-label="ToggleDarkMode" />
            <div className="swap-on"><FaSun /></div>
            <div className="swap-off"><FaMoon /></div>
          </label>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-primary">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
        } ${darkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
        <li className={`py-6 text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>
          <a href="#home" onClick={handleClick}>Inicio</a>
        </li>
        <li className={`py-6 text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>
          <a href="#about" onClick={handleClick}>Sobre mí</a>
        </li>
        <li className={`py-6 text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>
          <a href="#skills" onClick={handleClick}>Habilidades</a>
        </li>
        <li className={`py-6 text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>
          <a href="#work" onClick={handleClick}>Proyectos</a>
        </li>
        <li className={`py-6 text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>
          <a href="#contact" onClick={handleClick}>Contacto</a>
        </li>
        <li className={`py-6 text-4xl ${darkMode ? 'text-white' : 'text-black '}`}>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={toggleDarkMode} aria-label="ToggleDarkMode" />
            <div className="swap-on"><FaSun /></div>
            <div className="swap-off"><FaMoon /></div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
