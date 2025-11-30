import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-space-light/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="border-b-4 border-blue-500 pb-2">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-space-dark p-1 rounded-lg">
                <img 
                  src="https://lh3.googleusercontent.com/a/ACg8ocJIqrCBuRuYn50niud7TTD1iks3Snpbp5-b1dyp-IjRjPvUw_hfmQTUxHiGkD0LylGIdE_HS2ZyajbF4KezFpqIWx6bZG1p=s288-c-no" 
                  alt="Profile" 
                  className="rounded-lg w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate developer with a love for creating immersive digital experiences. 
                My journey began with a curiosity for how things work, leading me to explore the vast universe of web development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in building performant, accessible, and beautiful web applications using modern technologies.
                When I'm not coding, you can find me exploring new tech, gaming, or stargazing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-space-dark border border-gray-800 rounded-lg text-center hover:border-blue-500 transition-colors">
                  <Code className="mx-auto mb-2 text-blue-400" size={24} />
                  <h3 className="font-medium">Clean Code</h3>
                </div>
                <div className="p-4 bg-space-dark border border-gray-800 rounded-lg text-center hover:border-purple-500 transition-colors">
                  <Globe className="mx-auto mb-2 text-purple-400" size={24} />
                  <h3 className="font-medium">Responsive</h3>
                </div>
                <div className="p-4 bg-space-dark border border-gray-800 rounded-lg text-center hover:border-pink-500 transition-colors">
                  <Rocket className="mx-auto mb-2 text-pink-400" size={24} />
                  <h3 className="font-medium">Fast</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
