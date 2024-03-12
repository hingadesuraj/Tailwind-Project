import React from 'react'
import Button from './miniComponent/Button'

const FreeTrial = () => {
  return (
    <div className='justify-between items-center mx-[155px] my-3 bg-[#F9FAFB] mb-4' >
        <div className='text-center p-4' >
            <h1  className='font-bold text-3xl py-2'>Start your free trial today</h1>
            <p className='text-xl text-gray-400 py-4' >Try Landwind Platform for 30 days. No credit card required.</p>
            <Button title="Free Trail for 30 Days" />
        </div>
    </div>
  )
}

export default FreeTrial