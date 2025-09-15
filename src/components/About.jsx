import React from "react";
import myImage from "../assets/myImage.png";

const About = () => {
  return (
    <>
      <div className=" w-full bg-gradient-to-r from-white via-blue-600 to-white h-[0.5px] block m-0 p-0"></div>
      <div className=" py-[4rem] max-lg:px-1 px-[6rem]">
        <div>
          <div className="text-4xl max-md:text-2xl max-md:text-centre font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mx-auto text-center">
            About Me
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-[4px] w-30 rounded-2xl mx-auto mt-2"></div>
          </div>
          <div className="mt-14 flex justify-center items-center max-lg:flex-col">
            <div className="w-[65%] max-lg:w-[80%] max-md:w-[90%] max-md:text-sm">
              <h1 className="text-2xl max-md:text-[20px] text-black font-bold mb-4 ">
                Hello! I'm Shaharyar Zia
              </h1>
              <span className="text-gray-600">
                I’m a Front-End Developer passionate about crafting seamless
                digital experiences that blend creativity with clean, efficient
                design. I specialize in React and am expanding my expertise in
                AI-powered automations, building solutions that are both
                visually engaging and intelligently efficient <br /> <br />
                My journey in web development started with a curiosity about how
                interactive interfaces are built, and it has grown into a deep
                passion for creating intuitive, responsive, and user-friendly
                applications. <br /> <br />
                When I’m not coding, I enjoy exploring new web technologies,
                experimenting with AI tools, and finding inspiration for
                projects that push the boundaries of modern web experiences.
              </span>
              <div className="flex justify-between items-center text-center mt-14 px-9 max-md:px-0 max-md:flex-col max-md:items-center max-md:gap-3 max-md:mt-6">

                <div className="text-gray-600 text-[14px]">
                  <span className="text-blue-600 block font-extrabold text-xl max-md:text-lg">
                    20+
                  </span>
                  Learnings
                </div>
                <div className="text-gray-600 text-[14px]">
                  <span className="text-teal-400 block font-extrabold text-xl max-md:text-lg">
                    Skills
                  </span>
                  React, Tailwind, N8N
                </div>
                <div className="text-gray-600 text-[14px]">
                  <span className="text-blue-600 block font-extrabold text-xl max-md:text-lg">
                    Experience
                  </span>
                  Front-end Developer
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-800 ml-60 shadow-2xl rounded-2xl max-lg:mx-auto max-lg:w-[80%] max-lg:mt-10">
                <img
                  className="shadow-2xl m-auto"
                  src={myImage}
                  alt="Shaharyar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
