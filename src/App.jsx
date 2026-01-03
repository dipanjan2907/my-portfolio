import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-gray-300 font-rajdhani selection:bg-cyber-pink selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="max-w-[1600px] mx-auto pb-20 space-y-20">
        <Hero />

        {/* Dashboard Grid for other modules */}
        <div className="px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Projects />
            <Skills />
          </div>
          <div className="lg:col-span-1 space-y-8">
            <About />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
