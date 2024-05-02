import React from 'react'
import { MdAddTask } from "react-icons/md";

const NewTasks = () => {
  return (
    <div className='flex items-center px-4'>
    <div className='w-[60px] h-[60px] bg-gradient-to-l from-cyan-400 to-blue-500 rounded-[50px] flex items-center justify-center' >
    <MdAddTask className='text-[32px] text-white'/>
    </div>
    <div className='flex flex-col justify-between mx-4'>
      <p className='text-gray-400 font-semibold'>New Tasks</p>
      <h2 className='text-[28px] font-semibold mt-[-6px] component-text'>154</h2>
    </div>
  </div>
  )
}

export default NewTasks