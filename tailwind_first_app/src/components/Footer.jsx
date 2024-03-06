import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between p-8 bg-indigo-700 items-center '>
        {/* left */}
        <div  className='w-1/3'>
            <p className='text-lg mb-2' >Join the news letter</p>
            <form className="flex gap-1">
                <input type="email" name="" id="" className='w-full rounded outline-none' />
                <button className=' bg-red-300 p-2 px-4 rounded  text-red-800'>Join</button>
            </form>
        </div>
        {/* right */}
        <div>
            <p className='text-white text-lg' >Copy may be apply from 2024</p>
        </div>
    </div>
  )
}

export default Footer