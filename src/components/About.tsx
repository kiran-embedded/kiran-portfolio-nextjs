"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Wifi, BrainCircuit, BookOpen } from 'lucide-react';

const focusAreas = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    icon: Code2,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    title: "IoT Enthusiast",
    description: "Creating smart IoT solutions.",
    icon: Wifi,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Problem Solver",
    description: "Love solving real world problems with code.",
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "MCA Aspirant",
    description: "Preparing for MCA and aiming higher.",
    icon: BookOpen,
    color: "text-orange-400",
    bg: "bg-orange-500/10"
  }
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="relative py-24 w-full overflow-hidden">
      
      {/* Animated SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden -translate-y-1/2 pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
          <motion.path 
            d="M0,160 Q360,320 720,160 T1440,160" 
            fill="none" 
            stroke="url(#gradientStroke)" 
            strokeWidth="3"
            style={{ pathLength, opacity }}
            className="drop-shadow-[0_0_10px_rgba(0,225,255,0.8)]"
          />
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e1ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col gap-6"
          >
            <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">About Me</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Who <span className="text-cyan-400">I am?</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed mt-4">
              <p>
                Hello! I&apos;m Kiran, a <span className="text-white font-semibold">Physics Graduate</span> and 
                <span className="text-cyan-400 font-semibold"> MCA Aspirant</span> with an intense passion for building 
                practical technology solutions.
              </p>
              <p>
                My journey bridges the gap between hardware and software. From designing 
                <span className="text-purple-400"> IoT embedded systems</span> and MOSFET circuits to crafting 
                clean, responsive web applications, I love making things work from the silicon up to the browser.
              </p>
              <p>
                Currently, I am actively preparing for my MCA while expanding my skills in Next.js, React, and 
                automation projects. I believe in writing clean code, building premium user interfaces, and solving 
                real-world problems.
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Available for freelance
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  Actively building
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 2x2 Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {focusAreas.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-panel p-6 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all group flex flex-col justify-center"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} border border-gray-700/50 group-hover:border-current transition-colors`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Background Blob behind the whole card grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/10 blur-[100px] z-0 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
