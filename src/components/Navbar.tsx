"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, TerminalSquare } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg shadow-cyan-500/5' : 'bg-transparent'
        }`}>
          
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center">
              <TerminalSquare size={18} className="text-black" />
            </div>
            <span className="font-bold text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">
              KIRAN
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 neon-glow"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="#contact" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white transition-all glow-blue"
            >
              Let's Connect
              <span className="text-lg leading-none">→</span>
            </Link>
            
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 mt-2 px-6"
        >
          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="mt-4 text-center px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Connect
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
