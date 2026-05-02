import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Zap, Compass } from "lucide-react";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="glass-panel p-8 md:p-10 flex flex-col justify-center relative"
    >
      <div className="mb-6 pb-6 border-b border-white/10">
        <h2 className="text-sm font-inter text-nebula-orange uppercase tracking-widest mb-2">Introduction</h2>
        <h3 className="text-3xl font-outfit font-bold text-white">About Me</h3>
      </div>

      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-inter">
        I am a passionate developer focusing on building elegant, performant, and scalable applications. I love bringing ideas to life in the browser and pushing the boundaries of what web experiences can be.
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors group">
          <Code
            className="mb-3 text-nebula-cyan group-hover:scale-110 transition-transform"
            size={24}
          />
          <div className="text-[11px] font-inter font-medium text-gray-300">
            Clean Code
          </div>
        </div>
        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors group">
          <Globe
            className="mb-3 text-nebula-purple group-hover:scale-110 transition-transform"
            size={24}
          />
          <div className="text-[11px] font-inter font-medium text-gray-300">
            Scalable
          </div>
        </div>
        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors group">
          <Zap
            className="mb-3 text-nebula-orange group-hover:scale-110 transition-transform"
            size={24}
          />
          <div className="text-[11px] font-inter font-medium text-gray-300">
            Performant
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
