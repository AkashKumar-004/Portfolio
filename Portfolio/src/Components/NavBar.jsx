import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a] shadow-lg flex justify-between items-center px-6 py-4 text-white">
      <div className="text-2xl font-bold tracking-wide"><Link to="About" smooth={true} duration={500}>Akash Kumar S</Link></div>

      <div className="hidden md:flex gap-6 text-lg font-medium">
        <Link to="techstack" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Tech Stack</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Projects</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Contact</Link>
      </div>

      <div className="flex space-x-4 text-xl">
        <a href="https://github.com/AkashKumar-004" target="_blank"><FaGithub className="hover:text-blue-400" /></a>
        <a href="https://www.linkedin.com/in/akash-kumar-s-45a89927a/" target="_blank"><FaLinkedin className="hover:text-blue-400" /></a>
        <a href="https://leetcode.com/u/AK_2004/" target="_blank"><FaCode className="hover:text-blue-400" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
