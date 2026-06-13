"use client";

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Globe, Cpu, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Task Manager Web App',
    description: 'A full stack task management app with auth, CRUD operations and dashboard.',
    icon: Globe,
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'IoT Smart System',
    description: 'IoT based project using sensors and Arduino for real-time monitoring.',
    icon: Cpu,
    tech: ['Arduino', 'IoT', 'C++'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern responsive portfolio website with smooth animations.',
    icon: Code2,
    tech: ['HTML', 'CSS', 'JS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    color: 'from-cyan-500 to-purple-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2">Projects</h4>
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-2">
              Things I've Built 🚀
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-4" />
          </div>
          
          <a href="#" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-medium">
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative glass-panel rounded-2xl overflow-hidden flex flex-col border border-gray-800 hover:border-cyan-500/50 transition-colors"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b22] to-transparent z-10" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                  <project.icon size={18} />
                </div>

                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative z-20 -mt-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Footer of Card */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-semibold px-2 py-1 rounded bg-gray-800/50 text-gray-300 border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href="#" 
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${project.color} text-white shadow-lg`}
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
