import React from 'react'
import Room1 from './istockphoto-901381974-1024x1024.jpg'
import Room2 from './istockphoto-480969720-1024x1024.jpg'
import Room3 from './istockphoto-1394301382-1024x1024.jpg'

function Rooms() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
        We pride ourselves on creating beautiful and functional bespoke fitted bedrooms that are tailored to your specific needs and preferences.
        </p>
        </div>
        
        
            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <img className='object-cover w-full h-full ' src={Room1} alt='Rm1'/>
                <img className='row-span-2 object-cover w-full h-full ' src={Room2} alt='Rm2'/>
                <img className='object-cover w-full h-full ' src={Room3} alt='Rm3'/>
            </div>
        
    </div>
  )
}

export default Rooms