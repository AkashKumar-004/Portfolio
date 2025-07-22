import { Typewriter } from 'react-simple-typewriter';
import Profile from '../assets/tech/Profile.png'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="About" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 bg-[#0f172a]">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={Profile}
          alt="Dev avatar"
          className="w-64 h-64 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-4">Hi, I'm <span className="text-blue-400">Akash Kumar S</span></h2>
        <h3 className="text-2xl mb-4 text-blue-300 font-semibold">
          <Typewriter
            words={['MERN Developer', 'AI Enthusiast', 'Fullstack Engineer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
        <p className="text-gray-300 mb-6">
          I’m a passionate fullstack developer specialized in the MERN stack with a strong interest in AI-powered web applications.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition">
            View Projects
          </a>
          <a href="#contact" className="border border-blue-400 hover:bg-blue-500 hover:text-white text-blue-400 px-6 py-2 rounded-xl transition">
            Contact Me
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1dElcrCJegPmOY2LqE5vRhxxnRDPcnowP" download className="border border-blue-400 hover:bg-blue-500 hover:text-white  text-blue-400 px-6 py-2 rounded-xl transition">
            Download Resume
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
