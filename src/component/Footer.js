import React from 'react'

export default function Footer() {
  return (
    <div className='w-full bg-[#4db5ff] text-[12px] gap-1 py-[19px] item-center justify-center flex  text-[1f1f32'>
        <p>&copy;{new Date().getFullYear()}</p>
        <p>Jaiswal Mukesh.</p>
        <p> All Rrights reserved</p>
        </div>
  )
}
