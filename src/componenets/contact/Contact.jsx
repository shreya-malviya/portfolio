import React, { useState, useEffect } from "react";
import axios from "axios";
import Links from "./Links";

function Contact() {
  const [showStatus, setShowStatus] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [isDark, setIsDark] = useState(false); // moved here

  // Detect theme using MutationObserver
  useEffect(() => {
    const checkTheme = () => {
      const dark = document.documentElement.getAttribute("data-theme");
      setIsDark(dark === "night");
      //   console.log()
    };

    checkTheme(); // initial

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "https://formspree.io/f/xanegwpv",
        formData
      );
      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Fade out after 1s
        setTimeout(() => setShowStatus(false), 1000);

        // Clear status after 2s
        setTimeout(() => setStatus(""), 2000);
      } else {
        setStatus("There was an issue. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-[85%] mx-auto text-left pl-0 pr-5 pb-5 pt-2">
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          <span
            role="img"
            aria-label="lightbulb"
            className="mr-2 text-5xl md:text-6xl"
          >
            🌟
          </span>
          Connect
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-[85%] mx-auto text-left mb-4 mt-4 pt-4 pb-4 bg-transparent">
        {/* Social Icons */}
        <div className="lg:w-1/2 w-full p-4">
          {/* contact lists icons */}
          <div className="">
            <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-left mb-6">
              💭 Get in Touch
            </h3>

            {/* Location / Email / LinkedIn */}
            <ul className="text-left space-y-2 pt-4">
              <li className="">📍 Naples, Italy</li>
              <li className="pt-2">📧 shreya7302@gmail.com</li>
              <li className="pt-2">🗺️ Open to Relocate or Remote Work</li>
            </ul>
            <Links isDark={isDark} />
          </div>
        </div>

        <div className="lg:w-1/2 w-full bg-white/10 backdrop-blur-md rounded-xl shadow-md p-4">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-left mb-6">
            ☘️ Let's Work Together{" "}
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border dark:bg-white/10 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border dark:bg-white/10 rounded-md"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border dark:bg-white/10 rounded-md"
                rows="5"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`transition-all duration-300 ease-in-out px-6 py-2 rounded-md 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-black"
                  : `transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 shadow-md shadow-emerald-300  ease-in-out${
                      isDark ? "text-white" : "text-black"
                    }`
              }
            `}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <p
              className={`mt-4 text-center font-semibold ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
