import React, { useEffect } from 'react'
import LocalTime from './LocalTime'
import { GiWorld } from "react-icons/gi";
import MagneticCircle from './MagneticCircle';
import TopGo from './TopGo';
import gsap from 'gsap';

const Footer = () => {
       useEffect(() => {
              gsap.to('.globe', {
                     rotation: '360deg',
                     ease: 'linear',
                     repeat: Infinity,
                     duration: 10,
                     transformOrigin: '50% 50%',
              });
       }, []);

       return (
              <>
                     <footer className='max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen relative py-5 bg-blue-40 flex flex-col justify-between  bg-[var(--primary-color)]  font-["font"]'>
                            <div className="prt-1 w-full h-[40%] bg-green-60 flex gap-1 font-['font'] ">
                                   <div className="w-1/2 bg-red-0 h-full ">
                                          <h1 className='border-b-1 border-zinc-600/50'>Menu</h1>
                                          <h1>Home</h1>
                                          <h1>Projects</h1>
                                          <h1>About us</h1>
                                          <h1>Tesimonial</h1>
                                          <h1>Contact us</h1>
                                   </div>
                                   <div className="w-1/2 bg-red-0 h-full ">
                                          <h1 className='border-b-1 border-zinc-600/50'>Social</h1>
                                          <h1>Instagram</h1>
                                          <h1>Linkedin</h1>
                                          <h1>YouTube</h1>
                                          <h1>Github</h1>
                                          <h1>X</h1>
                                   </div>

                            </div>
                            <div className="prt-1 w-full h-[10%] leading-9 select-none ">
                                   <h1 className='uppercase text-[10.5vh] opacity-75'>Jekey&copy;</h1>
                                   <h1>(Web Designer & Developer) </h1>
                            </div>
                            <div className=" flex justify-between items-end">
                                   <h1 className='uppercase'>
                                          &copy; 2025 <br />
                                          <span className='text-2xl'> the Jekey!</span> <br />
                                          All rights reserved.
                                   </h1>
                                   <h1 className='text-[14px]   flex items-center flex-col '>
                                          <div className=" flex items-center gap-0.5">Local Time <span className='globe'> <GiWorld /></span></div>
                                          <div className="globee"> <LocalTime /></div>

                                   </h1>
                            </div>
                            <div className="top absolute bottom-15 right-5 ">
                                   <TopGo />
                            </div>
                     </footer>
              </>
       )
}

export default Footer
