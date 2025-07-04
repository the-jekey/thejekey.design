import { motion } from 'motion/react';
import React from 'react';
import { MdOutlineCopyright } from "react-icons/md";

const Navbar = () => {

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
      <nav className='max-w-screen mx-auto py-6 text-black font-["font"] flex justify-between md:px-8 lg:px-10'>
        <div className="name flex md:text-2xl lg:text-3xl">
          <motion.h1
            initial={{ opacity: 0, }}
            animate={{ opacity: 0.7, }}
            transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.1], }}
          >Jekey </motion.h1>
          <span className='text-xs'><MdOutlineCopyright /></span>
        </div>
        <div className="links text-[14px] font-[sdf] font-semibold md:flex md:gap-4">
          <a href="#Services" onClick={(e) => smoothScrollTo(e, "Services")}>
            <motion.h1
              initial={{ opacity: 0, }}
              animate={{ opacity: 0.7, }}
              transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.1], }}
              className='cursor-pointer'>Services!</motion.h1>
          </a>
          <a href="#Work" onClick={(e) => smoothScrollTo(e, "Work")}>
            <motion.h1
              initial={{ opacity: 0, }}
              animate={{ opacity: 0.7, }}
              transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.1], }}
              className='cursor-pointer'>Work!</motion.h1>
          </a>
          <a href="#About" onClick={(e) => smoothScrollTo(e, "About")}>
            <motion.h1
              initial={{ opacity: 0, }}
              animate={{ opacity: 0.7, }}
              transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.1], }}
              className='cursor-pointer'>About!</motion.h1>
          </a>
          <a href="#Contact" onClick={(e) => smoothScrollTo(e, "Contact")}>
            <motion.h1
              initial={{ opacity: 0, }}
              animate={{ opacity: 0.7, }}
              transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.1], }}
              className='cursor-pointer'>Contact!</motion.h1>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
