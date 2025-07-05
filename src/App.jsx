import React from 'react'
import Main from './Components/Main'
import LocomotiveScroll from 'locomotive-scroll';
import Service from './Components/Service';
import Hover from './Components/Hover';
import Footer from './Components/Footer';
import BookCall from './Components/BookCall';
import Menu from './Components/Menu';
import About from './Components/About';
import ButtonAndMenu from './Components/ButtonAndMenu';



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="selection:bg-black selection:text-white ">
        <Hover />
        <Main />
        <Service />
        <About />
        <BookCall />
        <Footer />
      </div>
    </>
  )
}

export default App
