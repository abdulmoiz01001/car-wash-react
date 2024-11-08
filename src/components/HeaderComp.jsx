import React, { useState } from 'react';

import { IoMenuSharp, IoCloseCircleSharp } from "react-icons/io5";

const HeaderComp = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full bg-white shadow-2xl z-50 sticky top-0 h-[10vh] flex justify-between items-center">
      {/* Left Section (Logo or Branding) */}
      <div className="w-[30%] mobile:w-[70%] tablet:w-[70%] h-full text-white flex justify-center items-center">
        <img src="carwash.png" alt="logo" className="w-[55%]" />
      </div>

      {/* Navigation Links */}
      <nav className="w-[40%] flex tablet:hidden mobile:hidden justify-evenly items-center">
        <a href="#home" className="text-lg active:scale-90 hover:text-[var(--red-color)]">Home</a>
        <a href="#services" className="text-lg active:scale-90 hover:text-[var(--red-color)]">Services</a>
        <a href="#about" className="text-lg active:scale-90 hover:text-[var(--red-color)]">About</a>
        <a href="#contact" className="text-lg active:scale-90 hover:text-[var(--red-color)]">Contact</a>
      </nav>

      {/* Right Section (Call to Action or Additional Info) */}
      <div className="w-[30%] flex justify-center items-center">
        <button className="bg-red-500 tablet:hidden mobile:hidden active:scale-90 text-white px-6 py-2 rounded-full hover:bg-[var(--red-color)]">
          Book Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={() => setOpenMenu(!openMenu)} className="desktop:hidden laptop:hidden flex justify-center items-center">
        <button className="bg-red-500 active:scale-90 text-white px-2 py-2 rounded-full hover:bg-[var(--red-color)]">
          <IoMenuSharp size={20} color="white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <nav className={`h-screen w-screen absolute top-0 flex ${!openMenu ? "translate-y-[-100%]" : "translate-y-0"} transition-all duration-300 flex-col bg-[var(--red-color)] justify-evenly items-center`}>
        <button onClick={() => setOpenMenu(!openMenu)} className="text-lg text-white absolute top-10 right-10 active:scale-90 hover:text-[var(--red-color)]">
          <IoCloseCircleSharp size={40} color="white" />
        </button>
        <a onClick={() => setOpenMenu(!openMenu)} href="#home" className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Home</a>
        <a onClick={() => setOpenMenu(!openMenu)} href="#services" className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Services</a>
        <a onClick={() => setOpenMenu(!openMenu)} href="#about" className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">About</a>
        <a onClick={() => setOpenMenu(!openMenu)} href="#contact" className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Contact</a>
        <button className="bg-white   active:scale-90 text-red-900 px-6 py-2 rounded-full hover:bg-[var(--red-color)]">
          Book Now
        </button>
      </nav> */}


    <nav
      className={`h-screen w-screen absolute top-0 left-0 flex ${!openMenu ? 'translate-y-[-100%]' : 'translate-y-0'} transition-all duration-300 flex-col bg-black justify-evenly items-center`}
    >
      {/* Close Menu Button */}
        
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="text-white absolute top-10 right-10 active:scale-90 hover:text-red-500"
        >
        <IoCloseCircleSharp size={40} color="white" />
      </button>
        <div className='w-full flex flex-col justify-evenly items-center' >

      {/* Navigation Links */}
      <a
        onClick={() => setOpenMenu(!openMenu)}
        href="#home"
        className="text-white text-lg py-3 transition-all duration-200 hover:text-red-500 hover:scale-105"
        >
        Home
      </a>
      <a
        onClick={() => setOpenMenu(!openMenu)}
        href="#services"
        className="text-white text-lg py-3 transition-all duration-200 hover:text-red-500 hover:scale-105"
        >
        Services
      </a>
      <a
        onClick={() => setOpenMenu(!openMenu)}
        href="#about"
        className="text-white text-lg py-3 transition-all duration-200 hover:text-red-500 hover:scale-105"
        >
        About
      </a>
      <a
        onClick={() => setOpenMenu(!openMenu)}
        href="#contact"
        className="text-white text-lg py-3 transition-all duration-200 hover:text-red-500 hover:scale-105"
        >
        Contact
      </a>
        </div>
        <hr />

      {/* Book Now Button */}
      <button  onClick={() => setOpenMenu(!openMenu)}  className="bg-white text-black px-6 py-3 rounded-full hover:bg-red-500 hover:text-white active:scale-90 transition-all duration-200">
      <a href="#contact"> Book Now</a> 
      </button>
    </nav>

    </div>
  );
};

export default HeaderComp;
