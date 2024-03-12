import React from "react";

const Heor2 = () => {
  return (
    <div className=" bg-[#F9FAFB] ">
    <div className= " flex justify-center items-center mx-[155px] my-3 mb-0 py-[100px] pb-[50px] ">
      {/* left */}
      <div className="w-[50%]" >
        {/* heading paragraph checklist paragreaph */}
        <h1 className="text-4xl font-bold py-4" >Work with tools you already use</h1>
        <p className="text-xl font-light text-gray-400 border-b-2 py-4 " >
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <div className="text-xl  font-light text-md py-4" >
          <li> Continuous integration and deployment</li>
          <li> Development workflow</li>
          <li>Knowledge management</li>
        </div>
        <p className="text-xl py-4 text-gray-400" >Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
      </div>    
      {/* right */}
      <div className="w-[50%]" >
        {/* image */}
        <img
          src="https://demo.themesberg.com/landwind/images/feature-1.png"
          alt="hero2 image"
        />
      </div>
    </div>
    </div>
  );
};

export default Heor2;
