import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { FileText, Link as LinkIcon, Image, Clock } from 'lucide-react';

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Cover Image */}
      <div className="w-full h-48 sm:h-64 object-cover group relative bg-gradient-to-r from-emerald-100 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-900/20 transition-colors duration-200">
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="px-3 py-1 bg-white/50 backdrop-blur-md dark:bg-black/50 text-xs font-medium rounded-md text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10 hover:bg-white dark:hover:bg-[#202020] transition-colors">
            Change cover
          </button>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto w-full px-12 pb-32">
        {/* Icon */}
        <div className="-mt-12 mb-4 group relative inline-block">
          <div className="text-[78px] leading-none select-none">🏠</div>
          <div className="absolute top-0 right-0 -mt-2 -mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="px-2 py-1 bg-white dark:bg-[#2a2a2a] text-xs font-medium rounded-md text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 shadow-sm hover:bg-gray-50 dark:hover:bg-[#333] transition-colors whitespace-nowrap">
              Change icon
            </button>
          </div>
        </div>

        {/* Title Area */}
        <h1 className="text-[40px] font-bold text-gray-900 dark:text-gray-100 mb-8 outline-none placeholder-gray-300 dark:placeholder-gray-700 font-inter cursor-text">
          Dashboard Home
        </h1>

        {/* Content Area */}
        <div className="space-y-6 text-gray-800 dark:text-gray-300 text-base leading-relaxed">
          <p className="text-gray-400 group flex items-center gap-1 cursor-text w-full">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer px-1 text-gray-300 dark:text-gray-600 hover:text-gray-500">
              <span className="material-symbols-outlined text-sm">drag_indicator</span>
            </span>
            Type '/' for commands
          </p>

          <div className="group flex items-start -ml-6 gap-1 relative">
            <div className="w-5 mt-1 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-gray-300 dark:text-gray-600 hover:text-gray-500">
              <span className="material-symbols-outlined text-sm font-light">drag_indicator</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-2 border-b border-gray-100 dark:border-white/10 pb-1 inline-block">Getting Started</h3>
              <p>Welcome to your DevLink workspace! This is a Notion-style dashboard where you can easily organize your developer life.</p>
            </div>
          </div>

          <div className="group flex items-start -ml-6 gap-1 mt-8 relative">
            <div className="w-5 mt-1 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-gray-300 dark:text-gray-600 hover:text-gray-500">
              <span className="material-symbols-outlined text-sm font-light">drag_indicator</span>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {[
                  { icon: FileText, title: 'Draft a Note', desc: 'Capture meetings or ideas' },
                  { icon: LinkIcon, title: 'Save a Link', desc: 'Bookmark tools or docs' },
                  { icon: Image, title: 'Upload Media', desc: 'Drag and drop files here' },
                  { icon: Clock, title: 'View History', desc: 'See recently viewed items' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-md bg-gray-100 dark:bg-[#2a2a2a] flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="group flex items-start -ml-6 gap-1 mt-8 relative">
            <div className="w-5 mt-1 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-gray-300 dark:text-gray-600 hover:text-gray-500">
              <span className="material-symbols-outlined text-sm font-light">drag_indicator</span>
            </div>
            <div className="flex-1 border-t border-gray-200 dark:border-white/10 pt-4 text-sm text-gray-500">
              <p>Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#333] border border-gray-200 dark:border-white/20 text-xs font-sans text-gray-700 dark:text-gray-300">Cmd</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#333] border border-gray-200 dark:border-white/20 text-xs font-sans text-gray-700 dark:text-gray-300">K</kbd> to search your workspace.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
