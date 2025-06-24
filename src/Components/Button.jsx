import React from 'react'
import { DiCssTricks } from "react-icons/di";

const Button = () => {
       return (
              <div>
                     <button className='group px-8 py-4 bg-black active:scale-97 transition-all  text-white rounded-full flex  text-base font-["font"] font-semibold'>
                            Book a Call
                            <span className='text-base relative top-[3px] ml-[4px] transition-transform duration-300 group-hover:rotate-90'>
                                   <DiCssTricks />
                            </span>
                     </button>
              </div>
       )
}

export default Button;
