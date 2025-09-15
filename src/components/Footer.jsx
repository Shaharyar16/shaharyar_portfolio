import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Border Line */}
      <div className="w-full bg-gradient-to-r from-gray-200 via-teal-400 to-gray-200 h-[0.5px]"></div>

      <div className="bg-[#111827] text-gray-300 py-[3rem] px-[6rem] max-md:px-[2rem] max-md:text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="col-span-2">
            <h1 className="text-xl font-bold text-white max-md:text-2xl">
              Shaharyar Zia
            </h1>
            <p className="mt-3 text-sm text-gray-400 leading-6">
              I design and develop modern web interfaces with a focus on
              simplicity, performance, and user experience. Always curious,
              always building.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5 max-md:justify-center">
              <a
                href="https://github.com/Shaharyar16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-600/20 rounded-lg hover:bg-teal-600/40"
              >
                <FaGithub className="text-teal-400 w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-600/20 rounded-lg hover:bg-teal-600/40"
              >
                <FaLinkedin className="text-teal-400 w-5 h-5" />
              </a>

              <a
                href="mailto:shaharyarzia16@gmail.com"
                className="p-2 bg-teal-600/20 rounded-lg hover:bg-teal-600/40"
              >
                <FaEnvelope className="text-teal-400 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Section */}
          <div className="max-md:mt-5">
            <h2 className="font-semibold text-white mb-3 max-md:text-2xl">
              Explore
            </h2>
            <ul className="space-y-2 text-sm mt-4 max-md:text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-teal-400">Home</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400">Skills & Technologies</a>
              </li>
              <li>
                <a href="#EduExp" className="hover:text-teal-400">Experience & Education</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="max-md:mt-6">
            <h2 className="font-semibold text-white mb-3 max-md:text-2xl">
              Contact
            </h2>
            <p className="text-sm text-gray-400">Rawalpindi, Pakistan</p>
            <p className="text-sm text-gray-400">Available: Mon - Sat</p>
            <p className="text-sm text-gray-400 mt-2">
              shaharyarzia16@gmail.com
            </p>
            <a
              href="#contact"
              className="block mt-4 max-md:mt-7 duration-150 max-md:w-[100%] max-md:text-sm cursor-pointer justify-center items-center gap-3 scale-100 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-[18px] max-md:px-5 max-md:py-2 py-3 px-7 hover:from-blue-600 hover:to-teal-500 hover:transform hover:transition-all hover:duration-200 hover:scale-105 shadow-md"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Shaharyar Zia. Building the web, one component at a time.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
