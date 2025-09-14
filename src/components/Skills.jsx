import React from 'react'
import Card from './Card'

const Skills = () => {
  return (
    <>
    <div className=" w-full bg-gradient-to-r from-white via-blue-600 to-white h-[0.5px] block m-0 p-0"></div>
    <div>
      <div className='py-[4rem] px-[6rem] '>
        <div>
        <div className='text-center'>
        <div className='text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mx-auto text-center'>
            Skills & Technologies
            </div>
            <div className='bg-gradient-to-r from-blue-500 to-teal-400 h-[4px] w-30 rounded-2xl mx-auto mt-2'></div>
            <div className='text-[14px] text-gray-500 mt-7'>Here are the technologies and tools I work with to bring ideas to life</div>
      </div>
      </div>
      <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20'>
        <Card logo = "⚛️" name = "React JS" proficiency = {70} text = "Building dynamic user interfaces with React and Hooks."/>
        <Card logo = "🎨" name = "Tailwind CSS" proficiency = {60} text = "Designing responsive and modern user interfaces with utility-first styling."/>
        <Card logo = "⚡" name = "n8n" proficiency = {30} text = "Automating workflows and integrating multiple apps with low-code solutions."/>
        <Card logo = "💻" name = "JavaScript (ES6+)" proficiency = {70} text = "Adding interactivity and dynamic behavior to web applications."/>
        <Card logo = "📝" name = "HTML5" proficiency = {90} text = "Structuring clean and semantic web pages."/>
        <Card logo = "🖌️" name = "CSS3" proficiency = {90} text = "Styling web pages with layouts, transitions, and responsiveness."/>
      </div>
        <div className='text-gray-500 text-[15px] text-center mt-15 mx-auto'>Curious, always learning, and passionate about growing with modern tools.</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills
