import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-10 transition-all duration-300">
      <div 
        className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-4 rounded-full transition-all duration-500 ${
          scrolled 
            ? "glass-panel bg-white/[0.02]" 
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-nebula-purple to-nebula-orange flex items-center justify-center">
            <span className="font-outfit font-bold text-white text-sm">DS</span>
          </div>
        </div>

        <div className="hidden md:flex gap-2">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-btn relative group">
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="w-10 h-10 rounded-full glass-panel flex flex-col items-center justify-center gap-1.5">
            <div className="w-5 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
