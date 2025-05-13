import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import pfp from '../../assets/pics/pfp.png';
import './hero.css';

function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="hero min-h-[calc(100vh-6rem)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-[85%] mx-auto p-5 text-center lg:text-left">
        
        {/* Image Loader Block */}
        <div className="relative w-full max-w-xs sm:max-w-sm p-6 flex justify-center items-center">
          {!imageLoaded && (
            <div className="w-full h-full flex items-center justify-center">
              {/* Loader Spinner */}
              <div className="w-12 h-12 border-4 border-dashed border-primary rounded-full animate-spin"></div>
            </div>
          )}

          <img
            src={pfp}
            className={`w-full max-w-xs sm:max-w-sm transition-opacity duration-500 ease-in-out ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
            alt="pfp"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            Hi, I am Anshu Kumar
            <br />
            <span className="text-xl sm:text-2xl">
              I am a
              <span className="text-primary text-lg sm:text-2xl">
                <Typewriter
                  words={[" Software Developer", " Fullstack Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
          </h1>

          <p className="pt-6 pb-4">
            Passionate about building full-stack applications with delightful user experiences.
          </p>
          <p className="pb-4">
            My very own social media is live now!{" "}
            <a
              href="https://waverr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="color-change"
            >
              Check it out here
            </a>
            <span className="block text-sm text-gray-500">Don't forget to turn on cookies to avoid errors.</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://github.com/anshu-kumar27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-4xl hover:text-primary hover:shadow-lg hover:shadow-sky-400/50 transition duration-300 p-3 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anshu-kumar-63259521b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-4xl hover:text-primary hover:shadow-lg hover:shadow-sky-400/50 transition duration-300 p-3 rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:anshukumar3552@gmail.com"
              className="text-gray-500 text-4xl hover:text-primary hover:shadow-lg hover:shadow-sky-400/50 transition duration-300 p-3 rounded-full"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
