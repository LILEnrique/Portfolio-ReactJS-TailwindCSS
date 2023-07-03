import React from 'react';
import Weather from '../assets/projects/Weather.png';

const Work = ({ darkMode }) => {

  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'Aplicación del clima construida utilizando ReactJS y Tailwind CSS. Proporciona a los usuarios información del clima en tiempo real utilizando la API de OpenWeatherMap.',
      image: Weather,
      link: 'https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Aplicación del clima construida utilizando ReactJS y Tailwind CSS. Proporciona a los usuarios información del clima en tiempo real utilizando la API de OpenWeatherMap.',
      image: Weather,
      link: 'https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Aplicación del clima construida utilizando ReactJS y Tailwind CSS. Proporciona a los usuarios información del clima en tiempo real utilizando la API de OpenWeatherMap.',
      image: Weather,
      link: 'https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Aplicación del clima construida utilizando ReactJS y Tailwind CSS. Proporciona a los usuarios información del clima en tiempo real utilizando la API de OpenWeatherMap.',
      image: Weather,
      link: 'https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Aplicación del clima construida utilizando ReactJS y Tailwind CSS. Proporciona a los usuarios información del clima en tiempo real utilizando la API de OpenWeatherMap.',
      image: Weather,
      link: 'https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS',
    },
    {
      id: 6,
      title: 'Weather App',
      description: 'Aplicación del clima construida utilizando ReactJS y Tailwind CSS. Proporciona a los usuarios información del clima en tiempo real utilizando la API de OpenWeatherMap.',
      image: Weather,
      link: 'https://github.com/LILEnrique/Weather-App-ReactJS-TailwindCSS',
    },
  ];

  return (
    <section id="work" className={`${darkMode ? 'dark:bg-zinc-900' : 'bg-zinc-100'} py-24`}>
      <div className="container max-w-[1240px] mx-auto px-4">
        <h2 className={`text-4xl font-extrabold mb-4 border-b-4 inline border-primary ${darkMode ? 'text-white' : 'text-black'}`}>Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div className='flex justify-center' data-aos="zoom-in-down" key={project.id}>
              <div className={`card w-80 hover:scale-105 duration-500 shadow-xl ${darkMode ? 'dark:bg-zinc-800' : 'bg-white'} `}>
                <figure><img src={project.image} alt={project.title} /></figure>
                <div className="card-body">
                  <h2 className={`card-title ${darkMode ? 'text-white' : 'text-black'}`}>{project.title}</h2>
                  <p className={` text-xs ${darkMode ? 'text-white' : 'text-black'}`}>{project.description}</p>
                  <div className="card-actions justify-end">
                  <a target="_blank" rel="noopener noreferrer" href={project.link ? project.link : "#"} className="btn btn-primary text-white">Ver proyecto</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Work;
