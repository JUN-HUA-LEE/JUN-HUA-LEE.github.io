import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SparklesCore } from "@/components/ui/Sparkles.tsx";

const Footer = () => {
    return (
        <footer className="relative bg-black text-white py-6 overflow-hidden">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

            <div className="w-full h-full absolute inset-0">
                <SparklesCore
                    id="tsparticlesfooter"
                    background={"transparent"}
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
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
            <div className="container mx-auto mt-4 text-center relative z-10">
                <p>© 2024 Jun Hua Lee. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
