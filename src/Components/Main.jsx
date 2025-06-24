import React from 'react'
import Navbar from './Navbar'
import GrainyFilter from './GrainyFilter'
import Button from './Button'
import { MdOutlineCopyright } from "react-icons/md";

const Main = () => {
       return (
              <div  className='max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen bg-[#e5e5e0] relative overflow-hidden font-["font"]'>
                     <GrainyFilter />
                     <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#grainy)', opacity: 1 }}></div>
                     <Navbar />
                     <main className='w-full mt-30 relative z-50 md:px-8 lg:px-10  bg-red-60 text-[10vh]  md:text-[15vh] lg:text-[35vh] leading-20 md:leading-32'>
                            <div className="name lg:flex m">
                                   <h1>THE</h1>
                                   <h1 className='flex items-'>JEKEY <span className='text-[3vh] md:text-[5vh] lg:text-[17vh]'><MdOutlineCopyright /></span>
                                   </h1>
                            </div>
                            <div className="pera text-sm pt-3">
                                   <p className='w-[85%] capitalize'>I help growing personal brands and startups gain an unfair advantage through premium, results-driven websites.</p>
                            </div>
                            <div className="btn pt-5"><Button /></div>
                     </main>
                     <section className='w-full md:px-8 lg:px-10 bg-red-60 h-[20vh] mt-5 flex items-center justify-between'>
                            <div className="img size-[20vh] rounded-2xl overflow-hidden z-50">
                                   <img className='w-full h-full object-cover object-center' src="../imgg.JPG" alt="Profile image" />
                            </div>
                            <div className="txt text-sm justify-end flex items-center  font-semibold">
                                   <p>(Web Designer <br />& Developer)</p>
                            </div>
                     </section>
              </div>
       )
}

export default Main
