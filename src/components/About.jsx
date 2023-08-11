import React from "react";
import { FaLinkedin, FaGithub, FaFlickr, FaInstagram } from "react-icons/fa";
import Perfil from "../assets/Saly-13.png";

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-24 ${darkMode ? "dark:bg-zinc-900" : "bg-zinc-100"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 sm:w-full xl:1/3">
            <div className="avatar">
              <div style={{ borderRadius: "67% 33% 61% 39% / 47% 30% 70% 53%" }} className="sm:w-80 md:w-96 " data-aos="zoom-in-down">
                <img src={Perfil} alt="Profile" />
              </div>
            </div>
          </div>
          <div className={`md:w-1/2 md:pl-12 my-8 ${darkMode ? "text-white" : "text-black"}`}>
            <p className="text-4xl font-extrabold border-b-4 inline border-primary">Acerca de mí</p>
            <div data-aos="fade-right">
              <p className="my-8">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="divider" data-aos="zoom-in"></div>
              <p className="mb-4" data-aos="zoom-in">
                A continuación algunas de mis redes sociales en donde me puedes encontrar:
              </p>
            </div>
            <div className="flex mt-4 gap-4" data-aos="zoom-in-down">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:scale-125 duration-500 hover:drop-shadow-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-8 h-8 hover:text-primary" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:scale-125 duration-500 hover:drop-shadow-xl"
                aria-label="GitHub"
              >
                <FaGithub className="w-8 h-8 hover:text-primary" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:scale-125 duration-500 hover:drop-shadow-xl"
                aria-label="Flickr"
              >
                <FaFlickr className="w-8 h-8 hover:text-primary" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-500 hover:drop-shadow-xl"
                aria-label="Instagram"
              >
                <FaInstagram className="w-8 h-8 hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
