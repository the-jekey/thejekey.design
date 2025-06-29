import React from 'react'

const Hover = () => {
       return (
              <>
                     <div className="max-w-screen mx-auto px-6 md:px-8 lg:px-10 h-[90vh]  flex flex-col justify-center items-center gap-1 lg:flex-row">
                            <div className="partone w-full h-[40vh] lg:h-[50vh] lg:w-[80vh] bg-zinc-700 rounded-xl active:bg-purple-500 hover:bg-purple-500 transition-all duration-300 ease-in-out">

                            </div>
                            <div className="parttwo w-full h-[30vh] lg:h-[50vh] lg:w-[30vw] bg-zinc-600 rounded-xl active:bg-yellow-500 hover:bg-yellow-500 transition-all duration-300 ease-in-out ">

                            </div>
                     </div>
              </>
       )
}

export default Hover
