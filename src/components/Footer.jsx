import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full py-8 mt-12 border-t border-white/5 bg-space-black/80 backdrop-blur-md">
      <p className="text-xs text-gray-500 font-inter font-medium tracking-wide">
        © {new Date().getFullYear()} Dipanjan Sadhukhan. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
