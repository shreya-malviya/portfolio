import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Links({ isDark = false }) {
  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/shreya-malviya",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/in/-shreyamalviya",
    },
    { icon: MdEmail, label: "Email", link: "mailto:shreya7302@gmail.com" },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/hi_squared/",
    },
  ];

  return (
    <div className="flex justify-start gap-6 mt-6 mb-6">
      {socialLinks.map(({ icon: Icon, label, link }) => (
        <a
          key={label}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 mt-4 group relative transition duration-300 flex justify-left items-left"
        >
          {/* Apply responsive text sizes */}
          <Icon
            className={`text-3xl sm:text-2sxl md:text-3xl lg:text-4xl ${
              isDark ? "text-white" : "text-black"
            } hover:text-emerald-500 transition duration-300`}
          />

          <span
            className={`absolute bottom-[-1.8rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all ${
              isDark ? "text-white bg-black" : "text-black bg-white"
            } text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10`}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default Links;
