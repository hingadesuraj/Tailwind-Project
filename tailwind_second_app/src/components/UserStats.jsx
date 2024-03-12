import React from 'react'
import Card from './miniComponent/Card'

const UserStats = () => {
  return (
    <div className='flex w-full  mx-[155px] my-3 mb-6 ' >
        {/* right */}
        <div   >
            <h3 className=' text-blue-600 font-semibold text-xl  py-4' >Trusted Worldwide</h3>
            <h1 className='text-black font-bold text-4xl py-4 w-full' >Trusted by over 600 million users and 10,000 teams</h1>
            <p className=" font-thin text-lg text-gray-400 mx-2 py-2 border-b-2 pb-8 mb-4" >Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers</p>
            <div className='flex flex-col py-4 pl-2 gap-4' >
              <div className='flex justify-start items-center gap-1 text-blue-600 font-semibold ' >
              <a href="">Explore Legality Guide </a>
              <img src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right_2-256.png" width={15} className='text-blue-400' alt="arrow" /> 
                </div>   
              <div className='flex justify-start items-center gap-1   text-blue-600 font-semibold' >
              <a href="">Explore Legality Guide </a>
              <img src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/right_2-256.png" width={15} alt="arrow" /> 
                </div>   
              
            </div>
        </div>
        {/* left */}
        <div className='flex flex-wrap p-2 gap-2 ' >
        <Card URL="https://cdn0.iconfinder.com/data/icons/ui-essence/32/_88ui-256.png" Heading="99.99% uptime" Para="For Landwind, with zero maintenance downtime" />
        <Card URL="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-256.png" Heading="600M+ Users" Para="Trusted by over 600 milion users around the world" />
        <Card URL="https://cdn3.iconfinder.com/data/icons/internet-relative/200/Earth-256.png" Heading="100+ countries" Para="Have used Landwind to create functional websites" />
        <Card URL="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/shopping-cart-256.png" Heading="5+ Million" Para="Transactions per day" />
    </div>
    </div>
  )
}

export default UserStats