import React from 'react'
import { Mail } from 'lucide-react'

const SmallCard = (props) => {
  return (
    <div  className='flex items-center gap-4 mb-4'>
      <div className=''>
        <i className={props.classname}></i>
      </div>
      <div>
      <span className='font-bold flex felx-col text-[15px]'>{props.heading}</span>
      <span className='text-gray-500 text-[15px]'>{props.text}</span>
      </div>
      </div>
  )
}

export default SmallCard
