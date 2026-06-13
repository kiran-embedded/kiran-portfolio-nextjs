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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10"
            >
              <span className="text-sm font-medium text-cyan-400">Hi, I'm 👋</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white mb-2 leading-[1.1]">
              <span className="text-gradient">KIRAN</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-300">
              Aspiring Full-Stack Developer <br/>
              <span className="text-gradient-purple relative inline-block text-lg sm:text-2xl lg:text-3xl mt-4">
                IoT Enthusiast • MCA Aspirant
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-cyan-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>

            <div className="h-8 mt-2">
              <p className="text-cyan-400 text-xl font-mono tracking-wide">
                &gt; {currentText}<span className="animate-pulse">_</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6">
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
            <div className="mt-8 pt-8 border-t border-gray-800 w-full max-w-md">
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

          {/* Right Profile Image with Orbits */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] flex items-center justify-center mx-auto mt-8 lg:mt-0">
              
              {/* Orbital Rings */}
              <div className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(0,225,255,0.5)]">
                  <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="#00e1ff" strokeWidth="0.5" strokeDasharray="4 4" transform="rotate(30 50 50)" />
                  <circle cx="91" cy="73" r="1.5" fill="#00e1ff" />
                </svg>
              </div>

              <div className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite_reverse]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                  <ellipse cx="50" cy="50" rx="50" ry="15" fill="none" stroke="#a855f7" strokeWidth="0.5" transform="rotate(-45 50 50)" />
                  <circle cx="15" cy="15" r="2" fill="#a855f7" />
                </svg>
              </div>

              <div className="absolute inset-0 w-full h-full animate-[spin_25s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-50">
                  <ellipse cx="50" cy="50" rx="40" ry="40" fill="none" stroke="#ffffff" strokeWidth="0.2" strokeDasharray="1 6" />
                </svg>
              </div>

              {/* Floating Code Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[5%] w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-cyan-400 font-mono text-xl font-bold z-20"
              >
                &lt;/&gt;
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[25%] right-0 w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-purple-400 font-mono text-lg font-bold z-20"
              >
                &#123;&#125;
              </motion.div>

              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] right-[15%] w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-pink-400 font-mono text-lg font-bold z-20"
              >
                &gt;_
              </motion.div>

              {/* Profile Image Area (Unclipped, sitting in front of orbits) */}
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] lg:w-[100%] z-10 flex justify-center items-end pointer-events-none">
                
                {/* Glowing Orbs immediately behind the person */}
                <div className="absolute top-[30%] right-[10%] w-32 h-32 bg-purple-600/60 rounded-full blur-[60px] -z-10" />
                <div className="absolute top-[50%] left-[10%] w-16 h-16 bg-cyan-400/60 rounded-full blur-[40px] -z-10" />

                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="w-full relative flex justify-center"
                >
                  <img 
                    src="/profile.png" 
                    alt="Kiran Profile" 
                    className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] scale-105 lg:scale-110 origin-bottom -translate-x-2 lg:-translate-x-6 transition-transform"
                  />
                  {/* Bottom fade to blend with the dark background */}
                  <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-[#030010] via-[#030010]/80 to-transparent" />
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
