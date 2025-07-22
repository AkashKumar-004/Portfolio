import Npo from'../assets/projects/NPO.png'
import Turf from '../assets/projects/Turf.png'
import Blog from '../assets/projects/Blog.png'
import Portfolio from '../assets/projects/Portfolio.png'
import { motion } from 'framer-motion';
const Projects = () => {
  const projects = [
    {
        id: 1,
        title: "NPO",
        description: "NPO is a full-stack web application designed to minimize the gap between donors and receivers in a transparent and efficient manner. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and secured with JWT (JSON Web Token) authentication, this platform empowers non-profit initiatives by enabling seamless, secure, and trackable donations.The primary goal of the application is to act as a digital bridge that connects individuals or organizations willing to donate with those who are in need, such as underprivileged families, education funds, healthcare needs, disaster relief campaigns.",
        image: Npo,
        demoLink: "https://npo-website.vercel.app/",
        codeLink: "https://github.com/AkashKumar-004/NPO-WEBSITE",
    },
    {
      id: 2,
        title: "Blog Summarizer",
        description: "A MERN-based blogging platform with Hugging Face integration to auto-generate summaries.",
        image: Blog,
        demoLink: "https://blog-website-pi-plum.vercel.app/",
        codeLink: "https://github.com/AkashKumar-004/Blog-Website",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, single-page portfolio built using React.js to showcase my skills, projects, and contact information in an interactive and responsive design. The site highlights my expertise as a MERN stack developer, featuring smooth animations, a dark-themed UI, and floating tech icons for a visually engaging experience.",
        image: Portfolio,
        demoLink: "https://portfolio-inky-chi-31.vercel.app/",
        codeLink: "https://github.com/AkashKumar-004/Portfolio",
    },
    {
        id: 4,
        title: "Turf-Hub",
        description: "TurfHub is a full-stack web application designed to simplify turf booking and ground management for players and turf owners. The platform enables users to seamlessly book available time slots, while turf managers can monitor and manage bookings, timings, and availability in real-time.Built using the MERN stack, the system supports role-based access for users (players) and admins (turf owners), ensuring smooth coordination between booking demand and turf operations.",
        image: Turf,
        demoLink: "",
        codeLink: "https://github.com/AkashKumar-004/TURF-PRO",
    },
    ];

    const fadeIn = (direction = 'up', delay = 0) => ({
      initial: { opacity: 0, y: direction === 'up' ? 40 : -40 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay },
    });
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            {...fadeIn('up', index * 0.3)}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-10 bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-blue-500/20 transition duration-300`}
          >
            <div className="md:w-1/2">
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-xl object-cover w-full h-64 shadow-lg hover:scale-[1.03] transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-blue-300 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md"
                  >
                    🚀 Live Demo
                  </a>
                )}

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
