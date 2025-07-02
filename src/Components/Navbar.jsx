import { nav } from 'motion/react-client'
import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

const Navbar = () => {
       return (
              <>
                     <nav className='max-w-screen mx-auto py-6  text-black font-["font"] flex justify-between md:px-8 lg:px-10'>
                            <div className="name flex md:text-2xl lg:text-3xl">
                                   <h1>Jekey </h1>
                                   <span className='text-xs'><MdOutlineCopyright /></span>
                            </div>
                            <div className="links text-[14px] font-[sdf] font-semibold md:flex md:gap-4">
                                   <h1 className='cursor-pointer'>Services!</h1>
                                   <h1 className='cursor-pointer'>Work!</h1>
                                   <h1 className='cursor-pointer'>About!</h1>
                                   <h1 className='cursor-pointer'>Contact!</h1>
                            </div>
                     </nav>
              </>
       )
}

export default Navbar
