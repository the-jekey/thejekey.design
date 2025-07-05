import React from 'react'
import Navbar from './Navbar'
import GrainyFilter from './GrainyFilter'
import Button from './Button'
import { MdOutlineCopyright } from "react-icons/md";
import { motion } from 'motion/react';



const Main = () => {

       return (
              <div id='Home' className='max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen bg-[var(--primary-color)]  relative overflow-hidden font-["font"]'>
                     <div className="absolute inset-0 pointer-events-none" style={{ filter: 'url(#grainy)', opacity: 1 }}></div>
                     <Navbar />
                     <main className='w-full mt-45 lg:mt-28 relative z-50 md:px-8 lg:px-10  bg-red-60 text-[6vh] md:text-[15vh] lg:text-[35vh] '>
                            <div className="name bg-red-500 overflow-hidden h-[15vh] lg:h-[25vh] pt-5 lg:flex  leading-15 md:leading-32  text-[8vh] lg:text-[30vh]">
                                   <motion.h1
                                          initial={{ y: 200, rotate: 90, }}
                                          animate={{ y: 0, rotate: 0, }}
                                          transition={{ duration: 0.3, }}
                                          className='origin-left overflow-hidden w-fit' >THE</motion.h1>
                                   <motion.h1
                                          initial={{ y: 200, rotate: 90, }}
                                          animate={{ y: 0, rotate: 0, }}
                                          transition={{ duration: 0.3, }}
                                          className='origin-left ' >JEKEY&copy;</motion.h1>
                            </div>
                            <div className="pera text-[12px] md:text-lg lg:text-2xl lg:pt-10 font-['fontt'] font-semibold   ">
                                   <p className='w-[70%] capitalize tracking-wide  md:w-[60%] lg:w-[40%]'>
                                          <p className='w-fit origin-left  overflow-hidden'><motion.h1
                                                 initial={{ y: 200, rotate: 90, }}
                                                 animate={{ y: 0, rotate: 0, }}
                                                 transition={{ duration: 0.3, }}
                                          >I help growing personal brands and</motion.h1></p>
                                          <p className='w-fit origin-left  overflow-hidden'><motion.h1
                                                 initial={{ y: 200, rotate: 90, }}
                                                 animate={{ y: 0, rotate: 0, }}
                                                 transition={{ duration: 0.3, }}
                                          >startups gain an unfair advantage through</motion.h1></p>
                                          <p className='w-fit  origin-left overflow-hidden'><motion.h1
                                                 initial={{ y: 200, rotate: 90, }}
                                                 animate={{ y: 0, rotate: 0, }}
                                                 transition={{ duration: 0.3, }}
                                          >premium, results-driven websites.</motion.h1></p>

                                   </p>
                            </div>
                            <div className="btn pt-5 w-fit bg-red- overflow-hidden">
                                   <motion.p
                                          initial={{ y: 60, }}
                                          animate={{ y: 0, }}
                                          transition={{ duration: 0.2, }}
                                   ><Button /></motion.p>
                            </div>
                     </main>
                     <section className='w-full md:px-8 lg:px-10 bg-red-60 h-[20vh] mt-5 lg:-mt-10 flex items-end justify-between '>
                            <motion.div
                                   initial={{ height: 2, }}
                                   animate={{ height: "100%", }}
                                   transition={{ duration: 0.3,  ease: [0.4, -0.61, 0, 1],}}
                                   className="img h-[19vh] w-[12vh] rounded-2xl z-50 overflow-hidden  lg:left-1/2 relative lg:h-full lg:w-[25vh] lg:bottom-7">
                                   <img loading='lazy' className='grayscale-100 w-full h-full object-cover object-center hover:grayscale-0' src="../image.avif" alt="Profile image" />
                            </motion.div>
                            <div className="txt relative lg:text-sm text-[10px] lg:flex lg:gap-1 font-semibold">
                                   <p>( Web Designer </p>
                                   <p> & Developer )</p>
                            </div>
                     </section>

              </div>
       )
}
export default Main
