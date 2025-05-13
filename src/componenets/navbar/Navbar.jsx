import React, { useState, useEffect } from 'react';

function Navbar({activeSection = 'home'}) {
    const [active, setActive] = useState('home');
    const [theme, setTheme] = useState('emerald');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 for full-screen menu toggle
    useEffect(() => {
        setActive(activeSection);
    }, [activeSection]);
    
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleSetActive = (section) => {
        setActive(section);
        const el = document.getElementById(section);
        if (el) {
            const offset = -80; // adjust this value to your navbar height or more (negative to scroll above)
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition + offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    

    const toggleTheme = () => {
        setTheme(prev => (prev === 'emerald' ? 'night' : 'emerald'));
    };

    return (
        <>
            {/* NAVBAR */}
            <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-[1.5rem] backdrop-blur-md bg-opacity-85 p-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl font-rouge text-sky-300">A K .</a>
                </div>

                <div className="flex-none gap-[1.5rem]">

                    {/* 🌐 Desktop Menu */}
                    <ul className="hidden lg:flex space-x-6 font-semibold text-xl">
                        {["home", "about", "resume", "projects", "contact"].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => handleSetActive(item)}
                                    className={`relative transition-all duration-300 ease-in-out hover:text-primary 
                                        ${
                                            active === item
                                                ? "text-sky-0 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-sky-400 after:via-emerald-400 after:to-sky-400 after:rounded-sm after:animate-pulse"
                                                : "text-gray-600"
                                        }
                                        hover:-translate-y-0.5
                                    `}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* 🌗 Theme Toggle */}
                    <button onClick={toggleTheme} className="btn btn-sm text-xl">
                        <span className="text-2xl">{theme === 'emerald' ? '🌙' : '🌞'}</span>
                    </button>

                    {/* 📱 Hamburger Menu */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* ✅ FULL-SCREEN MOBILE MENU */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-base-100 bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-xl font-semibold lg:hidden transition-all duration-300">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-5 right-5 btn btn-sm btn-circle hover:text-primary"
                    >
                        ✕
                    </button>
                    {["home", "about", "resume", "projects", "contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleSetActive(item)}
                            className={`text-2xl ${
                                active === item ? "text-primary underline underline-offset-8" : ""
                            }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}

export default Navbar;
