import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const LandingPageNavbar = () => {
    const user = useAuthStore(state => state.user);
    const navigate = useNavigate();
    const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit 
                bg-white/70 dark:bg-black/70 
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
              <Link className="text-slate-500 hover:text-black dark:hover:text-white transition" to="/dashboard">
                Dashboard
              </Link>
              <Link className="text-slate-500 hover:text-black dark:hover:text-white transition" to="/snippets">
                Snippets
              </Link>
              <Link className="text-slate-500 hover:text-black dark:hover:text-white transition" to="/collections">
                Collections
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* ICONS */}
            <button className="material-symbols-outlined p-2 rounded-full hover:bg-slate-100 dark:hover:bg-[#222] transition active:scale-95" onClick={toggleDarkMode}>
              dark_mode
            </button>

            {/* CTA */}
            {user ? (
              <Link to="/dashboard" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition pr-1">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-none">
                    {user.username || 'User'}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center ring-1 ring-primary/20 shadow-sm uppercase text-sm">
                  {user.username?.[0] || 'U'}
                </div>
              </Link>
            ) : (
              <button
                className="px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-black text-white 
                           dark:bg-white dark:text-black 
                           hover:opacity-80 transition active:scale-95"
                onClick={() => navigate("/register")}
              >  
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
  )
}

export default LandingPageNavbar