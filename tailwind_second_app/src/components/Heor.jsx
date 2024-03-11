import React from "react";

const Heor = () => {
  return (
    <div className="flex justify-between items-center mx-[155px] my-3 pt-16 ">
      <div className="flex w-full  ">
        {/* left */}
        <div className=" text-black-500">
          <div className="font-bold text-6xl">
            <h1>Building Digital</h1>
            <h1>products & brands.</h1>
          </div>
          <div className="pt-8 text-gray-400 pt-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              cum autem architecto ullam, nihil minima enim quia dolore quaerat
              itaque libero at rem dolor distinctio inventore eos, quasi ab
              voluptatem accusantium sit quo, adipisci atque eveniet
              voluptatibus? Modi quos commodi eius, fuga blanditiis,
              voluptatibus rerum officia, quisquam quibusdam distinctio
              voluptates.
            </p>
          </div>
          <div className="flex text-black pt-8 ">
            <div className="flex justify-start gap-2 items-center border-2  p-2 rounded-md m-2 hover:bg-slate-200">
              <img
                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                width={20}
                alt="Icon"
              />
              <button>View On GitHub</button>
            </div>
            <div className="flex justify-start gap-2 items-center border-2  p-2 rounded-md m-2 hover:bg-slate-200">
              <img
                src="https://cdn3.iconfinder.com/data/icons/feather-5/24/figma-512.png"
                width={20}
                alt="Icon"
              />
              <button>Get Figma file</button>
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" items-center justify-center">
          <img
            src="https://demo.themesberg.com/landwind/images/hero.png"
            alt="Hero Image"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Heor;
