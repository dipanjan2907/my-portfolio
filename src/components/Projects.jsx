import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = ({ limit = null }) => {
  const allProjects = [
    {
      title: "Aapad Net",
      description: "Resilient Offline Disaster Response System",
      tags: ["EJS", "Tailwind"],
      github: "https://github.com/dipanjan2907/Aapad-Net",
      demo: "",
      status: "BETA",
      color: "text-nebula-cyan",
    },
    {
      title: "Arcade Vault",
      description: "Collection of mini games with retro aesthetics.",
      tags: ["ReactJS", "Tailwind CSS"],
      github: "https://github.com/dipanjan2907/MiniGames",
      demo: "https://dipanjan2907.github.io/MiniGames/",
      status: "BETA",
      color: "text-nebula-cyan",
    },
    {
      title: "Campus Link",
      description: "Real-time campus platform for students.",
      tags: ["Next.js", "Firebase"],
      github: "https://github.com/dipanjan2907/camp-link",
      demo: "https://dipanjan2907.github.io/camp-link/",
      status: "BETA",
      color: "text-nebula-pink",
    },
    {
      title: "Xenvra",
      description: "Interactive modern resume builder.",
      tags: ["React", "TypeScript"],
      github: "https://github.com/dipanjan2907/resume-builder",
      demo: "https://dipanjan2907.github.io/resume-builder/",
      status: "BETA",
      color: "text-nebula-pink",
    },
  ];

  const projects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-panel p-8 md:p-10"
    >
      <div className="flex justify-between items-end mb-10 pb-6 border-b border-white/10">
        <div>
          <h2 className="text-sm font-inter text-nebula-pink uppercase tracking-widest mb-2">Portfolio</h2>
          <h3 className="text-3xl font-outfit font-bold text-white">Featured Work</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/[0.02] border border-white/5 hover:border-nebula-pink/50 p-6 transition-all duration-500 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-neon"
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-nebula-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-space-light border border-white/10 flex items-center justify-center text-nebula-orange group-hover:scale-110 transition-transform duration-300">
                <Folder size={24} />
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-xl font-bold font-outfit text-white group-hover:text-nebula-pink transition-colors mb-3 relative z-10">
              {project.title}
            </h4>
            <p className="text-gray-400 text-sm font-inter mb-6 line-clamp-2 leading-relaxed relative z-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-inter font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 rounded-full font-inter font-medium text-sm group"
          >
            View Full Archive
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
