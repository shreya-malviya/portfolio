import React, { useEffect, useRef, useState } from 'react';
import Navbar from './componenets/navbar/Navbar';
import HeroSection from './componenets/hero/HeroSection';
import Project from './componenets/projects/Project';
import About from './componenets/about/About';
import Resume from './componenets/resume/Resume';
import Contact from './componenets/contact/Contact';
import Cc from './componenets/Cc';
import AnimatedSection from './AnimatedSection';

function MainFile() {
  const [activeSection, setActiveSection] = useState("home");

  // Refs to all sections
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    resume: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    const handleScroll = () => {
      const buffer = 200; // adjust based on navbar height and offset you want
      let current = "home";

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top <= buffer) {
            current = key;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
        <Navbar activeSection={activeSection} />
        <div ref={sectionRefs.home} id="home">
          <HeroSection />
        </div>

      <Divider />
      <div ref={sectionRefs.about} id="about">
  <AnimatedSection direction="center">
    <About />
  </AnimatedSection>
</div>

<Divider />
<div ref={sectionRefs.resume} id="resume">
  <AnimatedSection direction="right">
    <Resume />
  </AnimatedSection>
</div>

<Divider />
<div ref={sectionRefs.projects} id="projects">
  <Project/>
</div>

<Divider />
<div ref={sectionRefs.contact} id="contact">
  <AnimatedSection direction="center">
    <Contact />
  </AnimatedSection>
</div>

      <Divider />
      <Cc />
    </div>
  );
}

const Divider = () => (
  <div className="w-[85%] h-[2px] mx-auto my-6 bg-base-content/20" />
);

export default MainFile;
