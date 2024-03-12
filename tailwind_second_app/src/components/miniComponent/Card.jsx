import React from "react";

const Card = ({URL,Heading,Para}) => {
  return (
    <div className=" h-42 w-80 ">
      {/* icon */}
      <div className="py-2 text-purple-500" >
        <img src={URL} width={50} alt="list icon" />
      </div>
      {/* heading */}
      <h1 className=" py-2 font-bold text-2xl" >{Heading}</h1>
      {/* para */}
      <p className=" font-thin  text-gray-400" >{Para}</p>
    </div>
  );
};

export default Card;
