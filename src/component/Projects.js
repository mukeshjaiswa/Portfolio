import React from 'react'

export default function Projects() {
  return (
  
        <div className='w-[100%] text-white flex flex-col justify-center items-center' id='projects'>
    <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex-col justify-center items-center '>

            <h1 className='text-2xl font-bold  mt-20 text-center '>PROJECTS</h1>
            <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex justify-center items-center '>
                {projects.map((p) => (
                    <div key={p.name} className=' border rounded-md w-[250px] sm:w-[400px] text-center p-10 gap-3 shadow-customShadow bg-black border-customYellow m-[20px]'  data-aos="flip-right"
                    data-aos-duration="1000">

                        <img src={p.image} alt="" className=' border-2  rounded-md border-customYellow w-[200px] h-[120px]  mx-auto' />
                        <h3 className='mt-1  mb-3 whitespace-nowrap'>{p.name}</h3>
                        <a href={p.github} className='border-2 border-customYellow bg-customYellow text-black rounded-md text-2xl mt-10 px-6 py-1 whitespace-nowrap'>Code on git</a>

                    </div>
                ))}



            </div>
            </div>
        </div>
  )
}
const projects=[
  {
    name:'Qr-code generator',
    image:'/projects/qrcode.png',
    github:'https://github.com/mukeshjaiswa/QRcode-Generator',
  },
  {
    name:'Tic-Tac-Toe',
    image:'/projects/tic tac toe.png',
    github:'https://github.com/mukeshjaiswa/Tic-Tac-Toe',
  },
  {
    name:'Rock-Paper-Scissor',
    image:'/projects/rock-paper-scissors.png',
    github:'https://github.com/mukeshjaiswa/rock-paper-scissors',
  },
 
  {
    name:'Currency-Convertor',
    image:'/projects/currencyconvertor.png',
    github:'https://github.com/mukeshjaiswa/QRcode-Generator',
  },
  {
    name:'Food Zone',
    image:'/projects/foodapp.png',
    github:' https://github.com/mukeshjaiswa/food-zone',
  },
  {
    name:'React Image Gallery app',
    image:'/projects/imagegallery.png',
    github:'',
  },
  {
    name:'React Weather app',
    image:'/projects/Weatherapp.png',
    github:'https://github.com/mukeshjaiswa/Weather-',
  },
  {
    name:'React Dice Game',
    image:'/projects/Diceapp.png',
    github:'https://github.com/mukeshjaiswa/dicegame',
  },
  {
    name:'React Real Estate',
    image:'/projects/realestate.png',
    github:'https://github.com/mukeshjaiswa/real-estate',
  },


]
