import React from 'react';
import { MessageSquare, Star, MoreHorizontal, Clock } from 'lucide-react';

export default function TopBar() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-[45px] w-full bg-white/90 dark:bg-[#191919]/90 backdrop-blur-[10px] flex items-center justify-between px-4 sticky top-0 z-10 transition-colors duration-200">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 font-medium">
        <div className="px-1.5 py-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors flex items-center gap-2">
          <span className="text-gray-900 dark:text-gray-200">DevLink</span>
        </div>
        <div className="text-gray-300 dark:text-gray-600">/</div>
        <div className="px-1.5 py-1 rounded hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors flex items-center gap-2">
          <span className="text-gray-900 dark:text-gray-200 truncate max-w-[200px]">Dashboard Home</span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-0.5">
        <button className="px-2 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors mr-2" onClick={toggleDarkMode}>
          Theme
        </button>
        <button className="px-2 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors hidden sm:block mr-2">
          Share
        </button>
        <button className="p-1.5 text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors hidden sm:block">
          <MessageSquare className="w-4 h-4" />
        </button>
        <button className="p-1.5 text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors hidden sm:block">
          <Clock className="w-4 h-4" />
        </button>
        <button className="p-1.5 text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors">
          <Star className="w-4 h-4" />
        </button>
        <button className="p-1.5 text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 rounded transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
