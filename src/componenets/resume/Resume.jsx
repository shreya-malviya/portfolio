import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';

function Resume() {
  const tabs = ['Experience', 'Skills', 'Education'];
  const [active, setActive] = useState('Experience');
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleSetActive = (section) => {
    const currentIndex = tabs.indexOf(active);
    const nextIndex = tabs.indexOf(section);

    if (currentIndex !== nextIndex) {
      setDirection(nextIndex > currentIndex ? 1 : -1);
      setActive(section);
    }
  };

  const renderContent = () => {
    switch (active) {
      case 'Experience':
        return <Experience />;
      case 'Skills':
        return <Skills />;
      case 'Education':
        return <Education />;
      default:
        return null;
    }
  };

  const swipeVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
    }),
  };

  return (
    <div className='w-[85%] mx-auto text-left mb-4 mt-4 pt-4 pb-4 overflow-x-hidden overflow-y-auto'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 pb-4'>
        <span role='img' aria-label='rocket' className='mr-2 text-5xl md:text-6xl'>📜</span>
        Resume
      </h1>

      <ul className="flex justify-center space-x-6 font-semibold text-sm sm:text-base md:text-lg lg:text-2xl">
        {tabs.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleSetActive(item)}
              className={`transition-all duration-300 ease-in-out px-4 py-1 rounded-md pb-2 pt-2 sm:text-base
                ${active === item
                  ? "bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 text-white shadow-md shadow-emerald-300"
                  : "text-gray-600"
                } lg:hover:text-sky-400`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* Animated section */}
      {/* h-[650px] lg:h-[550px] transition-all duration-300 ease-in-out */}
      <div className="relative min-h-[650px] sm:min-h-[620px] md:min-h-[550px] lg:min-h-[480px] h-auto overflow-visible">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={active}
            custom={direction}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Resume;
