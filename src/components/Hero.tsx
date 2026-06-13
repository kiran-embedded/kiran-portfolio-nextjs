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
    <section id="home" className="relative h-[100dvh] sm:min-h-screen flex items-center pt-20 pb-4 sm:pt-24 sm:pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left gap-3 sm:gap-6 mt-4 sm:mt-0"
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
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
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
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-cyan-400 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0 w-full"
          >
            {/* Edge fading mask wrapper so the image blends seamlessly into the dark background */}
            <div className="relative w-full max-w-lg lg:max-w-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] mx-auto rounded-3xl overflow-hidden" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' }}>
              <img 
                src="/desk.png" 
                alt="Kiran at Desk" 
                className="w-full h-full object-cover object-center scale-105"
              />
              {/* Optional: Add a subtle overlay glow to match the neon vibe */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 mix-blend-overlay pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
