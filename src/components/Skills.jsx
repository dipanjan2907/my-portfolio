import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript / TS", level: 75 },
    { name: "Node.js", level: 60 },
    { name: "Python", level: 85 },
    { name: "C++", level: 70 },
  ];

  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="dashboard-card p-8 flex flex-col justify-between corner-accent"
    >
      <h2 className="text-xl font-orbitron font-bold mb-6 flex items-center gap-2 text-white">
        <Database className="text-cyber-blue" size={24} />
        <span className="tracking-widest">SKILL_MATRIX</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-xs font-mono tracking-widest text-cyber-blue/80">
              <span>{skill.name.toUpperCase()}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-cyber-dark border border-cyber-blue/20 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                className="absolute top-0 left-0 h-full bg-cyber-blue shadow-[0_0_10px_#00f3ff]"
              ></motion.div>

              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0gMiAwIEwgMiA0IiBzdHJva2U9InJnYmEoMCwgMCwgMCwgMC41KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-cyber-blue/10">
        <div className="flex gap-2 flex-wrap">
          {["JavaScript", "GIT", "NEXT", "NODE"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-cyber-blue/5 border border-cyber-blue/20 text-[10px] font-mono text-cyber-blue tracking-widest hover:bg-cyber-blue/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
