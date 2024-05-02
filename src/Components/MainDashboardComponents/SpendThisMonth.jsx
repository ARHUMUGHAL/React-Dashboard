import React from 'react'
import { FaDollarSign } from "react-icons/fa6";

const SpendThisMonth = () => {
  return (
    <div className='flex items-center px-4'>
    <div><FaDollarSign className='component-icons text-[25px]' /></div>
    <div className='flex flex-col justify-between mx-4'>
      <p className='text-gray-400 font-semibold w-[120%]'>Spend This Month</p>
      <h2 className='text-[28px] font-semibold mt-[-5px] component-text'>$642.39</h2>
    </div>
  </div>
  )
}

export default SpendThisMonth