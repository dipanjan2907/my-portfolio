import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Notes App',
      description: 'An app where you can make Notes.',
      tags: ['React', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/dipanjan2907/Note_App',
      demo: 'https://dipanjan2907.github.io/Note_App/'
    },
    {
      title: 'Password Generator',
      description: 'Real-time messaging application with end-to-end encryption and dark mode.',
      tags: ['HTML','CSS','JS'],
      image: 'https://plus.unsplash.com/premium_photo-1681487746049-c39357159f69?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://github.com/dipanjan2907/locksmith-password-generator',
      demo: 'https://dipanjan2907.github.io/locksmith-password-generator/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-space-light/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-blue-500 pb-2">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-space-dark rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
