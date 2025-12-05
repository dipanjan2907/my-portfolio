import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-emerald-200 font-medium mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            <span className="text-gradient">Dipanjan Sadhukhan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Exploring the Universe of Code & Creativity.
            <br />
            Full Stack Developer specializing in modern web experiences.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-700 hover:bg-sky-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 hover:bg-blue-500/10 rounded-full font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-gray-400 hover:text-white">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
