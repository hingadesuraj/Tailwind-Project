import React from "react";
import image from '../assets/images/heroimg.png'
const Hero = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen">
        <div
          className="flex justify-center items-start flex-col gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20
    "
        >
          <h1 className="text-green-600  font-bold text-6xl">
            One-Click solution for your static website.
          </h1>
          <p className=" text-slate-90 text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, iste
            dolor! Dolorum minus quod eligendi iusto ipsam? Placeat, quos!
            Nihil.
          </p>
          <div className="flex justify-center items-center gap-7">
            <button className=" bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer  ">
              View More
            </button>
            <button className=" text-green-800 px-4 lg:px-8 py-3 rounded-md text-[18px]  cursor-pointer border-2 border-green-800  hover:border-black hover:text-black">
              Watch video
            </button>
          </div>
        
        </div>
        <div className="flex justify-center items-center w-1/2 px-5 py-20 object-cover" >
            <img src={image} alt="heor image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
