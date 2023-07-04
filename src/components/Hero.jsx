import React, { useEffect, useState } from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import HeroPhoto from '../assets/Saly-13.png';
import chaos from '../assets/ccchaos.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ darkMode }) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      AOS.init({ duration: 1000 });
      AOS.refresh();
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    if (initialized) {
      AOS.refresh();
    }
  }, [darkMode]);

  return (
    <section className={`bg-white ${darkMode ? 'dark:bg-zinc-800' : ''}`}>
      <div id="home" className="hero min-h-screen relative">
        <div className="hero-content flex-col lg:flex-row-reverse relative ">
          <img src={chaos} className="w-[500px] absolute top-0 right-0 object-cover " alt="chaos" data-aos="zoom-in" />
          <img src={HeroPhoto} className="w-[500px] z-10" alt="Hero" data-aos="zoom-in" />
          <div>
            <p className="font-bold text-primary" data-aos="fade-right">Hola, mi nombre es</p>
            <h1
              className={`text-4xl sm:text-7xl font-extrabold  ${darkMode ? 'text-white' : 'text-black'
                }`}
              data-aos="zoom-in"
            >
              JUANITO PEREZ
            </h1>
            <p className={`py-6 ${darkMode ? 'text-white' : 'text-black'}`} data-aos="zoom-in">
              Desarrollador de software
            </p>
            <div className="flex gap-4" data-aos="fade-up">
              <a href="#about" >
                <button className="btn btn-primary text-white">
                  Conoceme
                  <span className="group-hover:rotate-90">
                    <HiArrowNarrowDown className="ml-3" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


