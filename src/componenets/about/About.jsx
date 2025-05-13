import React from 'react';

function About() {
  return (
    <div className='w-[85%] mx-auto text-left mb-4 mt-2 pt-2 pb-4 cursor-default'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 pb-4'>
        <span
          role='img'
          aria-label='rocket'
          className='mr-2 text-5xl md:text-6xl'
        >
          🚀
        </span>
        About Me
      </h1>
      
      <div className="flex flex-col md:flex-row items-center">
        {/* GIF on top on mobile, left on larger screens */}
        <div className="w-full md:w-[30%] mb-4 md:mb-0">
          <img 
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjB2dHdpZmI0dXVweDI2NjU1Z2dvNWczbWpmZHBpN3g4eHppZzl2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif" 
            alt="Developer GIF" 
            className="w-full h-auto" 
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-[70%] pl-6">
          <h2 className="text-2xl font-semibold mb-3">
            Hello! I'm Anshu 👋
          </h2>
          <p className="text-lg mb-4">
            I thrive in challenging projects and enjoy working in fast-paced learning environments. 🚀 I'm passionate about backend development and have a strong foundation in Data Structures and Algorithms (DSA). With over 6 months of hands-on experience with Node.js, I’m constantly refining my skills. 💡
          </p>

          <p className="text-lg mb-4">
            My primary tech stack includes <span className="font-semibold">JavaScript</span> and <span className="font-semibold">Java</span>, but I’m eager to expand my expertise and explore new technologies. I’m a firm believer in continuous learning and look forward to contributing to larger projects. 🌱
          </p>

          <div className="space-y-2">
            <p><span role="img" aria-label="rocket">🚀</span> Currently working on: social media (bug fixes) & Ai</p>
            <p><span role="img" aria-label="satellite">🔭</span> Exploring: Ai (Python) | Data structures </p>
            <p><span role="img" aria-label="nerd">💡</span> Passionate about: Full Stack Development | Ai</p>
            <p><span role="img" aria-label="email">📫</span> Reach me at: <a href="mailto:anshukumar3552@gmail.com" className="text-blue-500">anshukumar3552@gmail.com</a></p>
            <p><span role="img" aria-label="coding">👨‍💻</span> Status: Code. Debug. Deploy. Repeat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
