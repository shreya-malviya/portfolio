import React,{useState} from 'react'
import ProjectMainCard from './ProjectMainCard'
import chatAppImg from '../../assets/projects/mernChat.png'
import waverImg from '../../assets/projects/java.png'
import portfolioImg from '../../assets/projects/portfolio.png'
import AnimatedSection from '../../AnimatedSection'
import ecommerceImg from '../../assets/projects/ecom.png'
import facultyImg from '../../assets/projects/faculty.png'
import folderImg from '../../assets/projects/filefolder.png'
import ProjectOpen from './ProjectOpen'
import { MdUpdate, MdLiveTv } from 'react-icons/md';


function Project () {
  const projects = [
    {
      name: (
        <>
          ✨ Social Media
          <MdLiveTv className="inline-block mr-2 text-red-500" />
        </>
      ),
      tech: [
        'Node.js',
        'Express.js',
        'JWT',
        'Mongodb',
        'React',
        'Socket.io',
        'Redux',
        'simple-peer',
        'multer',
        'tailwind',
        'OAuth',
      ],
      githublink: '/',
      desc: [
  "🚧 in development",
  "💬 Created a full-duplex real-time chat application using Socket.io & WebSockets.",
  "🛡️ Implemented JWT authentication and Redux for secure state management.",
  "🧠 Backend with Express & MongoDB, Frontend with React & Tailwind.",
  "📬 Features include online status, message notifications, audio/video calls, private profiles, and more.",
  "🛠️ Bug fixes on the way…"
],

      img: chatAppImg
    },
    {
        name: '✨ E-commerce',
        tech: [
          'Node.js',
          'React',
          'Redux',
          'Express.js',
          'Mongodb',
          'Nodemailer',
          'Bootstrap'
        ],
        githublink: '/',
        desc: [
            "🎓 This was a learning project, main focus was in the BACKEND",
            "🛍️ Built a full-featured e-commerce platform with a sleek user interface.",
            "👤 Users can register/login, browse products, filter by category, and manage carts.",
            "📦 Includes secure order placement and cart operations.",
            "📧 Integrated NodeMailer for password recovery via email.",
            "🛠️ Admin dashboard with product/user management and order overview.",
            "🧰 Features role-based access for users and admins with route protection.",
            "🔐 Passwords encrypted using SHA-256 & JWT-based authentication.",
            "🎨 UI styled using React, Redux, Bootstrap, and Tailwind for responsiveness.",
          ],
        img:ecommerceImg
      },
      {
        name: '✨ File_Folder_System',
        tech: ['C++', 'DSA', 'Searching', 'Array', 'Queue','Stack' ,'Sorting'],
        githublink: '/',
        desc: [
            "📁 Designed a file-folder simulation system using C++.",
            "🧮 Implemented data structures like Arrays and Queues for in-memory organization.",
            "🔍 Features searching & sorting algorithms for efficient access.",
            "🧭 Built with a menu-driven interface for user interaction.",
            "🛠️ Follows procedural programming principles for structured logic.",
            "💾 Simulates file and folder operations without actual disk I/O.",
            "🧑‍💻 Great for understanding low-level file system behavior and logic building.",
          ],          
        img:folderImg
      },
    {
      name: (
        <>
          ✨ Portfolio
          <MdLiveTv className="inline-block mr-2 text-red-500" />
        </>
      ),
        tech: ['React', 'Tailwind CSS', 'Typewriter','Framer motion','Daisyui'],
        githublink: '/',
        desc: [
            "👋 Hello there! You're already exploring the portfolio itself 🎯",
            "💻 Built using React and styled with Tailwind CSS & DaisyUI.",
            "🎞️ Smooth, engaging animations powered by Framer Motion.",
            "⌨️ Dynamic typewriter effect for text animations adds flair ✨",
            "🎨 Designed with a focus on minimalism, interactivity, and performance.",
            "🌐 Fully responsive and mobile-friendly for all screen sizes.",
            "📬 Showcases full-stack skills, projects, and tech versatility.",
          ],
        img:portfolioImg
      },
    {
      name: 'Chat application',
      tech: ['Java', 'Springboot', 'React', 'Websocket',  'Tailwind', 'Mongodb'],
      githublink: '/',
      desc: [
        "🎓This was a learning project",
        "🌊 Exploring the diversity in my tech stack with a Java-based chat app!",
        "☕ Built using Java, Spring Boot, and WebSockets for real-time communication.",
        "🛠️ Frontend crafted with React and styled using Tailwind CSS.",
        "📡 Allows users to create or join chat rooms to communicate seamlessly.",
        "📁 Backend powered by MongoDB for storing messages & room data.",
        "🔄 Conceptually similar to my MERN chat app, but with a new backend flavor!",
        "🧪 A fun experiment to deepen my understanding of multi-tech architectures."
      ],      
      img:waverImg
    },
      {
        name: 'Faculty-Website',
        tech: ['Nodejs', 'Express', 'React', 'Redux', 'Bootstrap', 'Mongodb'],
        githublink: '/',
        desc: [
            "🏫 Developed as part of a college project at Shoolini University.",
            "📚 A full-stack Faculty Directory web app built with the MERN stack.",
            "👨‍🏫 Showcases detailed info about professors — names, departments, roles & contact details.",
            "🔍 Users can easily filter faculty by department or course selections.",
            "🧰 Built using Node.js, Express, MongoDB on the backend.",
            "🎨 Frontend crafted with React, styled using Bootstrap, with global state via Redux.",
            "🎓 A clean, functional project to represent academic structure digitally."
          ],
        img:facultyImg
      },
  ]
const [showModal, setShowModal] = useState(false)
const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
    <div className='w-[85%] mx-auto text-left mt-2 pt-2'>
      <h1 className='text-4xl md:text-5xl font-bold mb-4 pb-4 mt-6'>
        <span
          role='img'
          aria-label='lightbulb'
          className='mr-2 text-5xl md:text-6xl'
        >
          💡
        </span>
        Projects
      </h1>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-4 pt-2 '
      onClick={() => setShowModal(true)}
      >
        {projects.map((project, index) => (
  <AnimatedSection key={index} direction={window.innerWidth >= 1024 ? index < 3 ? 'left' : 'right' : index % 2 === 0 ? 'left' : 'right'  }>
  <div onClick={()=>setSelectedProject(project)}>
  <ProjectMainCard
    name={project.name}
    tech={project.tech}
    githublink={project.githublink}
    desc={project.desc}
    img={project.img}
  />
  </div>
 </AnimatedSection>
        ))}
      </div>


    </div>
    {selectedProject && (
  <ProjectOpen
    name={selectedProject.name}
    tech={selectedProject.tech}
    githublink={selectedProject.githublink}
    desc={selectedProject.desc}
    img={selectedProject.img}
    onClose={() => setSelectedProject(null)}
  />
)}
          </>
  )
}

export default Project
