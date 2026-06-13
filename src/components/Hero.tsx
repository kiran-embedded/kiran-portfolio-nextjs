"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Camera, Mail, ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  const titles = ["Building Web Apps...", "Creating IoT Solutions...", "Preparing for MCA..."];
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const currentFullText = titles[titleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 sm:pt-24 sm:pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Right Background Image (Absolutely positioned to fill the right half flawlessly) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-[85%] h-full z-0 opacity-40 lg:opacity-70 pointer-events-none mix-blend-screen"
      >
        <img 
          src="/desk.png" 
          alt="Kiran at Desk" 
          className="w-full h-full object-cover object-[80%_center] lg:object-center"
        />
        {/* Gradients to fade the image perfectly into the #030010 background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030010] via-[#030010]/80 to-transparent lg:via-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030010] via-transparent to-[#030010]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030010] via-transparent to-[#030010]/40" />
        <div className="absolute inset-0 bg-[#00e1ff]/5 mix-blend-overlay" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center h-full">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 sm:gap-6 mt-4 sm:mt-0 w-full lg:w-[55%]"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10"
            >
              <span className="text-xs sm:text-sm font-medium text-cyan-400">Hi, I'm 👋</span>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white mb-0 sm:mb-2 leading-[1.1]">
              <span className="text-gradient">KIRAN</span>
            </h1>

            <h2 className="text-lg sm:text-3xl lg:text-5xl font-bold text-gray-300">
              Aspiring Full-Stack Developer <br/>
              <span className="text-gradient-purple relative inline-block text-sm sm:text-2xl lg:text-3xl mt-1 sm:mt-4">
                IoT Enthusiast • MCA Aspirant
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-cyan-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path 
                    d="M0 5 Q 50 15 100 5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>
              </span>
            </h2>

            <div className="h-6 sm:h-8 mt-1 sm:mt-2">
              <p className="text-cyan-400 text-sm sm:text-xl font-mono tracking-wide">
                &gt; {currentText}<span className="animate-pulse">_</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-2 sm:mt-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white glow-blue transition-all"
              >
                View My Work
                <ChevronRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-gray-600 hover:border-cyan-400 text-white transition-colors glass-panel"
              >
                Contact Me
                <Terminal size={18} />
              </motion.button>
            </div>

            {/* Socials */}
            <div className="hidden sm:block mt-8 pt-8 border-t border-gray-800 w-full max-w-md">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex items-center gap-4">
                {[Code2, Briefcase, Camera, Mail].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ y: -5, color: '#00e1ff' }}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-cyan-400 transition-colors bg-[#030010]/50 backdrop-blur-sm"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-cyan-400 absolute top-0"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
