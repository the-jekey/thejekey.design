import React from 'react'
import Main from './Components/Main'
import LocomotiveScroll from 'locomotive-scroll';
import Service from './Components/Service';
import Hover from './Components/Hover';
import Footer from './Components/Footer';
import BookCall from './Components/BookCall';
import Menu from './Components/Menu';
import About from './Components/About';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="selection:bg-black selection:text-white">
        <About />
        <Main />
        <Menu />
        <BookCall />
        <Hover />
        <Service />
        <Footer />
      </div>
    </>
  )
}

export default App
