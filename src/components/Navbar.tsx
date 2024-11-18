import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
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
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md z-50 flex items-center justify-center py-4 px-6"
    >
      <div className="flex items-center gap-8">
        {["Home", "About", "Projects"].map((item, index) => (
          <motion.div 
            key={index} 
            className="relative font-bold text-2xl text-white"
            initial="hidden"
            whileHover="visible"
          >
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative">
              {item}
              <motion.div 
                className="absolute bottom-[-8px] left-0 h-[2px] bg-white"
                variants={underlineVariants}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
