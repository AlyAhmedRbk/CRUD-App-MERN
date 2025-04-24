import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-black text-white flex items-center justify-around'>
        <h1 className='text-xl md:text-3xl font-semibold'>UMS App</h1>

        <ul className='flex items-center md:gap-5 gap-2'>
            <li className='text-sm md:text-[20px] cursor-pointer hover:bg-white hover:text-black px-1.5 md:px-2 md:py-1.5 rounded'>Home</li>
            <li className='text-sm md:text-[20px] cursor-pointer hover:bg-white hover:text-black px-1.5 md:px-2 md:py-1.5 rounded'>About</li>
            <li className='text-sm md:text-[20px] cursor-pointer hover:bg-white hover:text-black px-1.5 md:px-2 md:py-1.5 rounded'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar