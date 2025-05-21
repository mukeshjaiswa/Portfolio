import React from 'react'

export default function About() {
  return (
    <div className='w-[100%] mt-20 text-white flex flex-col justify-center items-center' id='about'>
    
    <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex-col justify-center items-center '  data-aos="fade-down"
        data-aos-duration="1000">
   <h1 className='text-2xl font-bold text-center  '>ABOUT ME</h1>
    <div className=' border border-customShadow mt-3  h-auto p-3 mb-20 w-[70%] sm:w-[70%] flex flex-col flex items-center justify-center  sm:flex-col text-white rounded-md   mx-auto shadow-customShadow '  >
       
        <p className=' mt-4'>Hi, I’m Mukesh Kumar Chaudhary — a frontend developer expert with a BCA degree from Tribhuvan University.
I specialize in building responsive, user-friendly websites using React, Tailwind CSS. I’m passionate about clean design, smooth performance, and bringing ideas to life on the web.</p>
    </div>
    </div>
    </div>
  )
}
