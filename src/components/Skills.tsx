"use client";

import { motion, Variants } from 'framer-motion';

import { FaHtml5, FaCss3Alt, FaPython, FaGithub, FaJsSquare, FaReact, FaNodeJs, FaLinux } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: 'HTML5', color: 'from-orange-500 to-red-500', icon: FaHtml5 },
  { name: 'CSS3', color: 'from-blue-500 to-cyan-500', icon: FaCss3Alt },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: FaJsSquare },
  { name: 'Python', color: 'from-blue-500 to-yellow-500', icon: FaPython },
  { name: 'React', color: 'from-cyan-400 to-blue-500', icon: FaReact },
  { name: 'Node.js', color: 'from-green-500 to-green-700', icon: FaNodeJs },
  { name: 'Git & GitHub', color: 'from-gray-600 to-gray-800', icon: FaGithub },
  { name: 'Arduino', color: 'from-teal-500 to-teal-700', icon: SiArduino },
  { name: 'VS Code', color: 'from-blue-400 to-blue-600', icon: VscVscode },
  { name: 'Linux', color: 'from-yellow-500 to-orange-500', icon: FaLinux },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0b22]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div>
            <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">.MY SKILLS</h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack</h2>
          </div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ scale: 1.1, rotate: [-2, 2, 0], transition: { duration: 0.3 } }}
                  className="group relative flex flex-col items-center justify-center gap-3 w-24 h-28 sm:w-28 sm:h-32 lg:w-32 lg:h-36 glass-panel rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,225,255,0.3)]"
                >
                  {/* Glow Background on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${skill.color} transition-opacity duration-300`} />
                  
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl text-white bg-gradient-to-br ${skill.color} shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  
                  <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
