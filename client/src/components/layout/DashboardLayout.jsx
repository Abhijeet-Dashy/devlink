import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen w-screen flex overflow-hidden bg-white dark:bg-[#191919] text-gray-900 dark:text-gray-200 font-inter transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <TopBar />
        {/* Scrollable Document Area */}
        <div className="flex-1 overflow-y-auto w-full relative">
          {children}
        </div>
      </main>
    </div>
  );
}
