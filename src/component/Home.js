import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Home() {
    const typeRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Welcome to my Profile", "I am mukesh Jaiswal", "FrontEnd Developer", "JavaScript", 'React Developer'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,

        }
        const typed = new Typed(typeRef.current, options)

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <div className='w-[100%] h-[80vh] mt-20 text-white flex flex-col justify-center items-center' id='/'>

            <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex justify-center items-center '>
                <div className=' border shadow-customShadow w-[80%] sm:w-[40%] sm:gap-4  rounded-md mx-10  bg-bgdark border-~ p-6 flex flex-col items-center ' data-aos="fade-right"
                    data-aos-duration="1000">
                    <h1 className='text-3xl font-bold text-white ' ref={typeRef}>{}</h1>
                    <a href='/pdf/cv.pdf' download='CV.pdf' className='border   border-black bg-white text-black py-2 px-6 rounded-md hover:bg-black hover:text-white hover:border-b-2 hover:border-customYellow font-bold' >DownLoad CV</a>
                </div>

                <div className='h-[300px] w-[300px] mr-10  rounded-full bg-customYellow shadow-customShadow flex items-center justify-center mt-10 sm:mt-0 sm:ml-20' data-aos="fade-left"
                    data-aos-duration="1000">
                    <img src="mukesh.jpg" className='h-[295px] w-[295px]    rounded-full' alt="" />
                </div>
            </div>
        </div>

    )
}
