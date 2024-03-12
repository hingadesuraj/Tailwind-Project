import React from 'react'

const Hero3 = () => {
  return (
    <div className=" bg-[#F9FAFB] mt-0">
    <div className= " flex justify-center items-center mx-[155px]  mt-0 py-[50px]">
        {/* left */}
        <div className="w-[50%] pr-6" >
        {/* image */}
        <img
          src="https://demo.themesberg.com/landwind/images/feature-2.png"
          alt="hero3 image"
        />
      </div>
      {/* right */}
      <div className="w-[50%]" >
        {/* heading paragraph checklist paragreaph */}
        <h1 className="text-4xl font-bold py-4" >We invest in the world’s potential</h1>
        <p className="text-xl font-light text-gray-400 border-b-2 py-4 " >
        Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
        </p>
        <div className="text-xl  font-light text-md py-4" >
       <li> Dynamic reports and dashboards</li>
       <li> Templates for everyone</li>
       <li> Development workflow</li>
       <li> Limitless business automation</li>
       <li> Knowledge management        </li>
        </div>
        <p className="text-xl py-4 text-gray-400" >Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
      </div>    
      
    
    </div>
    </div>
  )
}

export default Hero3