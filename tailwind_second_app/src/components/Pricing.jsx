import React from 'react'
import PricingCard from './miniComponent/PricingCard'

const Pricing = () => {
  return (
    <div>
        {/* top */}
        <div className='flex flex-col justify-center items-center'>
    <h1 className='font-bold text-4xl text-center'>Designed for business teams like yours</h1>
    
    <p className=' text-xl text-gray-400 text-center max-w-lg mx-auto px-4 py-4'>Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
</div>
        {/* botton */}
        <div>
            <PricingCard />
            <PricingCard />
            <PricingCard />
        </div>
    </div>
  )
}

export default Pricing