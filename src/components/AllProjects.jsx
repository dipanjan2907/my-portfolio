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
      title: "Python",
      description: "Python programs I learnt in classes 11-12.",
      tags: ["Python"],
      github: "https://github.com/dipanjan2907/Python-School",
      demo: "",
      status: "STABLE",
      color: "text-cyber-green",
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
    <div className="min-h-screen text-gray-300 font-rajdhani selection:bg-cyber-pink selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-[1600px] mx-auto pb-20 space-y-20 pt-32">
        <div className="px-6 md:px-10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
              ALL_PROJECT_LOGS
            </h1>
            <p className="text-cyber-blue font-mono">
              // FULL_ARCHIVE_ACCESS_GRANTED
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-cyber-black/70 border border-cyber-blue/20 hover:border-cyber-blue p-6 transition-all duration-300 hover:shadow-neon-blue rounded-lg"
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
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
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

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block text-cyber-blue hover:text-white transition-colors font-mono text-sm border-b border-cyber-blue/50 hover:border-white pb-1"
            >
              &lt; RETURN_TO_DASHBOARD
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;
