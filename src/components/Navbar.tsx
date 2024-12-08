import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const controlNavbar = () => {
    setAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 z-50 px-2 sm:px-4">
      <nav
        className={`flex items-center justify-between shadow-md rounded-full border border-neutral-700 py-2 sm:py-3 px-4 sm:px-6 transition-all duration-300 ${
          atTop ? 'bg-transparent' : 'bg-black bg-opacity-50'
        }`}
      >
        <ScrollLink to="home" smooth={true} duration={500} className="font-bold text-md text-white cursor-pointer">
          Jun Hua
        </ScrollLink>
        <div className="flex items-center gap-2 sm:gap-4 font-semibold text-md text-white">
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2"
          >
            <span className="hidden sm:block">Experience</span>
            <FaBriefcase className="block sm:hidden" />
          </ScrollLink>
          <ScrollLink
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2"
          >
            <span className="hidden sm:block">Education</span>
            <FaGraduationCap className="block sm:hidden" />
          </ScrollLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
