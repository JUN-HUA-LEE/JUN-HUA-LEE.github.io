import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
    setAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const underlineVariants = {
    hidden: { width: 0, left: "50%" },
    visible: { width: "100%", left: 0, transition: { duration: 0.3 } }
  };

  return (
      <motion.nav
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: show ? 1 : 0, y: show ? 0 : -100 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 w-full py-4 px-6 z-50 flex items-center justify-center shadow-md transition-all duration-300 ${
              atTop ? 'bg-transparent' : 'bg-black bg-opacity-50'
          }`}
      >
        <div className="flex items-center gap-8">
          {[ "Experience", "Education"].map((item, index) => (
              <motion.div
                  key={index}
                  className="relative font-bold text-2xl text-white"
                  initial="hidden"
                  whileHover="visible"
              >
                <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer relative"
                >
                  {item}
                  <motion.div
                      className="absolute bottom-[-8px] left-0 h-[2px] bg-white"
                      variants={underlineVariants}
                  />
                </ScrollLink>
              </motion.div>
          ))}
        </div>
      </motion.nav>
  );
};

export default Navbar;
