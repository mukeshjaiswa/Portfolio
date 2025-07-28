import React from 'react'

export default function About() {
  return (
    <div className='w-[100%] mt-20 text-white flex flex-col justify-center items-center' id='about'>

      <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex-col justify-center items-center ' data-aos="fade-down"
        data-aos-duration="1000">
        <h1 className='text-2xl font-bold text-center  '>ABOUT ME</h1>
        <div className=' border border-transparent shadow-2xl hover:bg-transparent hover:border-[#4db5ff] mt-3  h-auto p-6 mb-20 w-[70%] sm:w-[70%] flex flex-col  items-center justify-center  sm:flex-col text-white rounded-3xl   mx-auto  '  >
          <div className='space-y-3'>
            <p className=' font-semibold text-lg mt-4'>Hi, I'm Mukesh Kumar Chaudhary — a frontend developer focused on building clean, responsive, and user-friendly web interfaces.
            </p>
            <p className='text-lg'>
              I specialize in React, Tailwind CSS, and modern JavaScript to create fast and accessible web experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
