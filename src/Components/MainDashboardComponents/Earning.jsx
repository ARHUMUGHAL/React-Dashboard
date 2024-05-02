import React from 'react'
import { SiSimpleanalytics } from "react-icons/si";

const Earning = () => {
  return (
    <div className='flex items-center px-4'>
      <div><SiSimpleanalytics className='component-icons text-[25px]' /></div>
      <div className='flex flex-col justify-between mx-4'>
        <p className='text-gray-400 font-semibold'>Earnings</p>
        <h2 className='text-[28px] font-semibold mt-[-6px] component-text'>$350.4</h2>
      </div>
    </div>
  )
}

export default Earning