import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
const HeaderComp = () => {
    const [ openMenu, setOpenMenu ] = useState(false);
  return ( 
    <div className='w-full relative  h-[10vh] flex justify-between items-center'>
        {/* Left Section (Logo or Branding) */}
        <div className='w-[30%] mobile:w-[70%] tablet:w-[70%] border-2 border-blue-900 h-full parallelogram text-white  flex justify-center items-center'>
            <h1 className='desktop:text-4xl laptop:text-3xl tablet:text-2xl text-xl font-bold'>Hasim Car Wash</h1> {/* Replace with your logo */}
        </div>

        {/* Navigation Links */}
        <nav className='w-[40%] flex  tablet:hidden mobile:hidden justify-evenly items-center'>
            <Link to="/" className="text-lg active:scale-90 hover:text-red-500">Home</Link>
            <Link to="/services" className="text-lg active:scale-90 hover:text-red-500">Services</Link>
            <Link to="/pricing" className="text-lg active:scale-90 hover:text-red-500">Pricing</Link>
            <Link to="/about" className="text-lg active:scale-90 hover:text-red-500">About</Link>
            <Link to="/contact" className="text-lg active:scale-90 hover:text-red-500">Contact</Link>
        </nav>
       
        
        {/* Right Section (Call to Action or Additional Info) */}
        <div className='w-[30%] flex justify-center items-center'>
            <button className='bg-red-500 tablet:hidden mobile:hidden active:scale-90 text-white px-6 py-2 rounded-full hover:bg-red-600'>
                Book Now
            </button>
        </div>
        <div onClick={()=>setOpenMenu(!openMenu)}  className=' flex justify-center items-center'>
            <button className='bg-red-500 active:scale-90 text-white px-2 py-2 rounded-full hover:bg-red-600'>
            <IoMenuSharp size={20} color="white" />
            </button>
        </div>
        <nav className={`h-screen w-screen absolute top-0 flex ${openMenu ? "translate-y-[-100%]" : "translate-y-0"} transition-all duration-300 flex-col bg-red-500 justify-evenly items-center`}>
            <button onClick={()=>setOpenMenu(!openMenu)} className="text-lg text-white absolute top-10 right-10 active:scale-90 hover:text-red-500"><IoCloseCircleSharp size={40} color="white" /></button>
            <Link to="/" className="text-lg text-white active:scale-90 hover:text-red-500">Home</Link>
            <Link to="/services" className="text-lg text-white active:scale-90 hover:text-red-500">Services</Link>
            <Link to="/pricing" className="text-lg text-white active:scale-90 hover:text-red-500">Pricing</Link>
            <Link to="/about" className="text-lg text-white active:scale-90 hover:text-red-500">About</Link>
            <Link to="/contact" className="text-lg text-white active:scale-90 hover:text-red-500">Contact</Link>
            <button className='bg-red-500 tablet:hidden mobile:hidden active:scale-90 text-white px-6 py-2 rounded-full hover:bg-red-600'>
                Book Now
            </button>
        </nav>
    </div>
  );
}

export default HeaderComp;
