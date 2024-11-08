import React from 'react'

const WeTakeCareComp = () => {
  return (
      <>
      <div className='w-full relative h-[400px] bg-[var(--red-color)] flex justify-center items-center'
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/vibrant-car-wash-action-with-water-splashes_661495-39421.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className='w-[70%] z-20  h-full flex flex-col justify-evenly items-start ' >
          <h1 className='text-6xl border-b-[var(--red-color)] border-b-4 text-white font-bold'>We Take Care of Your Car</h1>
          <p className='text-lg text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris.</p> 
          <button className='bg-[var(--red-color)] text-white px-6 py-2 active:scale-90 rounded-full hover:bg-white hover:text-[var(--red-color)]'>Learn More</button>

        </div>


      </div>
      </>
  )
}

export default WeTakeCareComp