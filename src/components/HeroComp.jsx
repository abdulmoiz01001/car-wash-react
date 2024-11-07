import React from 'react'

const HeroComp = () => {
  return (
    <>
    <div className='w-full h-screen border-2 flex justify-center items-center   ' >
        <div className='w-[80%] h-full flex justify-between items-center ' >
            <div className='w-[50%] h-full flex flex-col justify-center gap-8 items-start' >
                <div className='w-full absolute -z-10 h-[50%] edge-para bg-red-300 flex flex-col justify-center items-start gap-4' ></div>
              <h1 className='text-4xl text-white w-full text-right font-bold '>Hasim Car Wash</h1>
              <p className='text-lg'>We provide the best car wash services in the city. Our services include interior and exterior cleaning, waxing, and more. Book an appointment now!</p>
                <button className='bg-red-500 text-white edge-para px-6 py-2  hover:bg-red-600'>
                    Book Now
                </button>
            </div>
            <div className='w-[50%] h-full flex justify-center items-center ' >
                <img src="https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b" alt="car wash" className='w-[80%] h-[80%] object-cover' />

            </div>

        </div>

    </div>
    </>
  )
}

export default HeroComp