import React from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [ismenuopen, setIsopenmenu] = useState(false);
  const toggle = () => {
    setIsopenmenu(!ismenuopen);
  }

  return (
    // <div className=" p-4  ">
    <div className='w-[100%] mt-4 text-white  flex flex-col justify-between items-center' >

      {/* <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex justify-between items-center '> */}
        <div className=' w-[600px] mx-auto sm:w-[900px]   flex items-center justify-between' data-aos="fade-up"
        data-aos-duration="1000">
          <div className='text-2xl text-white font-bold ml-10 md:ml-0' data-aos="fade-right"
        data-aos-duration="1000">Mukesh Jaiswal</div>


          {ismenuopen ? (
            <><RxCross1 className='md:hidden text-2xl cursor-pointer  text-white' onClick={toggle} />

            </>
          )
            :

            <FiMenu className='md:hidden text-2xl cursor-pointer  text-white' onClick={toggle} />
          }
          <ul className='hidden md:flex space-x-4  gap-4' data-aos="fade-left"
        data-aos-duration="1000">
            <li><a href="#" className='text-white font-bold hover:border-b-2 p-1 hover:border-customYellow '>Home</a></li>
            <li><a href="#about" className='text-white font-bold hover:border-b-2 p-1 hover:border-customYellow '>About</a></li>
            <li><a href="#skills" className='text-white font-bold hover:border-b-2 p-1 hover:border-customYellow '>Skills</a></li>
            <li><a href="#projects" className='text-white font-bold hover:border-b-2 p-1 hover:border-customYellow '>Projects</a></li>
            <li><a href="contacts" className='text-white font-bold hover:border-b-2 p-1 hover:border-customYellow '>Contact</a></li>

          </ul>
        </div>
        {ismenuopen ?
          <ul className=' flex-col md:hidden  flex items-center  mb-10 mt-10 gap-2'>
            <li><a href="#" className='text-white font-bold '>Home</a></li>
            <li><a href="#about" className='text-white font-bold'>About</a></li>
            <li><a href="#skills" className='text-white font-bold'>Skills</a></li>
            <li><a href="#projects" className='text-white font-bold'>Projects</a></li>
            <li><a href="#contacts" className='text-white font-bold'>Contact</a></li>

          </ul> : ''}
      </div>
    // </div>
  )
}
