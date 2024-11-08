import React from 'react';

const ServicesOfferComp = () => {
    return (
        <>
            <div id='services' className='w-full flex justify-center pb-10 items-start min-h-full'>
                <div className='desktop:w-[70%] laptop:w-[80%] tablet:w-[90%] mobile:w-[95%] flex flex-col gap-16 justify-between items-start pt-20 h-[80%]'>
                    <h1 className='text-6xl border-b-[var(--red-color)] border-b-4 text-[var(--red-color)] font-bold'>Our Services</h1>
                    <div className='w-full flex justify-between items-start gap-8'>
                        {/* Service Card 1 */}
                        <div className='w-[30%] min-h-[300px] flex flex-col gap-4 bg-slate-100 border-2 p-6 rounded-2xl justify-between items-start transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#ff6666] hover:to-[#ff9999] hover:text-white'>
                            <h1 className='text-4xl font-bold'>01</h1>
                            <h1 className='text-2xl font-bold'>Exterior Wash</h1>
                            <p className='text-lg'>Give your car a spotless exterior shine with our comprehensive exterior wash. Our team will carefully remove dirt, grime, and other contaminants, leaving your car gleaming like new.</p>
                        </div>

                        {/* Service Card 2 */}
                        <div className='w-[30%] min-h-[300px] flex flex-col gap-4 bg-slate-100 border-2 p-6 rounded-2xl justify-between items-start transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#ff6666] hover:to-[#ff9999] hover:text-white'>
                            <h1 className='text-4xl font-bold'>02</h1>
                            <h1 className='text-2xl font-bold'>Interior Detailing</h1>
                            <p className='text-lg'>Enjoy a fresh and spotless interior with our deep-cleaning interior detailing service. We tackle every inch of your car's cabin, removing dust, debris, and allergens for a healthier environment.</p>
                        </div>

                        {/* Service Card 3 */}
                        <div className='w-[30%] min-h-[300px] flex flex-col gap-4 bg-slate-100 border-2 p-6 rounded-2xl justify-between items-start transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#ff6666] hover:to-[#ff9999] hover:text-white'>
                            <h1 className='text-4xl font-bold'>03</h1>
                            <h1 className='text-2xl font-bold'>Premium Full Service</h1>
                            <p className='text-lg'>Our all-inclusive Premium Full Service package provides a thorough cleaning inside and out, leaving your car looking and feeling like it just came off the showroom floor.</p>
                        </div>
                    </div>
                    <div className='w-full flex mt-20 flex-col justify-evenly items-center gap-4' >
                        <h1 className='text-4xl font-bold'>Best Car Wash in Your Door Steps</h1>
                        <p className='text-lg text-center'>We also offer a range of additional home services to keep your car in top condition right in your driveway. From waxing and polishing to headlight restoration and more, we bring everything needed to make your car look its best, all at your convenience.</p>

                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ServicesOfferComp;
