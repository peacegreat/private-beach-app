import React from 'react'
import Istock1 from './istockphoto-1481721656-1024x1024.jpg'
import Istock2 from './istockphoto-1369175723-1024x1024.jpg'
import Istock3 from './istockphoto-183344194-1024x1024.jpg'
import Istock4 from './josh-hild-dkFC1_hVbwA-unsplash.jpg'
import Istock5 from './agnese-galbusera-c8I1ltHFLj4-unsplash.jpg'

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]' >
            <img className='row-span-3 object-cover w-full h-full p-2'src={Istock1} alt='bg1' />
            <img className='row-span-2 object-cover w-full h-full p-2'src={Istock2} alt='bg2' />
            <img className='row-span-2 object-cover w-full h-full p-2'src={Istock3} alt='bg3' />
            <img className='row-span-3 object-cover w-full h-full p-2'src={Istock4} alt='bg4' />
            <img className='row-span-2 object-cover w-full h-full p-2'src={Istock5} alt='bg5' />
        </div>
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-3'>First, find the reason why you want to travel.</p>
            <p className='pb-1'>Maybe you already know where you want to go, or maybe you need inspiration. Let me help you.</p>
            <p className='pb-1'>Do you want to escape from winter?</p>
            <p className='pb-1'>Do you want to discover a new culture?</p>
            <p className='pb-1'>Do you want to learn something new? (That last one is often my reason to travel.) </p>
            <p className='pb-6'> Maybe you need to choose a destination that fits your budget.</p>

            <div>
            <button className='border-black mr-4 hover:shadow-xl' >Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl' >Book Your Trip</button>
        </div>
           
        </div>
        
    </div>
  )
}

export default Plan