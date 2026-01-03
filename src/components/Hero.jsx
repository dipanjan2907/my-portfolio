import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Activity,
  Server,
  Radio,
  Shield,
  Zap,
  MapPin,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
// Mock Data for Charts
const StatBar = ({ label, value, color }) => (
  <div className="mb-4">
    <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
      <div
        style={{ width: `${value}%` }}
        className={`h-full ${color} shadow-[0_0_10px_currentColor]`}
      ></div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative w-full p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* LEFT PANEL: DATA / STATS */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-3 h-full flex flex-col gap-6"
      >
        <div className="dashboard-card p-6 rounded-xl corner-accent h-full">
          <h3 className="text-cyber-blue font-orbitron text-sm tracking-widest mb-6 flex items-center gap-2">
            <Activity size={16} /> SYSTEM DIAGNOSTICS
          </h3>

          <StatBar label="REACT_CORE" value={92} color="bg-cyber-blue" />
          <StatBar label="NODE_SERVER" value={85} color="bg-cyber-purple" />
          <StatBar label="UI_RENDER" value={98} color="bg-cyber-pink" />

          <div className="mt-8 pt-4 border-t border-gray-800">
            <div className="text-xs font-mono text-gray-500 mb-2">
              NETWORK TRAFFIC
            </div>
            <div className="flex gap-1 h-12 items-end">
              {[40, 70, 30, 80, 50, 90, 60, 40].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 bg-cyber-blue/20 border-t border-cyber-blue animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CENTER PANEL: HOLO LOGO & MAIN INFO */}
      <div className="lg:col-span-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center mb-8"
        >
          {/* Spinning Rings */}
          <div className="absolute inset-0 border-2 border-cyber-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-4 border border-cyber-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="absolute inset-0 bg-cyber-blue/5 rounded-full blur-xl"></div>

          {/* Center Hologram Content */}
          <div className="relative z-10 bg-black/50 backdrop-blur-sm border border-cyber-blue/50 p-6 rounded-full w-48 h-48 flex items-center justify-center shadow-neon-blue">
            <div className="text-center">
              <Cpu
                size={48}
                className="text-cyber-blue mx-auto mb-2 animate-pulse"
              />
              <div className="font-orbitron font-bold text-2xl text-white tracking-widest">
                DS.OS
              </div>
              <div className="text-[10px] text-cyber-blue font-mono">
                ONLINE
              </div>
            </div>
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-white to-cyber-purple drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] mb-4">
          DIPANJAN SADHUKHAN
        </h1>
        <p className="text-gray-400 font-mono text-lg tracking-widest uppercase">
          Full Stack Architect // Creative Dev
        </p>
      </div>

      {/* RIGHT PANEL: PROFILE & ACTION */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-3 h-full flex flex-col gap-6"
      >
        <div className="dashboard-card p-1 rounded-xl corner-accent-pink h-full hologram flex flex-col items-center p-6">
          <div className="w-full aspect-square relative mb-6 rounded-lg overflow-hidden border-2 border-cyber-pink shadow-neon-pink group">
            {/* Place holder for profile image, using a techy looking gradient or actual image */}
            <img
              src="public/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-2 left-2 text-cyber-pink font-mono text-xs">
              ID: DEEP_07
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 text-cyber-pink text-xs">
              <MapPin size={14} />
              <span className="font-mono">BHARAT</span>
              <ReactCountryFlag
                countryCode="IN"
                svg
                style={{
                  width: "1.5em",
                  height: "1.4em",
                }}
                title="India"
              />
            </div>
          </div>

          <div className="w-full space-y-3">
            <div className="flex items-center gap-3 p-3 bg-cyber-dark/50 border border-cyber-pink/30 rounded">
              <Shield size={18} className="text-cyber-pink" />
              <div className="text-xs font-mono text-gray-300">
                SECURITY: <span className="text-cyber-green">MAXIMUM</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-cyber-dark/50 border border-cyber-blue/30 rounded">
              <Radio size={18} className="text-cyber-blue" />
              <div className="text-xs font-mono text-gray-300">
                LINK: <span className="text-white">ESTABLISHED</span>
              </div>
            </div>

            <button className="w-full py-3 mt-2 bg-cyber-pink/10 border border-cyber-pink text-cyber-pink font-orbitron text-sm tracking-wider hover:bg-cyber-pink hover:text-black transition-all shadow-neon-pink">
              INITIATE_CONTACT
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
