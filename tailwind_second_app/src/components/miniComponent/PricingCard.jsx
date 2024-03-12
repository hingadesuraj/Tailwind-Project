import React from "react";
import Button from "./Button";

const PricingCard = () => {
  return (
    <div className="  shadow-md rounded-md border-indigo-500 m-2 p-2" >
      <div className="w-full"  >
        <h1 className="text-3xl font-bold text-center py-4" >Starter</h1>
        <p className="font-thin text-xl text-center py-2" >Best option for personal use & for your next project.</p>
        <h1 className="font-bold text-xl text-center py-2" >$29 /<span className="text-sm" >month</span></h1>
        <div className="jusctify-center p-2" >
          <li className="py-2" > Individual configuration</li>
          <li className="py-2" >  No setup, or hidden fees </li>
          <li className="py-2" >  Team size: 1 developer </li>
          <li className="py-2" >  Premium support: 6 months </li>
          <li className="py-2" >  Free updates: 6 months</li>
        </div>
        <div className="flex justify-center items-center p-4 w-full ">
        <Button className="w-full" title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
