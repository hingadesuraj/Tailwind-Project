import React from 'react'
import Button from './miniComponent/Button'

const Navigation = () => {
  return (
    <div className='flex justify-between items-center mx-32 my-4 ' >
        {/* left */}
        <div className='flex justify-center items-center gap-3' >
            <img src="./images/logo.svg" alt="Logo" />
            <h1 className=' font-semibold' >Landwind</h1>
        </div>
        {/* middle */}
        <div>
          <div className='flex justify-center items-center list-none gap-8 font-semibold' >
            <li>Home</li>
            <li>Company</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Team</li>
            <li>Contace</li>
          </div>
        </div>
        {/* right */}
        <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-center items-center gap-1' >
               <h1>Start</h1>
               <h1>680</h1>
            </div>
            <div>
                <Button title="Download" />
            </div>
        </div>
    </div>
  )
}

export default Navigation