import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-space-light/30 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/dipanjan2907"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dipanjan2907"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-gray-500 flex items-center justify-center gap-2">
          &copy; {new Date().getFullYear()} Dipanjan Sadhukhan. Made with{" "}
          <Heart size={16} className="text-red-500 fill-current" /> in Space.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
