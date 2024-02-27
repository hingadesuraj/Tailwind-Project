import React from 'react'

const AboutGrid = ({icon,text,label,heading}) => {
  return (
    <div className='flex justify-center items-center gap-55 flex-col bg-white rounded-lg m-2 p-3 lg:p-7' >
        <img src={icon} alt="icon" width={65} height={65} className=' bg-green-400 p-3 rounded-full hover:bg-green-500 cursor-pointer' />
        <h1 className=' text-2xl lg:text-3xl text-center  text-green-600 font-semibold ' >{heading}</h1>
        <p className=' text-[18px] text-slate-700  text-center ' >{text}</p>
        <button className='bg-green-800 text-white px-4 lg:px-8 py-2 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer ' >View More</button>
    </div>
  )
}

export default AboutGrid