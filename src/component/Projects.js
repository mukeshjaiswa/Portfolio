import React from 'react'

export default function Projects() {
  return (

    <div className='w-[100%] mt-10 text-white flex flex-col justify-center items-center' id='projects'>
      <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex-col justify-center items-center '>

        <h1 className='text-2xl font-bold  mt-20 text-center '>PROJECTS</h1>
        <div className='w-[300px] mx-auto sm:w-[900px]  flex-wrap flex justify-center items-center '>
          {projects.map((p) => (
            <div key={p.name} className=' border border-transparent  w-[300px] sm:w-[400px] text-center p-10 gap-3
                     bg-[#2C2C6C] rounded-3xl hover:border-[#4db5ff] hover:bg-transparent m-[20px]'  data-aos="flip-right"
              data-aos-duration="1000">

              <img src={p.image} alt="" className=' border-2  rounded-3xl border- w-[300px] h-[200px]  mx-auto' />
              <h3 className='  mb-3 whitespace-nowrap font-semibold text-xl mt-5 '>{p.name}</h3>
              <div className=' flex items-start gap-2 sm:gap-5 mt-5'>
                <a href={p.github} className='border border-[#4db5ff] px-[12px] rounded-md text-2xl  py-[16px] hover:bg-white hover:text-black text-[#4db5ff] whitespace-nowrap'>Github</a>
                <a href={p.livedemo} className=' bg-[#4db5ff] text-[#1f1f32] px-[12px] rounded-md text-2xl py-[16px] hover:bg-white hover:text-black whitespace-nowrap'>Live Dome</a>
              </div>

            </div>
          ))}



        </div>
      </div>
    </div>
  )
}
const projects = [
  {
    name: ' Weather app',
    image: '/projects/Weatherapp.png',
    github: 'https://github.com/mukeshjaiswa/Weather-',
    livedemo: 'https://mukeshweather.vercel.app/'
  },
  {
    name: ' Real Estate',
    image: '/projects/realestate.png',
    github: 'https://github.com/mukeshjaiswa/real-estate',
    livedemo: 'https://real-estate-mukesh.vercel.app/'
  },
  {
    name: 'Job Portal',
    image: '/projects/jobportal.png',
    github: 'https://github.com/mukeshjaiswa/Jobportal',
    livedemo: 'https://jobportal-mukesh.vercel.app/',
  },
  {
    name: 'Food Zone',
    image: '/projects/Foodapp.png',
    github: ' https://github.com/mukeshjaiswa/food-zone',
    livedemo: ' https://github.com/mukeshjaiswa/food-zone',
  },
  {
    name: 'Currency-Convertor',
    image: '/projects/currencyconvertor.png',
    github: 'https://github.com/mukeshjaiswa/Currencyconvertor',
    livedemo: 'https://mukesh-currencyconvertor.vercel.app/'
  },
  {
    name: 'Qr-code generator',
    image: '/projects/qrcode.png',
    github: 'https://github.com/mukeshjaiswa/QRcode-Generator',
    livedemo: 'https://q-rcode-generator-mukesh.vercel.app/'
  },
  {
    name: 'Tic-Tac-Toe',
    image: '/projects/tic tac toe.png',
    github: 'https://github.com/mukeshjaiswa/Tic-Tac-Toe',
    livedemo: 'https://tic-tac-toe-mukesh.vercel.app/',
  },
  {
    name: 'Result Management System',
    image: '/projects/result.png',
    github: 'https://github.com/mukeshjaiswa/resultmanagementsystem',
    livedemo: 'https://github.com/mukeshjaiswa/resultmanagementsystem'
  },
  {
    name: 'Rock-Paper-Scissor',
    image: '/projects/rock-paper-scissors.png',
    github: 'https://github.com/mukeshjaiswa/rock-paper-scissors',
    livedemo: 'https://github.com/mukeshjaiswa/rock-paper-scissors',
  },




  {
    name: 'React Dice Game',
    image: '/projects/Diceapp.png',
    github: 'https://github.com/mukeshjaiswa/dicegame',
  },



]
