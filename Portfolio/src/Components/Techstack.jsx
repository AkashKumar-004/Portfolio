import { motion } from 'framer-motion';
import ReactLogo from '../assets/tech/react.png';
import MongodbLogo from '../assets/tech/mongodb.png';
import ExpressLogo from '../assets/tech/expressjs.png';
import NodeLogo from '../assets/tech/node.jpg';
import MysqlLogo from '../assets/tech/mysql.png';
import JavaLogo from '../assets/tech/java.png';
import JavaScriptLogo from '../assets/tech/js.png';
import htmllogo from '../assets/tech/html.png'
const techStack = [
  MongodbLogo,
  ExpressLogo,
  ReactLogo,
  NodeLogo,
  JavaLogo,
  MysqlLogo,
  JavaScriptLogo,
  htmllogo,
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 px-6 bg-[#1e293b]">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 tracking-wide">
        Tech Stack
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-12 place-items-center">
        {techStack.map((icon, index) => (
          <motion.div
            key={index}
            className="w-32 h-32 bg-[#0f172a] rounded-full flex items-center justify-center shadow-md hover:shadow-blue-500/40 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              rotate: [0, 5, -5, 0],
              scale: 1.1,
              transition: { duration: 0.5, type: "spring" },
            }}
            viewport={{ once: true }}
          >
            <img
              src={icon}
              alt={`tech-${index}`}
              className="h-16 w-16 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
