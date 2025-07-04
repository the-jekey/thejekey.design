import React from 'react'
import Button from './Button'

const BookCall = () => {
       return (
              <>
                     <div className="max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen font-['font'] flex items-center justify-center bg-[var(--primary-color)]  text-white select-none  ">
                            <div className="w-full h-[70%] bg-black rounded-xl flex flex-col items-center justify-between py-2 lg:w-full lg:h-[80%]">
                                   <div className="txt text-[10px] uppercase md:text-[14px] lg:text-[12px] "><h1>( Get Your Unfair Advantage )</h1></div>
                                   <div className="btn text-5xl text-center leading-10 tracking-tighter uppercase md:text-8xl lg:text-6xl md:leading-19 lg:leading-12 "><h1>Let's make <br /> it happen !</h1></div>
                                   <div className="btn">
                                          <Button />
                                   </div>
                                   <div className="email text-[10px] md:text-[16px] lg:text-[12px] ">
                                          <a href="mailto:Workwithjekey@gmail.com"><h1>( Workwithjekey@gmail.com )</h1></a>

                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default BookCall
