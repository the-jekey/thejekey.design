import React from 'react'

const Hover = () => {
       return (
              <>
                     <div className="max-w-screen mx-auto px-6 md:px-8 font-['font'] lg:px-10 p-10 bg-green-400 flex flex-col justify-center items-center gap-1  bg-[var(--primary-coloor)] ">
                            <div className="w-full bg-r00 flex flex-col items-center justify-center  gap-1 lg:flex-row">
                                   <div className="partone  cursor-pointer w-full h-[40vh] lg:h-[50vh] lg:w-[80vh] bg-zinc-700 rounded-xl active:bg-purple-500 hover:bg-red-500 transition-all duration-300 ease-in-out">
                                          <h1>Web Design</h1>

                                   </div>
                                   <div className="parttwo cursor-pointer  w-full h-[30vh] lg:h-[50vh] lg:w-[30vw] bg-zinc-600 rounded-xl active:bg-yellow-500 hover:bg-yellow-500 transition-all duration-300 ease-in-out ">
                                   </div>
                            </div>
                            <div className="w-full bg-r00 flex flex-col items-center justify-center gap-1 lg:flex-row">
                                   <div className="partone  cursor-pointer w-full h-[30vh] lg:h-[50vh] lg:w-[70vh] bg-zinc-700 rounded-xl active:bg-purple-500 hover:bg-purple-500 transition-all duration-300 ease-in-out">
                                   </div>
                                   <div className="parttwo cursor-pointer  w-full h-[40vh] lg:h-[50vh] lg:w-[75vh] bg-zinc-600 rounded-xl active:bg-purple-500 hover:bg-blue-500 transition-all duration-300 ease-in-out ">
                                   </div>
                            </div>
                     </div>
              </>
       )
}

export default Hover
