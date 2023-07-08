import React from "react";

const Contact = ({ darkMode }) => {
  return (
    <div
      id="contact"
      className={`w-full h-full py-24 flex justify-center items-center p-4 ${darkMode ? "dark:bg-zinc-800 text-white" : "bg-white text-black"} `}
    >
      <form method="POST" action="https://getform.io" className="flex flex-col max-w-[600px] w-full">
        <div>
          <p className="text-4xl font-extrabold inline border-b-4 border-primary ">Contacto</p>
          <p className=" py-8" data-aos="fade-right">
            Puedes contactarte conmigo mediante un correo, estaré encantado de responderte.
          </p>
        </div>
        <div data-aos="zoom-in-down">
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            className={`input input-bordered w-full  p-2 ${darkMode ? "dark:bg-zinc-700" : "bg-zinc-100"} `}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={`input input-bordered w-full  p-2 my-4 ${darkMode ? "dark:bg-zinc-700" : "bg-zinc-100"} `}
          />
          <textarea
            className={` textarea textarea-bordered w-full p-2  ${darkMode ? "dark:bg-zinc-700" : "bg-zinc-100"} `}
            name="message"
            rows="10"
            placeholder="Mensaje"
          ></textarea>
          <button className="btn btn-primary px-4 py-3 my-8 mx-auto flex items-center text-white ">Contactar</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
