import React from 'react'
import Istock from "./istockphoto-614133604-1024x1024.jpg"

function Hero() {
  return (
    <div className='w-full h-screen'>
        <img className="top-0 left-0 w-full h-screen object-cover" src={Istock} alt='pg'/>
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white '> 
            <div className='md:left-[10%] max-w-[1100px] m-auto p-4'> 
                <p >All Inclusive</p>
                <hi className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Getways</hi>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>A clear blue sky, the sun is shining and it is warm then of course we all want to go to the beach. Especially if they are white beaches with palm trees and an azure blue sea.</p>
                <button className='bg-white text-black hover:bg-blue-400'>Reserve Now</button>
                
            </div>
        </div>
    </div>
  )
}

export default Hero