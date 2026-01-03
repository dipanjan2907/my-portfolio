import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Zap, Cpu } from "lucide-react";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="dashboard-card p-8 flex flex-col justify-center relative corner-accent-pink"
    >
      <h2 className="text-xl font-orbitron font-bold mb-6 flex items-center gap-2 text-white">
        <Cpu className="text-cyber-pink" size={24} />
        <span className="tracking-widest">ABOUT_MODULE</span>
      </h2>

      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-mono">
        <span className="text-cyber-pink">root@user:~$</span> I execute design
        systems and compile scalable architecture. My directive is to build
        interfaces that feel alive.
      </p>

      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-black/40 border border-cyber-pink/20 text-center hover:border-cyber-pink/60 transition-colors group rounded">
          <Code
            className="mx-auto mb-2 text-cyber-pink group-hover:animate-pulse"
            size={20}
          />
          <div className="text-[10px] uppercase tracking-widest text-cyber-blue font-bold">
            Clean
          </div>
        </div>
        <div className="p-3 bg-black/40 border border-cyber-pink/20 text-center hover:border-cyber-pink/60 transition-colors group rounded">
          <Globe
            className="mx-auto mb-2 text-cyber-purple group-hover:animate-spin-slow"
            size={20}
          />
          <div className="text-[10px] uppercase tracking-widest text-cyber-blue font-bold">
            Global
          </div>
        </div>
        <div className="p-3 bg-black/40 border border-cyber-pink/20 text-center hover:border-cyber-pink/60 transition-colors group rounded">
          <Zap
            className="mx-auto mb-2 text-yellow-500 group-hover:text-yellow-400"
            size={20}
          />
          <div className="text-[10px] uppercase tracking-widest text-cyber-blue font-bold">
            Fast
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
