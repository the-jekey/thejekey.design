import React from 'react'
import Navbar from './Navbar'
import GrainyFilter from './GrainyFilter'
import Button from './Button'
import { MdOutlineCopyright } from "react-icons/md";

const Main = () => {
       return (
              <div className='max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen bg-[#e5e5e0] relative overflow-hidden font-["font"]'>
                     <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#grainy)', opacity: 1 }}></div>
                     <Navbar />
                     <main className='w-full mt-50 relative z-50 md:px-8 lg:px-10  bg-red-60 text-[6vh] md:text-[15vh] lg:text-[35vh] '>
                            <div className="name lg:flex  leading-13 md:leading-32  text-[8vh] lg:text-[30vh]">
                                   <h1>THE</h1>
                                   <h1 className=''>JEKEY&copy;
                                   </h1>
                            </div>
                            <div className="pera text-[12px] pt-3 md:text-lg lg:text-2xl lg:pt-10  ">
                                   <p className='w-[70%] capitalize tracking-wide  md:w-[60%] lg:w-[40%]'>I help growing personal brands and startups gain an unfair advantage through premium, results-driven websites.</p>
                            </div>
                            <div className="btn pt-5 w-fit"><Button /></div>
                     </main>
                     <section className='w-full md:px-8 lg:px-10 bg-red-60 h-[20vh] mt-5 flex items-end justify-between'>
                            <div className="img h-[15vh] w-[12vh] rounded-2xl overflow-hidden z-50">
                                   <img className='w-full h-full object-cover object-center' src="../imgg.JPG" alt="Profile image" />
                            </div>
                            <div className="txt relative  text-[10px] font-semibold">
                                   <p>( Web Designer <br /> & Developer )</p>
                            </div>
                     </section>
              </div>
       )
}

export default Main
