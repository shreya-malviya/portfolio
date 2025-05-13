import React, { useEffect } from "react";

function ProjectOpen({
  name = "",
  tech = [],
  githublink = "",
  desc = [],
  img = "",
  onClose,
}) {
    useEffect(() => {
        const handleOutsideClick = (e) => {
          if (e.target.classList.contains("modal-overlay")) {
            onClose();
          }
        };
    
        document.addEventListener("click", handleOutsideClick);
        
        // Prevent scrolling on the body when the modal is open
        document.body.style.overflow = "hidden";
    
        return () => {
          document.removeEventListener("click", handleOutsideClick);
    
          // Re-enable scrolling when modal is closed
          document.body.style.overflow = "auto";
        };
      }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 modal-overlay cursor-default">
      <div className="relative bg-base-100 rounded-xl w-[90%] max-w-xl shadow-2xl max-h-[90vh] overflow-y-scroll pl-6 pr-6 pb-6">
        
        {/* ✖ Sticky Close Button */}
        <div className="sticky top-0 bg-base-100 z-10 flex justify-end pr-2">
          <button
            onClick={onClose}
            className="text-gray-500 text-xl group-hover:text-cyan-400 font-bold hover:text-glow p-1 pt-2"
          >
            ✖
          </button>
        </div>

        {/* 📸 Image */}
        <img
          src={img}
          alt={name}
          className="w-full h-auto object-cover rounded-lg mb-4 mt-6"
        />

        {/* 📛 Title */}
        <h2 className="text-3xl font-bold mb-2">{name}</h2>

        {/* 🛠️ Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4 mt-4">
          {tech.map((element, index) => (
            <span key={index} className="badge badge-outline px-3 py-1">
              {element}
            </span>
          ))}
        </div>

        {/* 📃 Description */}
        <div className="space-y-1 text-sm">
          {desc.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectOpen;
