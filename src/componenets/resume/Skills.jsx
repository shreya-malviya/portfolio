import React from "react";
import {
  FaNodeJs, FaReact, FaGitAlt, FaDocker, FaAws, FaLinux, FaJava, FaPython,
} from "react-icons/fa";
import {
  SiExpress, SiSocketdotio, SiJavascript, SiPostgresql, SiMongodb, SiMongoose,
  SiRedux, SiSpringboot, SiCplusplus, SiPostman, SiRedis
} from "react-icons/si";
import { PiDatabaseLight } from "react-icons/pi";

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
    { icon: SiExpress, label: "Express" },
    { icon: SiSocketdotio, label: "Socket.io" },
    { icon: SiRedis, label: "Redis" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: FaJava, label: "Java" },
    { icon: PiDatabaseLight, label: "DSA" },
    { icon: SiMongodb, label: "MongoDB" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiMongoose, label: "Mongoose" },
    { icon: FaGitAlt, label: "Git" },
    { icon: SiSpringboot, label: "Spring Boot" },
    { icon: FaLinux, label: "Linux" },
    { icon: FaReact, label: "React" },
    { icon: SiRedux, label: "Redux" },
  ];

  const secondarySkills = [
    { icon: FaPython, label: "Python" },
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
        <h3 className="text-xl sm:text-2xl font-bold mb-2 cursor-default mt-4">✨ Primary Skills</h3>
        <div className="flex flex-wrap flex-row gap-6 sm:gap-8 pt-6  lg:border-r lg:border-border/30 lg:pr-10">
          {primarySkills.map((skill) => (
            <SkillItem key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      {/* Secondary Skills */}
      <section className="w-full lg:w-1/2">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 cursor-default mt-4">🚀 Secondary Skills</h3>
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
