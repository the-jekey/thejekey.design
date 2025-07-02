import React from 'react'

const About = () => {
       return (
              <div className='min-h-screen max-w-screen mx-auto px-6 md:px-8 lg:px-10 bg-[var(--primary-color)]  font-["font"]' >
                     <div className="txt w-full flex flex-col  justify-center items-center text-4xl uppercase py-5  ">
                            <h1>Designer</h1>
                            <h1>Developer</h1>
                     </div>
                     <div className="img w-full h-[60vh] overflow-hidden rounded-xl  ">
                            <img className='h-full w-full object-cover grayscale-100 active:grayscale-0 hover:grayscale ' src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="About" />
                     </div>
                     <div className="pl- about w-full font-['font'] font-black text-[18px] text-start py-5  ">
                            <h1 className='w-[90%]'>With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive  impact on the digital landscape and your business.
                            </h1>
                     </div>
                     <div className="about w-full ">
                            <h1>(About Me)</h1>
                            <p className='text-sm'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. A amet consectetur odit similique sint veniam saepe iste quos distinctio alias.
                            </p>
                     </div>
              </div>
       )
}

export default About
