import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
      <div className="lg:col-span-7 flex flex-col justify-center relative z-10 order-2 lg:order-1">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6 border-nebula-pink/30">
            <span className="w-2 h-2 rounded-full bg-nebula-cyan animate-pulse"></span>
            <span className="text-xs font-inter text-gray-300 tracking-wide uppercase">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black leading-tight tracking-tight mb-4 text-white">
            Creative <br />
            <span className="text-gradient">Developer.</span>
          </h1>
          <p className="text-gray-400 font-inter text-lg md:text-xl max-w-lg leading-relaxed">
            I craft modern, highly interactive, and performant web experiences.
            Focused on bridging the gap between design and robust engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center gap-6 mt-8"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-space-black font-inter font-semibold hover:scale-105 transition-transform duration-300"
          >
            View Work <ArrowRight size={18} />
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/dipanjan2907/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-nebula-purple transition-all duration-300 group"
            >
              <Linkedin
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://github.com/dipanjan2907"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-nebula-pink transition-all duration-300 group"
            >
              <Github
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/dipanjan_2907/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-nebula-orange transition-all duration-300 group"
            >
              <Instagram
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="lg:col-span-5 h-full flex justify-center items-center relative order-1 lg:order-2"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Decorative glowing rings */}
          <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-4 rounded-full border border-nebula-pink/20 animate-[spin_15s_linear_infinite_reverse]"></div>

          <div className="absolute inset-8 rounded-full glass-panel overflow-hidden p-2 group shadow-neon hover:shadow-[0_0_30px_rgba(233,64,87,0.8)] transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-space-light relative">
              <img
                src="images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 w-full text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel backdrop-blur-md border-white/20">
                  <MapPin size={12} className="text-nebula-orange" />
                  <span className="text-[10px] font-inter font-medium text-white tracking-wider">
                    BHARAT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
