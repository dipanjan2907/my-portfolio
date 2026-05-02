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
      className="glass-panel p-8 md:p-10 flex flex-col justify-between"
    >
      <div className="mb-6 pb-6 border-b border-white/10">
        <h2 className="text-sm font-inter text-nebula-purple uppercase tracking-widest mb-2">Expertise</h2>
        <h3 className="text-3xl font-outfit font-bold text-white">Skills Matrix</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-xs font-inter font-medium tracking-wide text-gray-300">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="h-full bg-nebula-gradient shadow-neon"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="flex gap-2 flex-wrap">
          {["JavaScript", "GIT", "NEXT.JS", "NODE.JS", "AWS", "LINUX"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-inter font-medium text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-colors"
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
