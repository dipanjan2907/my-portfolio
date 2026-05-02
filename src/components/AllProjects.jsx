import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Folder } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "Notes App",
      description: "Modern, responsive notes.",
      tags: ["React", "Tailwind"],
      github: "https://github.com/dipanjan2907/Note_App",
      demo: "https://dipanjan2907.github.io/Note_App/",
      status: "LIVE",
    },
    {
      title: "Locksmith",
      description: "Secure password generator.",
      tags: ["JS", "Crypto API"],
      github: "https://github.com/dipanjan2907/locksmith-password-generator",
      demo: "https://dipanjan2907.github.io/locksmith-password-generator/",
      status: "LIVE",
    },
    {
      title: "Campus Link",
      description: "Real-time campus platform.",
      tags: ["Next.js", "Firebase"],
      github: "https://github.com/dipanjan2907/camp-link",
      demo: "https://dipanjan2907.github.io/camp-link/",
      status: "BETA",
    },
    {
      title: "Xenvra",
      description: "Interactive resume builder.",
      tags: ["React", "TypeScript"],
      github: "https://github.com/dipanjan2907/resume-builder",
      demo: "https://dipanjan2907.github.io/resume-builder/",
      status: "BETA",
    },
    {
      title: "DSA in C++",
      description: "Comprehensive DSA implementations.",
      tags: ["C++"],
      github: "https://github.com/dipanjan2907/DSA-Cpp",
      demo: "",
      status: "BETA",
    },
    {
      title: "Python",
      description: "Python programs I learnt in classes 11-12.",
      tags: ["Python"],
      github: "https://github.com/dipanjan2907/Python-School",
      demo: "",
      status: "STABLE",
    },
    {
      title: "Java",
      description: "Java programs I learnt in classes 9-10.",
      tags: ["Java"],
      github: "https://github.com/dipanjan2907/Java-School",
      demo: "",
      status: "STABLE",
    },
    {
      title: "C",
      description: "C programs I learnt in college.",
      tags: ["C"],
      github: "https://github.com/dipanjan2907/C",
      demo: "",
      status: "STABLE",
    },
  ];

  return (
    <div className="min-h-screen text-gray-300 font-inter selection:bg-nebula-pink selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-[1600px] mx-auto pb-20 pt-32 px-6 md:px-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4">
            Archive
          </h1>
          <p className="text-gray-400 font-inter text-lg">
            A comprehensive list of things I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative glass-panel p-6 hover:-translate-y-1 hover:shadow-neon"
            >
              <div className="absolute inset-0 bg-nebula-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-nebula-purple group-hover:scale-110 transition-transform duration-300">
                  <Folder size={20} />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold font-outfit text-white group-hover:text-nebula-pink transition-colors mb-2 relative z-10">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6 line-clamp-2 font-inter leading-relaxed relative z-10">
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

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block text-gray-400 hover:text-white transition-colors font-inter text-sm border-b border-transparent hover:border-white pb-1"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
