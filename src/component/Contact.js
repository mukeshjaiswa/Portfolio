import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className='w-[100%] mt-10 text-white flex flex-col justify-center items-center' id='contacts'>
      <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex-col justify-center items-center '>
        <h1 className='text-2xl font-bold text-center  mt-5 '>CONTACT</h1>
        <div className='flex items-center justify-center text-center gap-3 mt-5 mb-5'>



          <div className='flex items-center justify-center gap-4'>
            <a href="https://www.instagram.com/mukeshchaudhary839/" className=' border hover:bg-transparent hover:border-[#4db5ff] border-transparent bg-[#2C2C6C] w-[60px] h-[60px]  flex items-center justify-center rounded-full ' >
              <FaInstagram className=' text-center text-3xl '  />
            </a>
         
            <a href="https://www.facebook.com/mukesh.chaudshary"  className='border hover:bg-transparent hover:border-[#4db5ff] border-transparent bg-[#2C2C6C] w-[60px] h-[60px]  flex items-center justify-center rounded-full ' >
              <FaFacebook className=' text-center text-3xl '  />
            </a>
        
            <a href="https://www.linkedin.com/in/mukesh-jaiswal-583801248/"  className='border hover:bg-transparent hover:border-[#4db5ff] border-transparent bg-[#2C2C6C] w-[60px] h-[60px]  flex items-center justify-center rounded-full ' >
              <FaLinkedin className=' text-center text-3xl '  />
            </a>
          
            <a href="https://github.com/mukeshjaiswa"  className='border hover:bg-transparent hover:border-[#4db5ff] border-transparent bg-[#2C2C6C] w-[60px] h-[60px]  flex items-center justify-center rounded-full  '>
              <FaGithub className=' text-center text-3xl '  />
            </a>
          
            <a href="mailto:1736mukesh@gmail.com"  className='border hover:bg-transparent hover:border-[#4db5ff] border-transparent bg-[#2C2C6C] w-[60px] h-[60px] hover:bg-white hover:text-black  flex items-center justify-center rounded-full ' >
              <MdEmail className=' text-center text-3xl '  />
            </a>
          </div>
         
        </div>
      </div>
    </div>

  )
}
