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
                     duration: 7,
                     transformOrigin: '50% 50%',
              });
       }, []);

       const smoothScrollTo = (e, id) => {
              e.preventDefault();

              const section = document.getElementById(id);
              if (!section) return;

              const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
              const startPosition = window.pageYOffset;
              const distance = targetPosition - startPosition;
              const duration = 1000; // adjust for extra smoothness
              let start = null;

              const easeInOutCubic = (t) =>
                     t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

              const animation = (currentTime) => {
                     if (start === null) start = currentTime;
                     const timeElapsed = currentTime - start;
                     const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;

                     window.scrollTo(0, run);

                     if (timeElapsed < duration) requestAnimationFrame(animation);
              };

              requestAnimationFrame(animation);
       };


       return (
              <>
                     <footer id='Contact' className='max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen relative py-5 bg-blue-40 flex flex-col justify-between  bg-[var(--primary-color)]  font-["font"]'>
                            <div className="prt-1 w-full h-[40%] bg-green-60 flex gap-1 font-['font'] ">
                                   <div className="w-1/2 bg-red-0 h-full md:text-2xl lg:text-xl ">
                                          <h1 className='border-b-1 border-zinc-600/50'>Menu</h1>
                                          <a href="#Home" onClick={(e) => smoothScrollTo(e, "Home")}>
                                                 <h1 className='cursor-pointer'>Home!</h1>
                                          </a>
                                          <a href="#Work" onClick={(e) => smoothScrollTo(e, "Work")}>
                                                 <h1 className='cursor-pointer'>Work!</h1>
                                          </a>
                                          <a href="#About" onClick={(e) => smoothScrollTo(e, "About")}>
                                                 <h1 className='cursor-pointer'>About!</h1>
                                          </a>
                                          <a href="#Services" onClick={(e) => smoothScrollTo(e, "Services")}>
                                                 <h1 className='cursor-pointer'>Services!</h1>
                                          </a>
                                          <a href="#Contact" onClick={(e) => smoothScrollTo(e, "Contact")}>
                                                 <h1 className='cursor-pointer'>Contact!</h1>
                                          </a>
                                   </div>
                                   <div className="w-1/2 bg-red-0 h-full  md:text-2xl lg:text-xl ">
                                          <h1 className='border-b-1 border-zinc-600/50'>Social</h1>

                                          <a target='_blank' href="https://www.instagram.com/the_jekeyy/">   <h1 className='cursor-pointer hover:border-b-2 w-fit'>Instagram</h1></a>
                                          <a target='_blank' href="https://linkedin.com/in/the-jekey/">   <h1 className='cursor-pointer hover:border-b-2 w-fit'>Linkedin</h1></a>
                                          <a target='_blank' href="https://www.youtube.com/@the_jekey">  <h1 className='cursor-pointer hover:border-b-2 w-fit'>YouTube</h1></a>
                                          <a target='_blank' href="https://github.com/the-jekey">  <h1 className='cursor-pointer hover:border-b-2 w-fit'>Github</h1></a>
                                          <a target='_blank' href="https://x.com/the_jekey">  <h1 className='cursor-pointer hover:border-b-2 w-fit'>X</h1></a>
                                   </div>

                            </div>
                            <div className="prt-1 w-full  leading-9 md:leading-24 lg:leading-32 select-none ">
                                   <h1 className='uppercase text-[10.5vh] md:text-[12vh]  opacity-75 lg:text-[25vh]'>Jekey&copy;</h1>
                                   <h1 className='md:text-xl'>(Web Designer & Developer) </h1>
                            </div>
                            <div className=" flex justify-between items-end">
                                   <h1 className='uppercase md:text-2xl lg:text-sm'>
                                          &copy; 2025 <br />
                                          <span className='text-2xl md:text-5xl lg:text-3xl'> the Jekey!</span> <br />
                                          All rights reserved.
                                   </h1>
                                   <h1 className='text-[14px] md:text-xl lg:text-sm flex items-center flex-col '>
                                          <div className=" flex items-center gap-0.5 md:gap-1">Local Time <span className='globe'> <GiWorld /></span></div>
                                          <div className="globee"> <LocalTime /></div>

                                   </h1>
                            </div>
                            <div
                                   className="Home top absolute bottom-15 md:bottom-20 md:right-8 right-5"
                                   onClick={(e) => smoothScrollTo(e, "Home")}
                                   style={{ cursor: 'pointer' }}
                            >
                                   <TopGo />
                            </div>
                     </footer>
              </>
       )
}

export default Footer
