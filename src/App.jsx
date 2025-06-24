import React from 'react'
import Main from './Components/Main'
import About from './Components/About'
import LocomotiveScroll from 'locomotive-scroll';
import SheryImage from './Components/SheryImage';
import Service from './Components/Service';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="selection:bg-black selection:text-white">
        <Main />
        <Service />
        <About />
      </div>
    </>
  )
}

export default App
