import React from 'react'

const Menu = () => {
       return (
              <>
                     <div className="Menu max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-screen font-black bg-gray-400  font-['font'] ">
                            <div className="nav  w-full flex items-center justify-end py-3">
                                   <div className="menu size-15 bg-gray-600 rounded-full flex flex-col  gap-2 items-center justify-center cursor-pointer">
                                          <div className="border-t-3 w-8"></div>
                                          <div className="border-t-3 w-8"></div>
                                   </div>
                            </div>
                            <div className="lniks w-full gap-2 flex flex-col text-3xl justify-center items-center py-20">
                                   <h1>Home</h1>
                                   <h1>Projects</h1>
                                   <h1>About us</h1>
                                   <h1>Tesimonial</h1>
                                   <h1>Contact us</h1>
                            </div>
                     </div>
              </>
       )
}

export default Menu
