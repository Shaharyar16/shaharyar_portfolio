import React from "react";
import IEEE_CS_logo from "../assets/IEEE_CS_logo.png";
import IEEE_SB_logo from "../assets/IEEE_SB_logo.png";
import COMSATS_logo from "../assets/COMSATS_logo.png";

const ExperienceCard = ({ logo, title, date, description, tags }) => {
  return (
    <div className="bg-white border border-gray-200 px-8 py-6 max-md:px-6 max-md:py-5 rounded-2xl w-[80%] max-md:w-[100%] hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 max-md:w-12 max-md:h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img src={logo} alt={title} className="w-10 h-10 object-contain max-md:w-7 max-md:h-7" />
        </div>
        <div>
          <h3 className="text-xl max-md:text-lg font-bold text-black">{title}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-4">{description}</p>
      <div className="flex gap-2 mt-4 text-sm text-gray-500 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full ${
              i % 2 === 0
                ? "bg-blue-100 text-blue-600"
                : "bg-teal-100 text-teal-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const EducationAndExperience = () => {
  const data = [
    {
      logo: IEEE_CS_logo,
      title: "Joint Secretary – IEEE CS CUI",
      date: "Sep 2025 – Current",
      description:
        "Assisted in managing events, fostering collaboration, and contributing to the technical growth of the student community.",
      tags: ["Leadership", "Teamwork"],
    },
    {
      logo: IEEE_SB_logo,
      title: "Assistant Director – Web Development Team, IEEE CS CUI",
      date: "Sep 2025 – Present",
      description:
        "Assisting in web development sessions for IEEE CS, mentoring juniors, and promoting modern design practices in team projects.",
      tags: ["HTML5, CSS3 & JavaScript", "Report, Manage"],
    },
    {
      logo: COMSATS_logo,
      title: "BS Computer Science – COMSATS University Islamabad",
      date: "Sep 2024 – Sep 2028",
      description:
        "Pursuing a Bachelor’s degree with a focus on software development, algorithms, and modern web technologies.",
      tags: ["Programming", "Problem-Solving"],
    },
  ];

  return (
    <>
      <div className="w-full bg-gradient-to-r from-white via-blue-600 to-white h-[0.5px] block m-0 p-0"></div>
      <div className="py-[4rem] px-[6rem] max-md:px-[1rem]">
        <div>
          <div className="text-center">
            <div className="text-4xl max-md:text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mx-auto">
              Experience & Education
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-[4px] w-30 rounded-2xl mx-auto mt-2"></div>
            <div className="text-[14px] text-gray-500 mt-7">
              My journey so far in leadership roles and academics
            </div>
          </div>

          <div className="flex flex-col gap-8 items-center mt-12">
            {data.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAndExperience;
