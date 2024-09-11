// Navbar.js
import './Navbar.css';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`z-30 sticky top-0 left-0 ${scrolled ? 'bg-opacity-60 bg-transparent dark:bg-transparent' : 'bg-white dark:bg-gradient-to-r from-blue-950 to-blue-800'} font-Inter backdrop-blur-xl shadow-md transition-colors duration-300`}>
      <div className="flex h-16 justify-between items-center mx-10 lg:mx-20">
        <div>
          <h3 className="text-sky-950 dark:text-white font-extrabold text-2xl font-Inter animate-typing overflow-hidden whitespace-nowrap">
            Shreyash Sinha.
          </h3>
        </div>

        <div className="hidden md:flex justify-between dark:text-white items-center text-sm">
          <div className="text-sky-700">
            <a href="#hero-section">Home</a>
          </div>
          <div className="ml-6"><a href="#skill-sections">Expertise</a></div>
          <div className="ml-6"><a href="#about">About</a></div>
          <div className="ml-6"><a href="#journey">Journey</a></div>
          <div className="ml-6"><a href="#contact-me">Collaborations</a></div>
        </div>

        <div className="hidden md:flex items-center">
          <button className="bg-transparent dark:bg-white dark:text-blue-950 hover:bg-sky-950 text-sky-950 font-semibold hover:text-white py-2 px-4 border border-sky-950 hover:border-transparent rounded transition duration-500 ease-out hover:ease-in">
            Contact Me
          </button>
          <button onClick={toggleTheme} className="ml-4 text-sky-950 dark:text-white focus:outline-none">
            {theme === 'dark' ? <IoSunny className="w-6 h-6" /> : <IoIosMoon className="w-6 h-6" />}
          </button>
        </div>

        <div className="md:hidden flex tranform transition-transform duration-300 items-center">
          <button onClick={toggleMenu} className="text-sky-950 dark:text-white focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
          <button onClick={toggleTheme} className="ml-4 text-sky-950 dark:text-white focus:outline-none">
            {theme === 'dark' ? <IoSunny className="w-6 h-6" /> : <IoIosMoon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} z-30 sticky top-0 left-0 bg-white dark:bg-blue-950 shadow-md backdrop-blur-md bg-opacity-60`}>
        <div className="px-2 pt-1 pb-3 text-center">
          <a href="#hero-section" className="block mt-2 text-gray-700 dark:text-white hover:text-sky-700">Home</a>
          <a href="#skill-sections" className="block mt-2 text-gray-700 dark:text-white hover:text-sky-700">Expertise</a>
          <a href="#about" className="block mt-2 text-gray-700 dark:text-white hover:text-sky-700">About</a>
          <a href="#journey" className="block mt-2 text-gray-700 dark:text-white hover:text-sky-700">Journey</a>
          <a href="#contact-me" className="block mt-2 text-gray-700 dark:text-white hover:text-sky-700">Collaborations</a>
          <button className="mt-4 bg-transparent hover:bg-sky-950 dark:hover:bg-blue-500 text-sky-950 dark:text-white hover:text-white font-semibold py-2 px-4 border border-sky-950 hover:border-transparent rounded transition duration-500 ease-out hover:ease-in">
  Contact Me
</button>

        </div>
      </div>
    </div>
  );
}
