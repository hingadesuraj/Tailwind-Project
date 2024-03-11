import React from 'react'

const Image = ({Title,URL}) => {
  return (
    <div className='flex justify-center items-center gap-4' >
        <img src={URL} width={40} alt="Logo Image" />
        <h1 className='text-3xl font-bold text-gray-500' >{Title}</h1>
    </div>
  )
}

export default Image 