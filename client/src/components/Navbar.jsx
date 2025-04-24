import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 bg-black text-white flex items-center justify-around'>
        <h1 className='text-3xl font-semibold'>UMS App</h1>

        <ul className='flex items-center gap-5'>
            <li className='text-[20px] cursor-pointer hover:bg-white hover:text-black px-2 rounded'>Home</li>
            <li className='text-[20px] cursor-pointer hover:bg-white hover:text-black px-2 rounded'>About</li>
            <li className='text-[20px] cursor-pointer hover:bg-white hover:text-black px-2 rounded'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar