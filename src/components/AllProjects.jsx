import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Folder } from "lucide-react";
import Footer from "./Footer";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [
    {
      title: "Skill Bridge",
      description: "Bridging the gap between your skills and opportunities.",
      highlight: "SIH",
      tags: ["ReactJS", "NodeJS", "MySQL"],
      github: "https://github.com/dipanjan2907/Skill_Bridge_SIH",
      demo: "https://skillbridgeportal.vercel.app/",
    },
    {
      title: "Mystery Message",
      description: "AI-Powered Anonymous Messaging Platform",
      highlight: "",
      tags: ["AI", "Redis", "Next.js", "TS", "MONGO"],
      github: "https://github.com/dipanjan2907/mystery-message",
      demo: "https://mysterymsgapp.vercel.app/",
    },
    {
      title: "Arcade Vault",
      description: "Collection of mini games",
      highlight: "",
      tags: ["ReactJS", "Tailwind CSS"],
      github: "https://github.com/dipanjan2907/MiniGames",
      demo: "https://minigamesvault.vercel.app/",
    },
    {
      title: "HarmonyX",
      description: "A Full Stack music website.",
      highlight: "",
      tags: ["MERN", "JavaScript"],
      github: "https://github.com/dipanjan2907/HarmonyX",
    },
    {
      title: "Aapad Net",
      description: "Resilient Offline Disaster Response System",
      highlight: "",
      tags: ["EJS", "Tailwind"],
      github: "https://github.com/dipanjan2907/Aapad-Net",
      demo: "",
    },
    {
      title: "Notes App",
      description: "Modern, responsive notes.",
      highlight: "",
      tags: ["React", "Tailwind"],
      github: "https://github.com/dipanjan2907/Note_App",
      demo: "https://dipanjan2907.github.io/Note_App/",
    },
    {
      title: "Locksmith",
      description: "Secure password generator.",
      highlight: "",
      tags: ["JS", "Crypto API"],
      github: "https://github.com/dipanjan2907/locksmith-password-generator",
      demo: "https://dipanjan2907.github.io/locksmith-password-generator/",
    },
    {
      title: "Campus Link",
      description: "Real-time campus platform.",
      highlight: "",
      tags: ["Next.js", "Firebase"],
      github: "https://github.com/dipanjan2907/camp-link",
      demo: "https://dipanjan2907.github.io/camp-link/",
    },
    {
      title: "Xenvra",
      description: "Interactive resume builder.",
      highlight: "",
      tags: ["React", "TypeScript"],
      github: "https://github.com/dipanjan2907/resume-builder",
      demo: "https://dipanjan2907.github.io/resume-builder/",
    },
    {
      title: "DSA in C++",
      description: "Comprehensive DSA implementations.",
      highlight: "",
      tags: ["C++"],
      github: "https://github.com/dipanjan2907/DSA-Cpp",
      demo: "",
    },
    {
      title: "Python",
      description: "Python programs I learnt in classes 11-12.",
      highlight: "",
      tags: ["Python"],
      github: "https://github.com/dipanjan2907/Python-School",
      demo: "",
    },
    {
      title: "Java",
      description: "Java programs I learnt in classes 9-10.",
      highlight: "",
      tags: ["Java"],
      github: "https://github.com/dipanjan2907/Java-School",
      demo: "",
    },
    {
      title: "C",
      description: "C programs I learnt in college.",
      highlight: "",
      tags: ["C"],
      github: "https://github.com/dipanjan2907/C",
      demo: "",
    },
  ];

  return (
    <div className="min-h-screen text-gray-300 font-inter selection:bg-nebula-pink selection:text-white overflow-x-hidden">
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
          {allProjects.map((project, index) => {
            const isSIH = project.highlight === "SIH";

            return (
              <div
                key={index}
                className={`group relative glass-panel p-6 hover:-translate-y-1 hover:shadow-neon flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                  isSIH
                    ? "border-nebula-orange/60 shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:border-nebula-orange"
                    : "border-white/5 hover:border-nebula-pink/50"
                }`}
              >
                {/* Highlight Badge for SIH */}
                {isSIH && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-gradient-to-l from-nebula-orange to-amber-500 text-black font-inter font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-bl-lg shadow-lg flex items-center gap-1">
                      {/* <Award size={11} className="stroke-[2.5]" /> */}
                      <span>{project.highlight}</span>
                    </div>
                  </div>
                )}

                {/* Subtle background glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none ${
                    isSIH ? "bg-nebula-orange" : "bg-nebula-gradient"
                  }`}
                ></div>

                <div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isSIH
                          ? "bg-nebula-orange/10 border-nebula-orange/30 text-nebula-orange"
                          : "bg-white/5 border-white/10 text-nebula-purple"
                      }`}
                    >
                      <Folder size={20} />
                    </div>

                    <div className={`flex gap-3 ${isSIH ? "mr-10" : ""}`}>
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
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-full border text-gray-300 bg-white/5 border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
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
