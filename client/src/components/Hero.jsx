import React from "react";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden bg-[#f5f5f5] dark:bg-[#0a0a0a] font-inter transition-colors duration-300">
      {/* Background Textures */}
      <div className="absolute inset-0 halftone-bg opacity-30 dark:opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 grain-overlay opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center mt-12 mb-24 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-black dark:text-white uppercase transition-colors">
            Save Anything.
            <br />
            Organize Everything.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mb-10 transition-colors">
            The structural workspace for modern developers. A drafting table for
            your code snippets, documentation, and inspiration—built with
            precision and intent.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-black dark:bg-white text-[#f5f5f5] dark:text-black border-2 border-black dark:border-white font-black text-lg hover:bg-[#f5f5f5] hover:text-black dark:hover:bg-[#0a0a0a] dark:hover:text-white hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none flex items-center gap-2 group"
            >
              Get Started
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Visual Element: Halftone Mockup */}
        <div className="mt-20 relative w-full max-w-5xl mx-auto">
          {/* Halftone offset background for style */}
          <div className="absolute top-4 left-4 w-full h-full border-2 border-black dark:border-white halftone-bg z-0 hidden md:block"></div>

          <div className="relative z-10 bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] transition-colors">
            <div className="border-b-2 border-black dark:border-white pb-3 mb-4 flex items-center gap-2 transition-colors">
              <div className="w-3 h-3 rounded-full border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-[#0a0a0a]"></div>
              <div className="w-3 h-3 rounded-full border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-[#0a0a0a]"></div>
              <div className="w-3 h-3 border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-[#0a0a0a]"></div>
            </div>

            {/* The Image itself given a pseudo-halftone feel via mix-blend-mode or filters */}
            <div className="relative aspect-video overflow-hidden border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-black transition-colors">
              <img
                alt="DevLink Dashboard Preview"
                className="w-full h-full object-cover grayscale contrast-125 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen opacity-80"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
              />
              <div className="absolute inset-0 halftone-bg opacity-30 dark:opacity-20 mix-blend-color-burn dark:mix-blend-screen pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="w-full h-8 border-y-2 border-black dark:border-white halftone-bg opacity-40 dark:opacity-20 my-20 transition-colors"></div>

      {/* FEATURES SECTION */}
      <section className="relative z-10 py-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white uppercase mb-4 transition-colors">
            Total Command.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg transition-colors">
            Built for the complexity of modern engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 halftone-bg opacity-20 dark:opacity-10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
            <span className="material-symbols-outlined text-black dark:text-white text-6xl mb-6 transition-colors">
              save
            </span>
            <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-3 transition-colors">
              Save Links,
              <br />
              Notes, Code
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">
              A universal clipboard for developers. Capture endpoints, snippets,
              and inspiration in one secure place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute bottom-0 left-0 w-full h-1/3 halftone-bg opacity-10 dark:opacity-[0.05] border-t-2 border-dashed border-black dark:border-white pointer-events-none group-hover:-translate-y-4 transition-transform duration-500"></div>
            <span className="material-symbols-outlined text-black dark:text-white text-6xl mb-6 transition-colors">
              folder_open
            </span>
            <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-3 transition-colors">
              Organize
              <br />
              Into Folders
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium relative z-10 transition-colors">
              Create a structured hierarchy. Group resources by project, tech
              stack, or team for effortless retrieval.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-8 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] relative overflow-hidden group hover:-translate-y-1 transition-all">
            <div className="absolute bottom-0 right-0 w-32 h-32 halftone-bg opacity-20 dark:opacity-10 rounded-tl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
            <span className="material-symbols-outlined text-black dark:text-white text-6xl mb-6 transition-colors">
              sell
            </span>
            <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-3 transition-colors">
              Add Notes
              <br />& Tags
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium transition-colors">
              Enrich your saved items with personal context. Tag extensively for
              lightning-fast semantic search.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="w-full h-8 border-y-2 border-black dark:border-white halftone-bg opacity-40 dark:opacity-20 my-20 transition-colors"></div>

      <div className="mb-20">
        <CTA />
      </div>
    </main>
  );
};

export default Hero;
