import React from "react";
import myImage from "../assets/myImage.png";
import { Newspaper, Mail } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["FrontEnd Developer", "React Enthusiast", "AI Automations"],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <>
      <div className="flex flex-col items-center pb-20 px-4 sm:px-6 md:px-10 ">
        {/* Profile Image */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 flex justify-center items-center overflow-hidden max-md:mt-12 border-teal-800 border-3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-100 mt-6">
          <img
            className="w-[150%] h-[150%] object-cover"
            src={myImage}
            alt="My Image"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl mt-7 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent font-bold max-md:text-[1.7rem]">
          Shaharyar Zia
        </h1>

        {/* Typing Effect */}
        <div className="text-lg sm:text-xl mt-4 font-medium text-gray-600 h-8">
          {text}
          <Cursor />
        </div>

        <div className="text-gray-500 text-center mt-3 max-w-full sm:max-w-3xl mx-auto px-2 sm:px-0 max-md:text-[14px] max-md:mt-5">
          I craft seamless digital experiences as a front-end developer,
          blending creativity with clean design. With a strong focus on React
          and a growing expertise in AI automations, I enjoy building solutions
          that are both visually engaging and intelligently efficient.
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 mt-10 max-md:w-[90%] max-md:mt-9">
          <button
            className="flex duration-150 cursor-pointer justify-center items-center gap-3 scale-100 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-[16px] py-3 px-9 hover:from-blue-600 hover:to-teal-500 hover:transform hover:transition-all hover:duration-200 hover:scale-105 shadow-md"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Shaharyar_Zia_CV.pdf";
              link.download = "Shaharyar_CV.pdf";
              link.click();
            }}
          >
            <Newspaper /> Download CV
          </button>

          <a href="#contact" className="mx-auto">
            <button className="flex duration-150 cursor-pointer gap-3 justify-center items-center text-[18px] py-3 px-9 rounded-2xl bg-white text-blue-600 font-bold hover:bg-blue-600 hover:text-white hover:transform hover:transition-all hover:scale-105 hover:duration-200 shadow-md">
              <Mail /> Contact Me
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
