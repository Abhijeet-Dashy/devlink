import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const LandingPageNavbar = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="bg-[#f5f5f5]/60 backdrop-blur-xl dark:bg-[#0a0a0a]/60 backdrop-blur-xl border-2 border-black dark:border-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] rounded-xl font-inter flex justify-between items-center px-6 py-3 transition-colors">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <span className="text-xl font-black tracking-tight text-black dark:text-white uppercase transition-colors">
            DevLink
          </span>

          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            <Link
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              to="/snippets"
            >
              Snippets
            </Link>
            <Link
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              to="/collections"
            >
              Collections
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* DARK MODE BUTTON */}
          <button
            className="p-2 border-2 border-transparent hover:border-black dark:hover:border-white rounded-full transition-all text-black dark:text-white flex items-center justify-center"
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined text-lg">dark_mode</span>
          </button>

          {/* CTA */}
          {user ? (
            <Link
              to="/dashboard"
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-black dark:text-white transition-colors">
                  {user.username || "User"}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white text-black dark:text-white font-black flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors uppercase">
                {user.username?.[0] || "U"}
              </div>
            </Link>
          ) : (
            <button
              className="px-6 py-2 rounded-lg text-sm font-bold border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 transition-all active:translate-y-0 active:shadow-none"
              onClick={() => navigate("/register")}
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavbar;
