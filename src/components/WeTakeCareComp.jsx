import React from 'react'

const WeTakeCareComp = () => {
  return (
      <>
      <div id='wetakecare' className='w-full relative h-[400px] mobile:py-4 mobile:h-full bg-[var(--red-color)] flex justify-center items-center'
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/vibrant-car-wash-action-with-water-splashes_661495-39421.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

      }}
      >
          <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

        <div className='w-[70%] z-20 mobile:gap-8 h-full flex flex-col justify-evenly items-start ' >
          <h1 className='text-6xl tablet:text-4xl mobile:text-2xl border-b-[var(--red-color)] border-b-4 text-white font-bold'>We Take Good Wash of Your Car</h1>
          <p className='text-lg tablet:text-sm mobile:text-sm text-white'>Our mission is simple: to provide premium car washing without the hassle of going anywhere. We bring all the equipment, products, and expertise needed to keep your car looking pristine from the comfort of your home or office.</p> 
          <button className='bg-[var(--red-color)] text-white px-6 py-2 active:scale-90 rounded-full hover:bg-white hover:text-[var(--red-color)]'>Learn More</button>

        </div>


      </div>
      </>
  )
}

export default WeTakeCareComp