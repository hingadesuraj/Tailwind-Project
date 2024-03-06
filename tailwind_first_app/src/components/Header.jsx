import React from "react";

const Header = () => {
  return (
    <>
      <div>
        {/* left side */}
        {/* logo : iconfinder.com  */}
        <img
          src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_Trail-256.png"
          alt="logo_Mountina"
          width={50}
        />
        <a href="">Home</a>
        <a href="">About</a>

        {/* right side */}
        <div>
            <a href="">Login</a>
            <a href="">Signup</a>
        </div>
      </div>
    </>
  );
};

export default Header;
