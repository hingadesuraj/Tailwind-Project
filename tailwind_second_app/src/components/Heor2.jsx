import React from "react";

const Heor2 = () => {
  return (
    <div className=" bg-[#F9FAFB]">
    <div className= " flex justify-center items-center mx-[155px] my-3 py-[100px]">
      {/* left */}
      <div className="w-[50%]" >
        {/* heading paragraph checklist paragreaph */}
        <h1 className="text-4xl font-bold" >Work with tools you already use</h1>
        <p>
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <div>
          <li> Continuous integration and deployment</li>
          <li> Development workflow</li>
          <li>Knowledge management</li>
        </div>
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
