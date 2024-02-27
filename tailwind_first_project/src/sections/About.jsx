import React from "react";
 import {code,db, globe, lock} from "../assets/icons/index"
import AboutGrid from "../components/AboutGrid";
 

const About = () => {
    const aboutgrids = [
        {
            icon: code,
            heading: 'SSL Certificate',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            label: 'View More'
        },  
        {
            icon: db,
            heading: 'Personal Domain',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            label: 'View More'
        },
        {
            icon: globe,
            heading: 'Media Storage',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            label: 'View More'
        },
        {
            icon: lock,
            heading: 'Code Editor',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            label: 'View More'
        }
    ];
    
  return (
    <section
      id="services"
      className=" w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12 "
    >
      <div className=" flex justify-center items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-green-600 font-bold text-6xl">
          Hosting Solution With Benefites
        </h1>
        <p className="text-slate-900 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At minus
          voluptas odit dolores beatae optio cumque inventore vitae a nihil.
        </p>

        <div className="flex justify-center items-center gap-7">
          <button className=" bg-green-800 text-white px-8   py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointe  ">
            Read More
          </button>
        </div>
      </div>

        <div className="flex justify-between items-center w-full lg:w-1/2 flex-wrap">

            { aboutgrids.map((grid)=>{
                return(
                    <>
                    <div key={grid.label} className="w-full lg:w-1/2">
                        <AboutGrid {...grid} />
                    </div>
                    </>
                )
            })}

        </div>

    </section>
  );
};

export default About;
