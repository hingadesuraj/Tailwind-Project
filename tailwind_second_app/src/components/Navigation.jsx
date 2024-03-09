import React from "react";
import Button from "./miniComponent/Button";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center mx-[155px] my-3 ">
      {/* left */}
      <div className="flex justify-center items-center gap-3">
        <img className="w-10" src="./images/logo.svg" alt="Logo" />
        <h1 className=" text-xl font-semibold">Landwind</h1>
      </div>
      {/* middle */}
      <div>
        <div className="flex justify-center items-center list-none gap-8 font-semibold ">
          <li>Home</li>
          <li>Company</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Team</li>
          <li>Contace</li>
        </div>
      </div>
      {/* right */}
      <div className="flex justify-center items-center gap-3">
        <div className="flex justify-center items-center  px-3">
          <h1 className=" flex border-y-2 border-l-2 pr-2 bg-gray-300 rounded-sm" >⭐Star</h1>
          <h1 className="px-2 rounded-sm border-y-2 border-r-2 ">680</h1>
        </div>
        <div>
          <Button title="Download" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
