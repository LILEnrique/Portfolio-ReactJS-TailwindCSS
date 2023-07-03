import React from 'react';
import HTML from '../assets/html.png';
import PHP from '../assets/PHP.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Java from '../assets/Java.png';
import Python from '../assets/Python.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import mySQL from '../assets/MySQL.png';
import Laravel from '../assets/Laravel.png';
import CSS from '../assets/css.png';
import Figma from '../assets/Figma.png';

const skillsData = [
  { name: 'Python', image: Python },
  { name: 'Javascript', image: JavaScript },
  { name: 'React', image: ReactImg },
  { name: 'GitHub', image: GitHub },
  { name: 'Java', image: Java },
  { name: 'HTML', image: HTML },
  { name: 'Laravel', image: Laravel },
  { name: 'PHP', image: PHP },
  { name: 'MySQL', image: mySQL },
  { name: 'TailwindCSS', image: Tailwind },
  { name: 'CSS', image: CSS },
  { name: 'Figma', image: Figma },
];

const Skills = ({ darkMode }) => {
  return (
    <div id='skills' className={`w-full h-full py-24 ${darkMode ? 'dark:bg-zinc-800 text-white' : 'bg-white text-black'}`}>
      <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-extrabold inline border-b-4 border-primary'>Habilidades</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 font-semibold' data-aos="zoom-in">
          {skillsData.map((skill) => (
            <div key={skill.name} className='hover:scale-110 duration-500 hover:drop-shadow-xl'>
              <img className='h-20 mx-auto' src={skill.image} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
