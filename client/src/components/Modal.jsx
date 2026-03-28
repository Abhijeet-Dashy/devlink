import React from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center font-inter p-4">
      {/* Brutalist Backdrop */}
      <div className="absolute inset-0 bg-[#f5f5f5]/80 dark:bg-[#0a0a0a]/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="absolute inset-0 halftone-bg opacity-30 dark:opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen z-0"></div>

      {/* Modal Box */}
      <div 
        className="relative bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] w-full max-w-sm mx-4 overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b-2 border-black dark:border-white bg-[#e0e0e0] dark:bg-[#111111]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">square</span>
            <h3 className="text-xs font-black text-black dark:text-white uppercase tracking-widest">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-black dark:text-white hover:bg-black hover:text-[#f5f5f5] dark:hover:bg-white dark:hover:text-[#0a0a0a] border-2 border-transparent hover:border-black dark:hover:border-white transition-colors p-0.5 flex items-center justify-center shadow-none hover:shadow-none"
          >
            <span className="material-symbols-outlined text-sm font-bold">close</span>
          </button>
        </div>
        {/* Content */}
        <div className="p-4 bg-[#f5f5f5] dark:bg-[#0a0a0a]">
          {children}
        </div>
      </div>
    </div>
  );
}
