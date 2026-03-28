import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-[#111111] text-[#f5f5f5] dark:text-gray-300 py-20 px-6 font-inter relative overflow-hidden transition-colors">
      {/* Optional faint halftone over the black bg */}
      <div className="absolute inset-0 halftone-bg opacity-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 relative z-10">
        <div className="col-span-2">
          <span className="text-3xl font-black tracking-tighter uppercase mb-4 inline-block border-2 border-[#f5f5f5] dark:border-white px-2 py-1 bg-black dark:bg-[#1a1a1a] shadow-[4px_4px_0_0_rgba(245,245,245,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] transition-colors">
            DevLink
          </span>
          <p className="mt-8 text-gray-400 dark:text-gray-400 font-bold text-sm max-w-sm leading-relaxed uppercase tracking-wide transition-colors">
            A structural philosophy for technical documentation. Organized with intent, built for speed.
          </p>
          <div className="mt-8 flex gap-4">
             {/* Social Links placeholder */}
            <a href="#" className="w-10 h-10 border-2 border-gray-600 dark:border-gray-500 flex items-center justify-center hover:bg-[#f5f5f5] hover:text-black hover:border-[#f5f5f5] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors">
              <span className="material-symbols-outlined">brand_family</span>
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-600 dark:border-gray-500 flex items-center justify-center hover:bg-[#f5f5f5] hover:text-black hover:border-[#f5f5f5] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-600 dark:border-gray-500 flex items-center justify-center hover:bg-[#f5f5f5] hover:text-black hover:border-[#f5f5f5] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-colors">
              <span className="material-symbols-outlined">link</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-6 border-b-2 border-gray-600 dark:border-gray-500 inline-block pb-1 transition-colors">
            Product
          </h4>
          <ul className="space-y-4 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Snippets</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Collections</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">API Keys</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Teams</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-6 border-b-2 border-gray-600 dark:border-gray-500 inline-block pb-1 transition-colors">
            Support
          </h4>
          <ul className="space-y-4 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Documentation</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Changelog</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Help Center</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Community</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest mb-6 border-b-2 border-gray-600 dark:border-gray-500 inline-block pb-1 transition-colors">
            Legal
          </h4>
          <ul className="space-y-4 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Privacy</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Terms</a></li>
            <li><a href="#" className="hover:text-[#f5f5f5] dark:hover:text-white transition-colors block">Security</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-4 border-gray-800 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 transition-colors">
        <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
          © 2026 DevLink Architectural Systems.
        </p>
        <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f5f5f5] dark:bg-white animate-pulse"></span> Systems Operational
          </span>
          <span>v2.0.4-edge</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;