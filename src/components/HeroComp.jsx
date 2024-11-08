import React, { useEffect, useRef } from 'react'
import { IoSearch } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiSolidCarWash } from "react-icons/bi";

const HeroComp = () => {



  return (
    <>
    <div id='home' className="h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "linear-gradient(rgb(42 39 39 / 90%), rgba(0, 0, 0, 0.3)), url('https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsb2ZmaWNlNF9waG90b19vZl9hX21hbl9ob2xkaW5nX3RoZV9taWNyb2ZpYmVyX2luX2hhbmRfYV80MzZhNDUzMi1mZjVhLTQ2OGMtYTMzZi0zNTc4NmM5Y2NlODVfMS5qcGc.jpg')"
       ,backgroundAttachment: 'fixed' 
     }}>
      <div className="h-full flex justify-center items-center">
        <div className="text-center w-full tablet:w-[80%] mobile:w-[90%] flex flex-col justify-center items-center ">
          <div className="text-white flex flex-col gap-8 mb-8">
            <h1 className="text-5xl tablet:text-3xl mobile:text-2xl font-bold">We Provide Quality Doorstep Car Wash  Services at Your Convenience</h1>
            <p className="text-2xl tablet:text-xl mobile:text-lg mt-2">At your doorstep is sparkling clean without you having to leave your home.</p>
          </div>
          <div className="mt-9 flex w-[60%] tablet:w-[100%] tablet:flex-col mobile:w-[100%] mobile:flex-col gap-4 desktop:space-x-4 laptop:space-x-4 justify-center">
            <div className="bg-white w-[90%] tablet:w-[100%] mobile:w-[100%] tablet:flex mobile:flex tablet:flex-col mobile:flex-col p-4 tablet:p-0 mobile:p-0 rounded-lg">
              <div className="flex w-full tablet:w-full mobile:w-full tablet:flex mobile:flex tablet:flex-col mobile:flex-col space-x-4">
                {/* Location Select */}
                <div className=" flex w-[30%] h-[60px] tablet:border-b-2 mobile:border-b-2 tablet:w-full mobile:w-full justify-between items-center">
                
                  <h1 className="text-gray-600 font-semibold tablet:pl-4  mobile:pl-4 text-lg"> City Hyderabad</h1>
                </div>

                {/* Service Type Select */}
                <div className=" flex w-[30%] h-[60px] tablet:w-full mobile:w-full justify-between items-center">
               
                  <h1 className="text-gray-600 font-semibold text-lg"> Door Steps car Wash Service</h1>
                </div>

                {/* SubCategory Select */}
                {/* <div className=" flex w-[30%] justify-between items-center">
                  <HiOutlineLocationMarker size={25} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-600" />
                  <h1 className="text-gray-600 text-lg">City Hyderabad</h1>
                </div> */}
              </div>
            </div>
            {/* Search Button */}
            <div className="flex items-center w-[10%] tablet:w-full mobile:w-full tablet:h-[100px] mobile:h-[100px] justify-center">
              <button  className="h-full w-full bg-red-500 text-white rounded-lg flex desktop:flex-col desktop: gap-8 justify-center items-center">
                Get Started 
              <BiSolidCarWash className='desktop:hidden laptop:hidden' size={30} color='white' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default HeroComp