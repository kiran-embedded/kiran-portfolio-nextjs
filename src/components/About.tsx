"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const [codeScreen, setCodeScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeScreen((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Right: Glassmorphism Card Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl mx-auto lg:max-w-none"
          >
            {/* The Specific Curly Cyan Arrow */}
            <svg className="absolute -left-12 lg:-left-20 top-[45%] w-20 lg:w-24 h-24 text-cyan-400 z-30 hidden lg:block drop-shadow-[0_0_8px_rgba(0,225,255,0.4)]" viewBox="0 0 200 150" fill="none">
              <motion.path 
                d="M20,120 C 0,80 30,30 80,40 C 120,50 110,100 70,110 C 30,120 40,80 90,80 L180,80 M160,60 L180,80 L160,100" 
                stroke="currentColor" 
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* Main Wrapper (Strict overflow bounds to prevent bleeding) */}
            <div className="glass-panel p-2 lg:p-4 rounded-2xl glow-blue relative z-10 bg-[#030010]/80 border border-cyan-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 z-0 rounded-2xl pointer-events-none" />
              
              {/* Workspace Container */}
              <div className="relative w-full h-[220px] sm:h-[300px] lg:h-[400px] rounded-xl overflow-hidden z-10 bg-[#020617]">
                
                {/* Standard blurs (without transform-gpu to prevent Android WebView white-box bug) */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

                <svg width="100%" height="100%" viewBox="0 0 800 500" className="absolute inset-0 z-10">
                  {/* Desk */}
                  <rect x="0" y="440" width="800" height="60" fill="#0f172a" />
                  <rect x="0" y="430" width="800" height="10" fill="#1e293b" />

                  {/* -------------------- THE ISOMETRIC TILTED LAPTOP -------------------- */}
                  <g transform="translate(40, 50)">
                    {/* Screen Backing (Perspective tilt: right edge recedes, left is larger) */}
                    <polygon points="0,50 420,10 420,310 0,350" fill="#1e293b" />
                    
                    {/* Display Area */}
                    <polygon points="12,58 408,20 408,300 12,338" fill="#020617" stroke="#334155" strokeWidth="2" />

                    {/* Terminal Header Bar */}
                    <polygon points="12,58 408,20 408,45 12,83" fill="#0f172a" />
                    {/* Buttons skewed to match display angle */}
                    <g transform="translate(30, 70) skewY(-5.4)">
                      <circle cx="0" cy="0" r="5" fill="#ef4444" />
                      <circle cx="18" cy="0" r="5" fill="#eab308" />
                      <circle cx="36" cy="0" r="5" fill="#22c55e" />
                    </g>

                    {/* Interactive Animated Text (Skewed tightly to screen bounds to prevent bleeding) */}
                    <g 
                      transform="translate(30, 100) skewY(-5.4)" 
                      fontSize="14" 
                      fontFamily="monospace"
                      onClick={() => setCodeScreen((prev) => (prev + 1) % 3)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* Invisible clickable hit area for mobile optimization */}
                      <rect x="-10" y="-30" width="300" height="250" fill="transparent" />

                      {codeScreen === 0 && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          {/* Arduino */}
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} fill="#a855f7" y="0">void <tspan fill="#38bdf8">setup</tspan><tspan fill="#e2e8f0">() {`{`}</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} fill="#38bdf8" x="20" y="30">pinMode<tspan fill="#e2e8f0">(13, </tspan><tspan fill="#22c55e">OUTPUT</tspan><tspan fill="#e2e8f0">);</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} fill="#e2e8f0" y="60">{`}`}</motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} fill="#a855f7" y="90">void <tspan fill="#38bdf8">loop</tspan><tspan fill="#e2e8f0">() {`{`}</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} fill="#38bdf8" x="20" y="120">digitalWrite<tspan fill="#e2e8f0">(13, </tspan><tspan fill="#22c55e">HIGH</tspan><tspan fill="#e2e8f0">);</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} fill="#38bdf8" x="20" y="150">delay<tspan fill="#e2e8f0">(1000);</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} fill="#e2e8f0" y="180">{`}`}</motion.text>
                          <motion.rect x="35" y="195" width="10" height="15" fill="#00e1ff" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 1.6 }} />
                        </motion.g>
                      )}

                      {codeScreen === 1 && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          {/* ESP32 MicroPython */}
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} fill="#a855f7" y="0">import <tspan fill="#e2e8f0">machine, time</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} fill="#e2e8f0" y="30">led = machine.<tspan fill="#38bdf8">Pin</tspan>(2, machine.Pin.OUT)</motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} fill="#a855f7" y="60">while <tspan fill="#eab308">True</tspan><tspan fill="#e2e8f0">:</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} fill="#e2e8f0" x="20" y="90">led.<tspan fill="#38bdf8">value</tspan>(<tspan fill="#a855f7">not</tspan> led.value())</motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} fill="#e2e8f0" x="20" y="120">time.<tspan fill="#38bdf8">sleep</tspan>(0.5)</motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} fill="#64748b" x="20" y="150"># ESP32 IoT running...</motion.text>
                          <motion.rect x="180" y="135" width="10" height="15" fill="#00e1ff" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 1.4 }} />
                        </motion.g>
                      )}

                      {codeScreen === 2 && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          {/* About Me */}
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} fill="#a855f7" y="0">const <tspan fill="#38bdf8">kiran</tspan> <tspan fill="#e2e8f0">= {`{`}</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} fill="#38bdf8" x="20" y="35">role: <tspan fill="#22c55e">'Full-Stack Dev'</tspan><tspan fill="#e2e8f0">,</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} fill="#38bdf8" x="20" y="70">skills: <tspan fill="#eab308">['Next.js', 'IoT']</tspan><tspan fill="#e2e8f0">,</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} fill="#38bdf8" x="20" y="105">status: <tspan fill="#22c55e">'MCA Aspirant'</tspan><tspan fill="#e2e8f0">,</tspan></motion.text>
                          <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} fill="#eab308" x="0" y="140">{`};`}</motion.text>
                          <motion.rect x="25" y="155" width="10" height="15" fill="#00e1ff" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity, delay: 1.2 }} />
                        </motion.g>
                      )}
                    </g>

                    {/* Laptop Base (Extending outwards toward viewer) */}
                    <polygon points="-30,390 460,350 420,310 0,350" fill="#0f172a" />
                    <polygon points="-30,390 460,350 470,360 -20,400" fill="#1e293b" />
                  </g>

                  {/* -------------------- CLEAN BOY (Professional Posture) -------------------- */}
                  <g transform="translate(560, 140)">
                    {/* Office Chair */}
                    <rect x="90" y="100" width="30" height="170" rx="10" fill="#020617" stroke="#1e293b" strokeWidth="3" />
                    <path d="M 90,270 L 120,270 L 130,320 L 70,320 Z" fill="#0f172a" />

                    {/* Body (Upright Posture) */}
                    <path d="M 100,270 C 100,160 80,100 20,100 C -20,100 -40,160 -40,270 Z" fill="#1e293b" />
                    <path d="M 20,100 C -20,100 -40,160 -40,270" fill="none" stroke="#0f172a" strokeWidth="6" />
                    
                    {/* Head */}
                    <circle cx="10" cy="50" r="45" fill="#0f172a" />
                    
                    {/* Minimal Cyber Spectacles */}
                    <rect x="-38" y="35" width="22" height="12" rx="3" fill="none" stroke="#00e1ff" strokeWidth="3" />
                    <line x1="-16" y1="41" x2="15" y2="41" stroke="#00e1ff" strokeWidth="2" />

                    {/* Minimal Cyberpunk Headset */}
                    <path d="M -20,10 A 55 55 0 0 1 45,15" fill="none" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
                    <rect x="30" y="30" width="25" height="40" rx="12" fill="#020617" stroke="#a855f7" strokeWidth="3" />
                    <path d="M 5,65 L -25,75" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="-25" cy="75" r="5" fill="#a855f7" />

                    {/* Realistic 2-Hand Typing Animation (Slower, deliberate pacing) */}
                    {/* Left Arm (Back) */}
                    <path d="M 60,130 L -10,215 L -100,230" fill="none" stroke="#0b0f19" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                    <motion.path 
                      d="M 60,130 L -10,215 L -100,230" 
                      fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ d: ["M 60,130 L -10,215 L -100,230", "M 60,130 L -10,225 L -100,250", "M 60,130 L -10,215 L -100,230"] }}
                      transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    />
                    
                    {/* Right Arm (Front) */}
                    <path d="M 40,130 L 10,210 L -110,250" fill="none" stroke="#0f172a" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
                    <motion.path 
                      d="M 40,130 L 10,210 L -110,250" 
                      fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                      animate={{ d: ["M 40,130 L 10,210 L -110,250", "M 40,130 L 10,205 L -110,240", "M 40,130 L 10,210 L -110,250"] }}
                      transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </g>
                </svg>
              </div>

              {/* Floating JS badge */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 right-12 lg:right-auto lg:left-12 w-14 h-14 bg-[#1e293b]/80 backdrop-blur-md rounded-2xl flex items-center justify-center font-bold text-yellow-400 text-xl border border-gray-600 shadow-xl z-20"
              >
                JS
              </motion.div>
            </div>
            
            {/* Background Blob behind the whole card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-[100px] z-0 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
