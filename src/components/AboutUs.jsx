import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div id='about' className='w-full flex justify-center pb-10 items-start min-h-full'>
                <div className='desktop:w-[70%] laptop:w-[80%] tablet:w-[90%] mobile:w-[95%] flex flex-col gap-16 justify-between items-start pt-20 h-[80%]'>
                    <h1 className='text-6xl border-b-[var(--red-color)] border-b-4 text-[var(--red-color)] font-bold'>About Us</h1>
                    <div className='w-full flex justify-between items-start gap-8'>
                        <div className='w-[50%] flex gap-8 flex-col justify-evenly items-start' >
                        <h1 className='text-4xl font-bold'>Your Trusted Partner in Premium Car Wash Services</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris.</p>   
                       <div className='w-full flex justify-between items-start ' >
                            <div className='w-[150px] h-[150px] flex flex-col justify-evenly items-center' >
                              <h1 className='text-4xl font-bold'>100%</h1>
                                <p className='text-lg'>Happy Customers</p>
                            </div>
                            <div className='w-[150px] h-[150px] flex flex-col justify-evenly items-center' >
                              <h1 className='text-4xl font-bold'>100+</h1>
                                <p className='text-lg'>Car Washed</p>
                            </div>
                       </div>
                        </div>
 
                        <div className='w-[50%] h-full flex justify-center items-center' >
                            <img src="https://th.bing.com/th/id/R.d3b9ace40948fc493ab29a0656a58113?rik=3t0HILnyQ%2f80ZQ&riu=http%3a%2f%2fwww.elstonwash.com%2fwp-content%2fuploads%2f2017%2f02%2f1-1.jpg&ehk=LEF3cumPj5yTm3e4PV6g6TwVNkHNmTt1ZrP9Q%2f1Dsmg%3d&risl=&pid=ImgRaw&r=0" alt="car wash" className="w-[80%] h-full rounded-2xl"/>   
                        </div>

                    </div>
                    <div className='w-full flex justify-between items-start gap-8'>
                        <div className='w-[50%] h-full flex justify-center items-center' >
                            <img src="https://th.bing.com/th/id/OIP.rSHVmcWY68fwwWlydC4nyQHaFj?rs=1&pid=ImgDetMain" alt="car wash" className="w-[80%] h-full rounded-2xl"/>   
                        </div>
                        <div className='w-[50%] flex gap-8 flex-col justify-evenly items-start' >
                        <h1 className='text-4xl font-bold'>Committed to Excellence in Car Care</h1>
                        <p className='text-lg'>Our mission is to redefine car wash services, setting new standards for quality and customer satisfaction. With every wash, detail, and restoration, we strive to elevate the look and feel of your vehicle, ensuring you drive away with confidence and pride.</p>   
                       <div className='w-full flex justify-between items-start ' >
                            <div className='w-[150px] h-[150px] flex flex-col justify-evenly items-center' >
                              <h1 className='text-4xl font-bold'>100%</h1>
                                <p className='text-lg'>Customer Satisfaction Rate</p>
                            </div>
                            <div className='w-[150px] h-[150px] flex flex-col justify-evenly items-center' >
                              <h1 className='text-4xl font-bold'>100+</h1>
                                <p className='text-lg'>Cars Transformed to Their Best</p>
                            </div>
                       </div>
                       <p className='text-lg'>We believe in going beyond the basics, delivering a meticulous, professional touch that not only cleans but protects and preserves the integrity of your vehicle. With a commitment to using top-grade products, advanced techniques, and experienced hands, our team is dedicated to providing a car care experience that exceeds expectations. We don’t just wash cars; we rejuvenate them, one detail at a time.</p>

                        </div>
 

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs