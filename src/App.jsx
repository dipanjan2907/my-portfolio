import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// Lazy load the AllProjects component
const AllProjects = lazy(() => import("./components/AllProjects"));

const Home = () => (
  <div className="min-h-screen text-gray-300 font-inter selection:bg-nebula-pink selection:text-white overflow-x-hidden">
    <Navbar />

    <main className="max-w-[1600px] mx-auto pb-20 pt-10 space-y-24 px-6 md:px-10">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Projects limit={6} />
        </div>
        <div className="lg:col-span-1 space-y-8">
          <About />
          <Skills />
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

import StarBackground from "./components/StarBackground";

function App() {
  return (
    <>
      <StarBackground />
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center text-nebula-pink font-outfit text-xl font-light tracking-widest animate-pulse">
            INITIALIZING
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
