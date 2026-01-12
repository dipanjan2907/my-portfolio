import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Terminal } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Notes App",
      description: "Modern, responsive notes.",
      tags: ["React", "Tailwind"],
      github: "https://github.com/dipanjan2907/Note_App",
      demo: "https://dipanjan2907.github.io/Note_App/",
      status: "LIVE",
      color: "text-cyber-pink",
    },
    {
      title: "Locksmith",
      description: "Secure password generator.",
      tags: ["JS", "Crypto API"],
      github: "https://github.com/dipanjan2907/locksmith-password-generator",
      demo: "https://dipanjan2907.github.io/locksmith-password-generator/",
      status: "LIVE",
      color: "text-cyber-pink",
    },
    {
      title: "Campus Link",
      description: "Real-time campus platform.",
      tags: ["Next.js", "Firebase"],
      github: "https://github.com/dipanjan2907/camp-link",
      demo: "https://dipanjan2907.github.io/camp-link/",
      status: "BETA",
      color: "text-cyber-blue",
    },
    {
      title: "Xenvra",
      description: "Interactive resume builder.",
      tags: ["React", "TypeScript"],
      github: "https://github.com/dipanjan2907/resume-builder",
      demo: "https://dipanjan2907.github.io/resume-builder/",
      status: "BETA",
      color: "text-cyber-blue",
    },
    {
      title: "DSA in C++",
      description: "Comprehensive DSA implementations.",
      tags: ["C++"],
      github: "https://github.com/dipanjan2907/DSA-Cpp",
      demo: "",
      status: "BETA",
      color: "text-cyber-blue",
    },
    {
      title: "Java",
      description: "Java programs I learnt in classes 9-10.",
      tags: ["Java"],
      github: "https://github.com/dipanjan2907/Java-School",
      demo: "",
      status: "STABLE",
      color: "text-cyber-green",
    },
    {
      title: "Python",
      description: "Python programs I learnt in classes 11-12.",
      tags: ["Python"],
      github: "https://github.com/dipanjan2907/Python-School",
      demo: "",
      status: "STABLE",
      color: "text-cyber-green",
    },
    {
      title: "C",
      description: "C programs I learnt in college.",
      tags: ["C"],
      github: "https://github.com/dipanjan2907/C",
      demo: "",
      status: "STABLE",
      color: "text-cyber-green",
    },
  ];

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="dashboard-card p-8 corner-accent"
    >
      <div className="flex justify-between items-center mb-8 border-b border-cyber-blue/20 pb-4">
        <h2 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
          <Terminal className="text-cyber-blue" size={24} />
          <span className="tracking-widest">PROJECT_LOGS</span>
        </h2>
        <span className="font-mono text-xs text-cyber-blue/60 animate-pulse">
          Scanning...
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-cyber-black/40 border border-cyber-blue/20 hover:border-cyber-blue p-6 transition-all duration-300 hover:shadow-neon-blue rounded-lg"
          >
            <div
              className={`absolute top-2 right-2 text-[10px] font-mono border px-1 ${project.color} border-current opacity-70`}
            >
              {project.status}
            </div>

            <div className="flex justify-between items-start mb-4">
              <Folder
                className="text-cyber-blue/50 group-hover:text-cyber-blue transition-colors"
                size={28}
              />
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-bold font-orbitron text-white group-hover:text-cyber-blue transition-colors mb-2 tracking-wide">
              {project.title.toUpperCase()}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-2 font-mono h-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-cyber-blue/80 bg-cyber-blue/5 px-2 py-0.5 border border-cyber-blue/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
