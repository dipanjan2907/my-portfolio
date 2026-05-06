import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiMongodb,
} from "react-icons/si";
import { TbTemplate } from "react-icons/tb";

const TechStackMarquee = () => {
  const techStack = [
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
    { name: "Python", icon: SiPython, color: "text-blue-400" },
    { name: "C++", icon: SiCplusplus, color: "text-indigo-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "EJS", icon: TbTemplate, color: "text-orange-400" },
  ];

  return (
    <div className="w-full py-10 overflow-hidden relative flex items-center bg-transparent border-y border-white/5 my-0">
      <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-[#030305] to-transparent z-10"></div>
      <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-[#030305] to-transparent z-10"></div>

      <div className="flex w-max animate-marquee">
        <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 items-center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`set1-${index}`}
                className="flex items-center gap-3 group px-4 py-2 rounded-full glass-panel border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <Icon
                  size={24}
                  className={`${tech.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
                />
                <span className="text-gray-300 font-inter font-medium tracking-wide whitespace-nowrap group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Second Set (Duplicate for seamless loop) */}
        <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 items-center">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`set2-${index}`}
                className="flex items-center gap-3 group px-4 py-2 rounded-full glass-panel border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <Icon
                  size={24}
                  className={`${tech.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
                />
                <span className="text-gray-300 font-inter font-medium tracking-wide whitespace-nowrap group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
