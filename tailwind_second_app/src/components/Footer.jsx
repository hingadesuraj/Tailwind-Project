import React from "react";

const Footer = () => {
  return (
    <div className="justify-between items-center mx-[155px] my-3 ">
      <div className="flex  justify-around gap-8 border-b-2 py-8" >
        <div className="list-none" >
          <li className="font-bold text-xl list-none"  >Company</li>
          <li>About</li>
          <li>Careers</li>
          <li>Brand Center</li>
          <li>Blog</li>
        </div>
        <div className="list-none">
          <li className="font-bold text-xl list-none" >HELP CENTER</li>
          <li>Discord Server</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Contact Us</li>
        </div>

        <div className="list-none">
          <li className="font-bold text-xl list-none" >LEGAL</li>
          <li>Privacy Policy</li>
          <li>Licensing</li>
          <li>Terms</li>
        </div>

        <div className="list-none">
          <li className="font-bold text-xl list-none" >COMPANY</li>
          <li>About</li>
          <li>Careers</li>
          <li>Brand Center</li>
          <li>Blog</li>
        </div>
        <div className="list-none">
          <li className="font-bold text-xl list-none" >DOWNLOAD</li>
          <li>iOS</li>
          <li>Android</li>
          <li>Windows</li>
          <li>MacOS</li>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col" >
            <img src="./images/logo.svg" width={50} className="pt-4" alt="Logo" />
            <h1 className="font-bold text-xl pt-2" >LandWind</h1>
            <p className="py-2" >© 2021-2022 Landwind™. All Rights Reserved. Built with Flowbite and Tailwind CSS.</p>
            <div className="flex gap-2">
                <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_glyph_svg-64.png" alt="Logo1" width={30} className='h-10 w-10 border-2 rounded-full' />
                <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-64.png " alt="Logo1" width={30} className='h-10 w-10 border-2 rounded-full' />
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-64.png" alt="Logo1" width={30} className='h-10 w-10 border-2 rounded-full' />
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png" alt="Logo1" width={30} className='h-10 w-10 border-2 rounded-full' />
                <img src="https://cdn0.iconfinder.com/data/icons/tools-165/24/circle-64.png" alt="Logo1" width={30} className='h-10 w-10 border-2 rounded-full'/>
            </div>
        </div>
    </div>
  );
};

export default Footer;
