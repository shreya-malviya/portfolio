import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import {
  SiSocketdotio,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiRedux,
  SiSpringboot,
  SiCplusplus,
  SiPostman,
  SiRedis,
} from "react-icons/si";
import { PiDatabaseLight } from "react-icons/pi";

// Custom SVG icons for UiPath and ROS2
const UiPathIcon = () => (
  <svg
    viewBox="0 0 256 256"
    className="w-10 h-10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="256" height="256" fill="#fefefe" />
    <path
      d="M69.5,49.4H206v157.2H49.9V69.5H69.5V49.4z M86.4,86.4v83.2h29.8c20.5,0,32.8-11.3,32.8-29.3c0-18.2-12.4-30.2-32.8-30.2H108V86.4H86.4z M108,129.2h7.9c9.1,0,14.8-4.7,14.8-12.1s-5.7-11.9-14.8-11.9H108V129.2z"
      fill="#F36F21"
    />
  </svg>
);

const Ros2Icon = () => (
  <svg
    viewBox="0 0 512 512"
    className="w-10 h-10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M256 0C114.84 0 0 114.836 0 256s114.84 256 256 256 256-114.836 256-256S397.16 0 256 0zm0 472c-119.296 0-216-96.704-216-216S136.704 40 256 40s216 96.704 216 216-96.704 216-216 216zm-76-280c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm76 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24zm76 0c13.255 0 24-10.745 24-24s-10.745-24-24-24-24 10.745-24 24 10.745 24 24 24z"
      fill="#223F93"
    />
  </svg>
);

const SkillItem = ({ icon: Icon, label }) => (
  <div className="relative group cursor-pointer">
    <div className="text-4xl sm:text-5xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-primary p-1">
      <Icon />
    </div>
    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-foreground bg-background px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition duration-300 shadow-sm border border-border z-10 whitespace-nowrap">
      {label}
    </span>
  </div>
);

function Skills() {
  const primarySkills = [
    { icon: FaNodeJs, label: "Node.js" },
    { icon: SiSocketdotio, label: "Socket.io" },
    { icon: SiRedis, label: "Redis" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: FaPython, label: "Python" },
    { icon: PiDatabaseLight, label: "DSA" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMongoose, label: "Mongoose" },
    { icon: FaGitAlt, label: "Git" },
    { icon: SiSpringboot, label: "Spring Boot" },
    { icon: FaLinux, label: "Linux" },
    { icon: FaReact, label: "React" },
    { icon: SiRedux, label: "Redux" },
    // { icon: UiPathIcon, label: "UiPath" },
    // { icon: Ros2Icon, label: "ROS2" },
  ];

  const secondarySkills = [
    { icon: SiCplusplus, label: "C++" },
    { icon: SiPostman, label: "Postman" },
    { icon: FaDocker, label: "Docker" },
    { icon: FaAws, label: "AWS" },
    { icon: PiDatabaseLight, label: "Agile" },
  ];

  return (
    <div className="p-4 sm:p-6 text-foreground flex flex-col lg:flex-row gap-10">
      {/* Primary Skills */}
      <section className="w-full lg:w-1/2">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 cursor-default mt-4">
          ✨ Primary Skills
        </h3>
        <div className="flex flex-wrap flex-row gap-6 sm:gap-8 pt-6  lg:border-r lg:border-border/30 lg:pr-10">
          {primarySkills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      {/* Secondary Skills */}
      <section className="w-full lg:w-1/2">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 cursor-default mt-4">
          🚀 Secondary Skills
        </h3>
        <div className="flex flex-wrap flex-row gap-6 sm:gap-8 pt-6">
          {secondarySkills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
