import React from 'react'

export default function Skills() {
    return (
        <div className='w-[100%] text-white flex flex-col justify-center items-center' id='skills'>
    <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex-col justify-center items-center '>

            <h1 className='text-2xl font-bold text-center  '>SKILLS</h1>
            <div className='w-[600px] mx-auto sm:w-[900px]  flex-wrap flex justify-center items-center'>
                {skills.map((s) => (
                    <div key={s.title} className=' border rounded-md w-[130px] sm:w-[200px] text-center p-10 shadow-sm border-[#4db5ff]  m-[20px]'  data-aos="flip-left"
                    data-aos-duration="1000">

                        <img src={s.image} alt="" className='w-[100px]  mx-auto' />
                        <h3 className='mt-1'>{s.title}</h3>
                    </div>
                ))}



            </div>
        </div>
        </div>
    )
}

const skills = [
    {
        title: 'HTML',
        image: "/skill/html.png"
    },
    {
        title: 'CSS',
        image: "/skill/css.png"
    },
    {
        title: 'TailWind',
        image: "/skill/tailwind.png"
    },
    {
        title: 'JAVASCRIPT',
        image: "/skill/javascript.png"
    },

    {
        title: 'React',
        image: "/skill/react.png"
    },
    {
        title: 'Firebase',
        image: "/skill/firebase.png"
    },
]
