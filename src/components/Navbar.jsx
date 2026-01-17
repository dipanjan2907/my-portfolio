import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Matrix", href: "#skills" },
    { name: "Comms", href: "#contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 relative z-50">
      <div className="flex items-center gap-2">
        <div className="w-3 h-12 bg-cyber-blue shadow-neon-blue animate-pulse"></div>
        <h1 className="text-2xl font-orbitron font-bold text-white tracking-widest">
          DS<span className="text-cyber-pink">.OS</span>
        </h1>
      </div>

      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <a key={link.name} href={link.href} className="nav-btn group">
            <span className="group-hover:text-glow">{link.name}</span>
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <div className="w-8 h-8 border border-cyber-blue flex items-center justify-center">
          <div className="w-6 h-0.5 bg-cyber-blue"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
