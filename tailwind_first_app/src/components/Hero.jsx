import React from 'react'

const Hero = () => {
  return (
    <div className='bg-indigo-300 px-10 py-20 lg:flex justify-around items-center gap-10  ' >
        {/* left */}
        <div className='w-1/2 mb-10 md:mb-0 ' >
            <h1 className=' text-2xl md:text-3xl lg:text-6xl font-bold mb-6'>Welcome to Animal City</h1>
            <p className='mb-8'>There is a never a sad day here!</p>
            <a href="" className=' inline-block border-2 px-6 py-3 text-lg mr-2 rounded-md bg-gray-100 text-indigo-400'>Learn More</a>
            <a href="" className=' inline-block border-2 px-6 py-3 text-lg rounded-md bg-yellow-200  '>Get Started</a>
        </div>
        {/* right */}
        <div  className='md:w-1/2'>
            <img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww" className='w-full rounded-md shadow-2xl' alt="animal image "  />
        </div>
    </div>
  )
}

export default Hero