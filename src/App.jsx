import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EducationAndExperience from "./components/EducationAndExperience";

function App() {
  return (
    <>

      <Navbar />
    

      <div className="bg-gradient-to-br from-purple-100 via-zinc-350 to-emerald-100 pt-20 opacity-85">
        <section id="home">
          <Home />
        </section>
      </div>

      <div className="bg-gray-50">
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="EduExp">
          <EducationAndExperience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
