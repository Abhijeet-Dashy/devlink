import React from 'react';

export default function LandingPage() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md shadow-sm dark:shadow-[0px_20px_40px_rgba(218,226,253,0.04)] font-inter antialiased text-slate-900 dark:text-[#f3f4f6]">
        <div className="flex justify-between items-center px-6 h-16 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-[#f3f4f6]">DevLink</span>
            <div className="hidden md:flex items-center gap-6">
              <a className="text-slate-500 dark:text-[#9ca3af] hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors" href="/dashboard">Dashboard</a>
              <a className="text-slate-500 dark:text-[#9ca3af] hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors" href="#">Snippets</a>
              <a className="text-slate-500 dark:text-[#9ca3af] hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors" href="#">Collections</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-100/50 dark:bg-[#1a1a1a]/50 rounded-lg">
              <span className="material-symbols-outlined text-slate-400 text-sm">search</span>
              <input className="bg-transparent border-none text-sm focus:ring-0 placeholder-slate-400 w-48 dark:placeholder-[#9ca3af]/50" placeholder="Search resources..." type="text"/>
            </div>
            <div className="flex items-center gap-2">
              <button className="material-symbols-outlined p-2 text-slate-500 dark:text-[#9ca3af] hover:bg-slate-100 dark:hover:bg-[#222222] rounded-lg transition-all duration-200 active:scale-95" onClick={toggleDarkMode}>dark_mode</button>
              <button className="material-symbols-outlined p-2 text-slate-500 dark:text-[#9ca3af] hover:bg-slate-100 dark:hover:bg-[#222222] rounded-lg transition-all duration-200 active:scale-95">notifications</button>
              <button className="material-symbols-outlined p-2 text-slate-500 dark:text-[#9ca3af] hover:bg-slate-100 dark:hover:bg-[#222222] rounded-lg transition-all duration-200 active:scale-95">settings</button>
              <button className="bg-emerald-500 hover:bg-emerald-500-dim text-white dark:bg-[#6ee7b7] dark:text-[#111111] px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 shadow-md">New Entry</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-24 pb-16 lg:pt-32 lg:pb-24 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500-container text-emerald-700 dark:bg-[#6ee7b7]/20 dark:text-emerald-400 rounded-full text-xs font-bold mb-8 uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
            Beta Access Now Open
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-on-surface dark:text-slate-100 tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Save Anything. <br/>
            <span className="text-emerald-500 dark:text-emerald-400 italic">Organize Everything.</span>
          </h1>
          <p className="text-lg lg:text-xl text-on-surface-variant dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Your personal developer knowledge base for links, code, and notes. Stop hunting through browser history and start building your library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/dashboard" className="bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/20 hover:scale-[1.02] transition-transform active:scale-95">
              Get Started Free
            </a>
            <button className="ghost-border dark:border-slate-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high dark:hover:bg-slate-900 transition-colors active:scale-95">
              View Demo
            </button>
          </div>
          {/* Dashboard Preview */}
          <div className="mt-20 w-full max-w-6xl mx-auto relative">
            <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full -z-10"></div>
            <div className="bg-surface-container-lowest dark:bg-[#111111] p-2 rounded-2xl shadow-2xl shadow-on-surface/5 dark:shadow-none border border-outline-variant/10 dark:border-slate-800 overflow-hidden">
              <div className="bg-surface-container dark:bg-[#1a1a1a] rounded-xl overflow-hidden aspect-[16/10] flex">
                {/* Preview Sidebar */}
                <div className="w-1/4 bg-surface-container-low dark:bg-[#111111] border-r border-outline-variant/10 dark:border-slate-800 p-4 hidden md:flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500 dark:bg-emerald-500"></div>
                    <div className="h-4 w-24 bg-outline-variant/20 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 w-full bg-emerald-500-container dark:bg-emerald-500/20 rounded-lg"></div>
                    <div className="h-8 w-full bg-transparent rounded-lg border border-outline-variant/10 dark:border-slate-800"></div>
                    <div className="h-8 w-full bg-transparent rounded-lg border border-outline-variant/10 dark:border-slate-800"></div>
                  </div>
                </div>
                {/* Preview Content */}
                <div className="flex-1 p-8 grid grid-cols-2 gap-6">
                  <div className="col-span-2 h-40 rounded-xl bg-surface-container-lowest dark:bg-[#111111] border border-outline-variant/10 dark:border-slate-800 p-4">
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <div className="h-4 w-32 bg-on-surface/10 dark:bg-slate-800 rounded"></div>
                        <div className="h-3 w-48 bg-on-surface/5 dark:bg-slate-800/50 rounded"></div>
                      </div>
                      <div className="w-10 h-10 rounded bg-tertiary-container dark:bg-slate-800"></div>
                    </div>
                    <div className="mt-8 flex gap-2">
                      <div className="h-6 w-12 bg-secondary-container dark:bg-emerald-900/40 rounded-full"></div>
                      <div className="h-6 w-12 bg-secondary-container dark:bg-emerald-900/40 rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-48 rounded-xl bg-surface-container-lowest dark:bg-[#111111] border border-outline-variant/10 dark:border-slate-800"></div>
                  <div className="h-48 rounded-xl bg-surface-container-lowest dark:bg-[#111111] border border-outline-variant/10 dark:border-slate-800"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-6 bg-surface-container-low dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-on-surface dark:text-slate-100 mb-4">Architected for Speed</h2>
              <p className="text-on-surface-variant dark:text-slate-400 max-w-xl mx-auto">Focus on writing code while DevLink handles the mental overhead of remembering where you found that solution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto lg:h-[600px]">
              {/* Bento Item 1 */}
              <div className="md:col-span-2 bg-surface-container-lowest dark:bg-[#111111] border dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mb-6">
                    <span className="material-symbols-outlined text-2xl">code</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 dark:text-slate-100">Intelligent Snippets</h3>
                  <p className="text-on-surface-variant dark:text-slate-400 max-w-sm">Capture code blocks with syntax highlighting and automatic language detection. Tag them for instant retrieval.</p>
                </div>
                <div className="mt-8 flex gap-4 translate-x-12 lg:translate-x-24 transition-transform group-hover:translate-x-8">
                  <div className="shrink-0 w-64 h-40 bg-on-background dark:bg-slate-950 rounded-xl p-4 font-mono text-xs text-white/70 dark:text-slate-300">
                    <span className="text-emerald-400 dark:text-emerald-400">const</span> <span className="text-tertiary-fixed dark:text-emerald-200">optimize</span> = () =&gt; {'{'}<br/>
                    &nbsp;&nbsp;return <span className="text-white dark:text-emerald-300">true</span>;<br/>
                    {'}'}
                  </div>
                  <div className="shrink-0 w-64 h-40 bg-surface-container dark:bg-slate-900 p-4 rounded-xl border border-outline-variant/20 dark:border-slate-800">
                    <div className="h-2 w-1/2 bg-outline-variant/40 dark:bg-slate-800 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-outline-variant/20 dark:bg-slate-800/50 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Bento Item 2 */}
              <div className="bg-surface-container-highest dark:bg-[#1a1a1a] border dark:border-slate-800 rounded-3xl p-8 flex flex-col group">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 dark:bg-emerald-500/10 flex items-center justify-center text-tertiary dark:text-emerald-400 mb-6">
                  <span className="material-symbols-outlined text-2xl">link</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-slate-100">Live Bookmarks</h3>
                <p className="text-on-secondary-container dark:text-slate-400">Save articles, documentation, and repos. We fetch metadata and snapshots so they're searchable even if the site goes down.</p>
                <div className="mt-auto pt-8">
                  <div className="w-full h-12 bg-surface-container-lowest dark:bg-[#111111] rounded-lg border border-outline-variant/20 dark:border-slate-800 flex items-center px-4 gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-red-400/80"></div>
                    <div className="h-2 flex-1 bg-outline-variant/20 dark:bg-slate-800 rounded"></div>
                  </div>
                  <div className="w-full h-12 bg-surface-container-lowest dark:bg-[#111111] rounded-lg border border-outline-variant/20 dark:border-slate-800 flex items-center px-4 gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/80"></div>
                    <div className="h-2 flex-1 bg-outline-variant/20 dark:bg-slate-800 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Bento Item 3 */}
              <div className="bg-secondary-container dark:bg-[#111111] border dark:border-slate-800 rounded-3xl p-8 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 dark:bg-emerald-500/10 flex items-center justify-center text-secondary dark:text-emerald-400 mb-6">
                  <span className="material-symbols-outlined text-2xl">folder_open</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-slate-100">Nested Collections</h3>
                <p className="text-on-secondary-container dark:text-slate-400 mb-6">Organize by project, tech stack, or learning path. Deep nesting without the visual clutter.</p>
                <div className="space-y-2 opacity-60">
                  <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-lowest dark:bg-[#1a1a1a] rounded border dark:border-slate-800">
                    <span className="material-symbols-outlined text-sm dark:text-slate-400">chevron_right</span>
                    <span className="text-xs font-bold dark:text-slate-300">Project Alpha</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 ml-4 bg-surface-container-lowest/50 dark:bg-[#1a1a1a]/50 rounded border dark:border-slate-800">
                    <span className="material-symbols-outlined text-sm dark:text-slate-400">chevron_right</span>
                    <span className="text-xs font-bold dark:text-slate-300">API Assets</span>
                  </div>
                </div>
              </div>
              {/* Bento Item 4 */}
              <div className="md:col-span-2 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-700 dark:to-emerald-900 rounded-3xl p-8 text-white flex items-center gap-12 overflow-hidden relative">
                <div className="flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white mb-6">
                    <span className="material-symbols-outlined text-2xl">search</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Universal Search</h3>
                  <p className="text-white/80">Cmd+K to find anything. Search through snippet content, link descriptions, and handwritten notes in milliseconds.</p>
                </div>
                <div className="hidden lg:block w-1/3 bg-white/10 h-64 rotate-12 translate-y-12 rounded-2xl border border-white/20 backdrop-blur-sm p-6">
                  <div className="h-3 w-3/4 bg-white/40 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-8 w-full bg-white/10 rounded flex items-center px-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500-fixed mr-2"></div>
                      <div className="h-1.5 w-20 bg-white/20 rounded"></div>
                    </div>
                    <div className="h-8 w-full bg-white/10 rounded flex items-center px-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500-fixed mr-2"></div>
                      <div className="h-1.5 w-20 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 dark:text-slate-100">Ready to clear your brain?</h2>
            <p className="text-on-surface-variant dark:text-slate-400 text-xl mb-12">Join 10,000+ developers building their second brain with DevLink.</p>
            <div className="inline-flex flex-col items-center gap-4">
              <button className="bg-on-surface text-surface dark:bg-emerald-600 dark:text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-on-surface/90 dark:hover:bg-emerald-500 transition-colors shadow-2xl">
                Start Your Library Now
              </button>
              <span className="text-xs text-outline dark:text-slate-500 font-medium tracking-widest uppercase">No Credit Card Required</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-100 dark:border-[#464555]/20 py-12 px-6 mt-auto flex flex-col items-center gap-4 text-center bg-white dark:bg-[#111111] font-inter text-xs text-slate-500 dark:text-[#9ca3af]">
        <div className="flex flex-col items-center gap-6">
          <span className="font-bold text-slate-900 dark:text-[#f3f4f6] text-lg">DevLink</span>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a className="hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors underline decoration-emerald-500/30" href="#">Privacy</a>
            <a className="hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors underline decoration-emerald-500/30" href="#">Terms</a>
            <a className="hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors underline decoration-emerald-500/30" href="#">API Documentation</a>
            <a className="hover:text-slate-900 dark:hover:text-[#f3f4f6] transition-colors underline decoration-emerald-500/30" href="#">Support</a>
          </div>
          <div className="h-px w-24 bg-slate-100 dark:bg-slate-800/50"></div>
          <p className="max-w-xs leading-relaxed opacity-80">
            © 2024 DevLink Productivity. Built for developers by developers who forget things.
          </p>
        </div>
      </footer>
    </>
  );
}
