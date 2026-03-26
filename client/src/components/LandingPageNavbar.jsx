import React from 'react'

const LandingPageNavbar = () => {
    const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit 
                bg-white/70 dark:bg-[#111111]/70 
                backdrop-blur-xl 
                border border-white/20 dark:border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
                rounded-full font-inter"
      >
        <div className="flex justify-between items-center gap-8 px-6 py-2">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <span className="text-lg font-semibold tracking-tight">
              DevLink
            </span>

            <div className="hidden md:flex items-center gap-5 text-sm">
              <a className="text-slate-500 hover:text-black dark:hover:text-white transition" href="/dashboard">
                Dashboard
              </a>
              <a className="text-slate-500 hover:text-black dark:hover:text-white transition" href="/snippets">
                Snippets
              </a>
              <a className="text-slate-500 hover:text-black dark:hover:text-white transition" href="/collections">
                Collections
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* ICONS */}
            <button className="material-symbols-outlined p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#222] transition active:scale-95" onClick={toggleDarkMode}>
              dark_mode
            </button>

            {/* CTA */}
            <button
              className="px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-black text-white 
                         dark:bg-white dark:text-black 
                         hover:opacity-80 transition active:scale-95"
              onClick={() => window.location.href = "/register"}
            >  
              Register
            </button>
          </div>
        </div>
      </nav>
  )
}

export default LandingPageNavbar