import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="border-t border-white mb-4"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="text-white hover:text-gray-400 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400 transition-colors">About</Link>
          <Link to="/projects" className="text-white hover:text-gray-400 transition-colors">Projects</Link>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/jun-hua-lee" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://github.com/jun-hua-lee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p>© 2024 Jun Hua Lee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
