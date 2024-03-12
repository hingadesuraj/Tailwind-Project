import React from 'react'

const Review = () => {
  return (
    <div className='bg-[#F9FAFB] px-12 py-24'>
    <div className='flex flex-col w-full justify-center items-center text-center'>
        <img src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/left_quote-256.png" width={50} alt="quote" />
        <p className='w-full mx-auto px-96 py-4'>
            Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.
        </p>
        <div className='flex justify-center items-center gap-2 py-4'>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Logo" className='h-10 w-10 border-2 rounded-full' />
            <h2>Google Group</h2>
            <span className='text-gray-400'> |</span>
            <p>CEO Google</p>
        </div>
    </div>
</div>
  )
}

export default Review