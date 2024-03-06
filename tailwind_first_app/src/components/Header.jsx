import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-indigo-400 px-10 py-4 flex justify-between items-center gap-4 ">
        {/* left side */}
        <div className="flex justify-between items-center gap-6">
          {/* logo : iconfinder.com  */}
          <img
            src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-256.png"
            alt="logo_Mountina"
            width={50}
          />
          <a
            href=""
            className=" inline-block p-2 text-gray-700 hover:border-1 hover:text-black hover:bg-indigo-200 rounded-md "
          >
            Home
          </a>
          <a
            href=""
            className=" inline-block p-2 text-gray-700 hover:border-1 hover:text-black hover:bg-indigo-200 rounded-md "
          >
            About
          </a>
        </div>
        {/* right side */}
        <div className=" hidden md:block flex justify-between gap-6">
          <a
            href=""
            className="inline-block p-2 text-gray-700 hover:border-1 hover:text-black hover:bg-indigo-200 rounded-md"
          >
            Login
          </a>
          <a
            href=""
            className="inline-block p-2 text-gray-700 hover:border-1 hover:text-black hover:bg-yellow-100 rounded-md transition ease-in duration-500 "
          >
            Signup
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
