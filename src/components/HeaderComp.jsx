import React, { useState, useRef } from 'react';
import { IoMenuSharp, IoCloseCircleSharp } from "react-icons/io5";
import { useAppStore } from '../store';

const HeaderComp = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setHomeRef } = useAppStore((state) => state);
  // Refs for each section
  const homeRef = useRef(null);
  setHomeRef(homeRef);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to the section using scrollIntoView
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',  // Enable smooth scrolling
        block: 'start',      // Align the section at the top
      });
    }
  };

  return (
    <div className="w-full bg-white shadow-2xl z-50 sticky top-0 h-[10vh] flex justify-between items-center">
      {/* Left Section (Logo or Branding) */}
      <div className="w-[30%] mobile:w-[70%] tablet:w-[70%] h-full text-white flex justify-center items-center">
        <img src="carwash.png" alt="logo" className="w-[55%]" />
      </div>

      {/* Navigation Links */}
      <nav className="w-[40%] flex tablet:hidden mobile:hidden justify-evenly items-center">
        <button onClick={() => scrollToSection(homeRef)} className="text-lg active:scale-90 hover:text-[var(--red-color)]">Home</button>
        <button onClick={() => scrollToSection(servicesRef)} className="text-lg active:scale-90 hover:text-[var(--red-color)]">Services</button>
        <button onClick={() => scrollToSection(pricingRef)} className="text-lg active:scale-90 hover:text-[var(--red-color)]">Pricing</button>
        <button onClick={() => scrollToSection(aboutRef)} className="text-lg active:scale-90 hover:text-[var(--red-color)]">About</button>
        <button onClick={() => scrollToSection(contactRef)} className="text-lg active:scale-90 hover:text-[var(--red-color)]">Contact</button>
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
      <nav className={`h-screen w-screen absolute top-0 flex ${!openMenu ? "translate-y-[-100%]" : "translate-y-0"} transition-all duration-300 flex-col bg-[var(--red-color)] justify-evenly items-center`}>
        <button onClick={() => setOpenMenu(!openMenu)} className="text-lg text-white absolute top-10 right-10 active:scale-90 hover:text-[var(--red-color)]">
          <IoCloseCircleSharp size={40} color="white" />
        </button>
        <button onClick={() => scrollToSection(homeRef)} className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Home</button>
        <button onClick={() => scrollToSection(servicesRef)} className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Services</button>
        <button onClick={() => scrollToSection(pricingRef)} className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Pricing</button>
        <button onClick={() => scrollToSection(aboutRef)} className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">About</button>
        <button onClick={() => scrollToSection(contactRef)} className="text-lg text-white active:scale-90 hover:text-[var(--red-color)]">Contact</button>
        <button className="bg-red-500 tablet:hidden mobile:hidden active:scale-90 text-white px-6 py-2 rounded-full hover:bg-[var(--red-color)]">
          Book Now
        </button>
      </nav>
    </div>
  );
};

export default HeaderComp;
