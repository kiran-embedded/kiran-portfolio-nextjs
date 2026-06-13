"use client";

import { motion } from 'framer-motion';
import { Send, Download, Code2, Briefcase, Camera, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 overflow-hidden border-t border-white/5">
      {/* Floating Planet SVG in Background */}
      <div className="absolute right-[-10%] bottom-[-20%] w-96 h-96 opacity-50 pointer-events-none z-0">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-full blur-[2px] shadow-[0_0_50px_rgba(168,85,247,0.4)]" />
          {/* Planet Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[40%] border-[4px] border-cyan-400/30 rounded-[100%] rotate-12 shadow-[0_0_20px_rgba(0,225,255,0.3)]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Premium CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-panel rounded-3xl p-8 lg:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 z-0" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2">
              Let's build something
            </h2>
            <h2 className="text-3xl lg:text-5xl font-bold text-cyan-400 font-serif italic">
              amazing together.
            </h2>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white glow-blue"
            >
              Say Hello
              <Send size={18} />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold border border-gray-600 hover:border-purple-400 text-white transition-colors glass-panel"
            >
              Download My Resume
              <Download size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-black tracking-widest text-white mb-2 flex items-center gap-2">
              <span className="text-cyan-400">K</span>IRAN
            </h3>
            <p className="text-sm text-gray-500">
              Aspiring Developer &<br/> MCA Aspirant
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Code2 size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Briefcase size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Camera size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Let's Connect</h4>
            <p className="text-sm text-gray-400">
              I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
