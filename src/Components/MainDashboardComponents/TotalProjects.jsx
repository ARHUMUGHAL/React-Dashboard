import React from 'react'
import { FaCopy } from "react-icons/fa";

const TotalProjects = () => {
  return (
    <div className='flex items-center px-4'>
    <div><FaCopy  className='component-icons text-[25px]' /></div>
    <div className='flex flex-col justify-between mx-4'>
      <p className='text-gray-400 font-semibold w-[120%]'>Total Projects</p>
      <h2 className='text-[28px] font-semibold mt-[-5px] component-text'>2935</h2>
    </div>
  </div>
  )
}

export default TotalProjects