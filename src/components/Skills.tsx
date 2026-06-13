"use client";

import { motion, Variants } from 'framer-motion';

const skills = [
  { name: 'HTML', color: 'from-orange-500 to-red-500', icon: 'H' },
  { name: 'CSS', color: 'from-blue-500 to-cyan-500', icon: 'C' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600', icon: 'JS' },
  { name: 'Python', color: 'from-blue-500 to-yellow-500', icon: 'Py' },
  { name: 'C', color: 'from-blue-600 to-blue-800', icon: 'C' },
  { name: 'Git & GitHub', color: 'from-gray-600 to-gray-800', icon: 'Gt' },
  { name: 'Arduino', color: 'from-teal-500 to-teal-700', icon: 'Ar' },
  { name: 'VS Code', color: 'from-blue-400 to-blue-600', icon: 'VS' },
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0b22]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
          {/* Header */}
          <div className="lg:w-1/4">
            <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">My Skills</h4>
            <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
          </div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-3/4 flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative flex flex-col items-center justify-center gap-3 w-28 h-32 lg:w-32 lg:h-36 glass-panel rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,225,255,0.2)]"
              >
                {/* Glow Background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${skill.color} transition-opacity duration-300`} />
                
                {/* Icon Placeholder (Since we don't have SVGs downloaded, we use text styling to match the image's layout) */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl text-white bg-gradient-to-br ${skill.color} shadow-lg`}>
                  {skill.icon}
                </div>
                
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
