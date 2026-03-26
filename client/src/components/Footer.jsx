import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="col-span-2">
          <span className="text-2xl font-black tracking-tighter text-on-surface">
            DevLink
          </span>
          <p className="mt-6 text-on-surface-variant text-sm max-w-xs leading-relaxed">
            A structural philosophy for technical documentation. Organized
            with intent, built for speed.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">brand_family</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">link</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest mb-6">
            Product
          </h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><a href="#" className="hover:text-primary transition-colors">Snippets</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Collections</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">API Keys</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Teams</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest mb-6">
            Support
          </h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest mb-6">
            Legal
          </h4>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-outline">
          © 2024 DevLink Architectural Systems. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs text-outline">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Systems Operational
          </span>
          <span>v2.0.4-stable</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;