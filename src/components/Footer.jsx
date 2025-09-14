import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-gray-200 via-teal-400 to-gray-200 h-[0.5px] block m-0 p-0"></div>
      <div className="bg-[#111827] text-gray-300 py-[3rem] px-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div className="col-span-2">
            <h1 className="text-xl font-bold text-white">Shaharyar Zia</h1>
            <p className="mt-3 text-sm text-gray-400 leading-6">
              I design and develop modern web interfaces with a focus on
              simplicity, performance, and user experience. Always curious,
              always building.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* GitHub */}
              <a
                href="https://github.com/Shaharyar16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-600/20 rounded-lg hover:bg-teal-600/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-teal-400"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.11.79-.25.79-.55v-2.14c-3.2.7-3.87-1.54-3.87-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.1-.76.41-1.26.75-1.55-2.55-.29-5.23-1.27-5.23-5.64 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.07 0 4.39-2.69 5.34-5.25 5.62.42.37.8 1.09.8 2.21v3.28c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-600/20 rounded-lg hover:bg-teal-600/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-teal-400"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
                  2.24 5 5 5h14c2.76 0 5-2.24 
                  5-5v-14c0-2.76-2.24-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.4c-.97 
                  0-1.75-.79-1.75-1.75s.78-1.75 
                  1.75-1.75 1.75.79 1.75 
                  1.75-.78 1.75-1.75 1.75zm13.5 
                  11.4h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                  0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 
                  1.38-1.54 2.84-1.54 3.04 0 3.6 
                  2 3.6 4.6v5.58z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="mailto:shaharyarzia16@gmail.com"
                className="p-2 bg-teal-600/20 rounded-lg hover:bg-teal-600/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-teal-400"
                >
                  <path d="M12 12.713l-11.985-8.713h23.97l-11.985 
                  8.713zm0 2.574l-12-8.713v14.426h24v-14.426l-12 
                  8.713z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-semibold text-white mb-3">Explore</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-teal-400">Home</a></li>
              <li><a href="#skills" className="hover:text-teal-400">Skills & Technologies</a></li>
              <li><a href="#EduExp" className="hover:text-teal-400">Experience & Education</a></li>
              <li><a href="#about" className="hover:text-teal-400">About</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-white mb-3">Contact</h2>
            <p className="text-sm text-gray-400">Rawalpindi, Pakistan</p>
            <p className="text-sm text-gray-400">Available: Mon - Sat</p>
            <p className="text-sm text-gray-400 mt-2">
              shaharyarzia16@gmail.com
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 duration-150 cursor-pointer justify-center items-center gap-3 scale-100 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 font-bold text-[18px] py-3 px-7 hover:from-blue-600 hover:to-teal-500 hover:transform hover:transition-all hover:duration-200 hover:scale-105 shadow-md"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Shaharyar Zia. Building the web, one component at a time.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
