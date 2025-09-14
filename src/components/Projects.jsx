import React from "react";

// ✅ Reusable Project Card Component
const ProjectCard = ({ title, description, modules, techStack, login, link, otherProjects }) => {
  return (
    <div className="bg-white border border-gray-200 px-8 py-8 rounded-2xl w-[90%] hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50">
      <h3 className="text-2xl font-bold text-black mb-4">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Modules & Features:</h4>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          {modules.map((mod, i) => (
            <li key={i}>
              <span className="font-medium text-gray-800">{mod.name}:</span>{" "}
              {mod.features.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full ${
                i % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-teal-100 text-teal-600"
              } text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-2">Login Credentials:</h4>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Username:</span> {login.username} |{" "}
          <span className="font-medium">Password:</span> {login.password}
        </p>
      </div>

      <div className="mb-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-2xl shadow-md hover:from-blue-600 hover:to-teal-500 transition-all duration-200"
        >
          View Live Project
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Other Projects:</h4>
        <p className="text-gray-500 text-sm">{otherProjects.join(", ")}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const mediCoreProject = {
    title: "MediCore – Hospital Management System",
    description:
      "A full-fledged hospital management system designed to manage patients, doctors, appointments, billing, and reporting efficiently. Developed using Python and Flask with HTML & CSS for front-end.",
    modules: [
      {
        name: "Patient Management",
        features: ["Add Patient", "Remove Patient", "Search Patient", "Update Patient"],
      },
      {
        name: "Doctor Management",
        features: ["Add Doctor", "Remove Doctor", "Search Doctor", "Update Doctor"],
      },
      {
        name: "Appointment Scheduling",
        features: ["Add Appointment", "Remove Appointment", "Search Appointment", "Update Appointment"],
      },
      {
        name: "Billing System",
        features: ["Add Bill", "Remove Bill", "Search Bill", "Update Bill"],
      },
      {
        name: "Reporting",
        features: ["Auto-generate Reports", "View Patients by Timeframe", "Export Reports"],
      },
    ],
    techStack: ["Python", "Flask", "HTML", "CSS", "SQLite3"],
    login: {
      username: "abcdefgh",
      password: "12345678",
    },
    link: "https://hospital-ms-flask.onrender.com/",
    otherProjects: ["Games: Rock Paper Scissors, Tic Tac Toe", "Restaurant Ordering System (Java)"],
  };

  return (
    <>
      <div className="w-full bg-gradient-to-r from-white via-blue-600 to-white h-[0.5px] block m-0 p-0"></div>
      <div className="py-[4rem] px-[6rem] flex flex-col items-center gap-12">
        <div className="text-center">
          <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mx-auto">
            My Projects
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-[4px] w-30 rounded-2xl mx-auto mt-2"></div>
          <div className="text-[14px] text-gray-500 mt-7">
            Some of my projects, including my main deployment-ready system
          </div>
        </div>

        {/* Main Project Card */}
        <ProjectCard {...mediCoreProject} />
      </div>
    </>
  );
};

export default Projects;
