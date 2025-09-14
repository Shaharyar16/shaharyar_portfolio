import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white border-1 border-gray-200 flex flex-col px-8 mycard py-6 justify-center rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50'>
      <div>
        <div className="text-4xl mb-2.5 flex items-center justify-center">
          {props.logo}
        </div>
        <div className='text-black font-extrabold flex items-center justify-center'>
          {props.name}
        </div>
        <div className='mt-2.5'>
          <div className='flex justify-between items-center text-gray-500 text-[14px]'>
            <span>Proficiency</span>
            <span>{props.proficiency}%</span>
          </div>

          <div className='w-full h-2.5 bg-gray-200 rounded-2xl overflow-hidden mt-2'>
            <div
              className='w-full h-full prof rounded-r-2xl'
              style={{ "--fill": props.proficiency / 100 }}
            ></div>
          </div>
        </div>
        <div className='text-gray-500 text-[14px] text-center mt-3 text-card'>
                {props.text}
            </div>
      </div>
    </div>
  )
}

export default Card
