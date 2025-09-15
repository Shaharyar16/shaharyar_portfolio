import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 px-10 py-5 transition-colors max-md:px-0 duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex mx-auto items-center justify-between">
        {/* Name */}
        <h2 className="ml-7 text-2xl max-md:text-[1.5rem] font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Shaharyar Zia
        </h2>

        <div className="flex gap-12 mr-10">
          {/* Nav Links */}
          <div className="flex gap-6 max-md:hidden">
            <a
              className="hover:scale-105 transition duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent bg-black"
              href="#home"
            >
              Home
            </a>
            <a
              className="hover:scale-105 transition duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent bg-black"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:scale-105 transition duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent bg-black"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="hover:scale-105 transition duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent bg-black"
              href="#EduExp"
            >
              Experience
            </a>
            <a
              className="hover:scale-105 transition duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent bg-black"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="hover:scale-105 transition duration-200 ease-in-out hover:bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent bg-black"
              href="#contact"
            >
              Contact
            </a>
          </div>

          {/* Icons + Time + Lang */}
          <div className="text-center flex justify-center gap-3 max-md:gap-4 items-center text-black">
            <a
              className="hover:scale-115 transform transition-transform duration-200 shadow-xl"
              href="https://www.linkedin.com/in/shaharyar-zia-b93b97327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 382 382"
                width="28"
                height="28"
              >
                <rect width="382" height="382" fill="#0077B7" rx="15%" />
                <path
                  fill="#fff"
                  d="M118.2 329.8c0 5.6-4.5 10.1-10.1 10.1H65.3c-5.6 0-10.1-4.5-10.1-10.1V150.4c0-5.6 4.5-10.1 10.1-10.1h42.8
         c5.6 0 10.1 4.5 10.1 10.1v179.4zM86.7 123.4c-22.5 0-40.7-18.2-40.7-40.7S64.3 42.1 86.7 42.1c22.5 0 40.7 18.2 40.7 40.7
         s-18.2 40.7-40.7 40.7zm255.2 207.3c0 5.1-4.1 9.2-9.2 9.2H286.7c-5.1 0-9.2-4.1-9.2-9.2v-84.2c0-12.6 3.7-55-32.8-55
         -28.3 0-34.1 29.1-35.2 42.1v97.1c0 5.1-4.1 9.2-9.2 9.2h-44.4c-5.1 0-9.2-4.1-9.2-9.2V149.6c0-5.1 4.1-9.2 9.2-9.2h44.4
         c5.1 0 9.2 4.1 9.2 9.2v15.7c10.5-15.8 26.1-27.9 59.3-27.9 73.6 0 73.1 68.7 73.1 106.5v87.3z"
                />
              </svg>
            </a>
            <a
              className="hover:scale-115 transform transition-transform  duration-200 shadow-xl"
              href="https://github.com/Shaharyar16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
      6.53 5.47 7.59.4.07.55-.17.55-.38 
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
      0-.53.63-.01 1.08.58 1.23.82.72 1.21 
      1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 
      0 0 .67-.21 2.2.82A7.65 7.65 0 018 4.69c.68.01 1.36.09 
      2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 
      1.91.08 2.11.51.56.82 1.27.82 2.15 
      0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
      1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
      8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>

            <div className="flex max-md:hidden">
              <Clock size={18} />
              <span className="ml-2 text-sm font-medium">
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
