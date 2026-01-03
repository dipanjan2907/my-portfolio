import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="dashboard-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group corner-accent"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-orbitron font-bold mb-4 text-white">
          INITIATE <span className="text-cyber-blue">UPLINK</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-md font-mono text-sm">
          Transmitting data... Channel open for collaboration inquiries and
          mission briefings.
        </p>

        <a
          href="mailto:dipanjan.sadhukhan.1885@gmail.com"
          className="nav-btn inline-flex items-center gap-2 group text-cyber-blue"
        >
          <Mail size={18} className="group-hover:animate-bounce" />
          <span>TRANSMIT_MSG</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
