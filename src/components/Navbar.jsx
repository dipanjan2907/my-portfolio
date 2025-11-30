import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-space-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">Portfolio</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 ml-4 border-l border-gray-700 pl-4">
            <a href="https://github.com/dipanjan2907/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/dipanjan2907/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:dipanjan.sadhukhan.1885@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-space-dark/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-gray-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 mt-4">
                <a href="https://github.com/dipanjan2907" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github size={24} /></a>
                <a href="https://linkedin.com//dipanjan2907" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
                <a href="mailto:email@example.com" className="text-gray-400 hover:text-white"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
