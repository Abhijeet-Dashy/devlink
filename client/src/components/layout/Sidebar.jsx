import React, { useState } from 'react';
import { 
  Search, Settings, PlusCircle, 
  ChevronRight, ChevronDown, 
  Home, Code, Bookmark, FolderOpen, 
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon: Icon, label, active, onClick, children }) => {
  return (
    <div className="flex flex-col">
      <div 
        onClick={onClick}
        className={`group flex items-center gap-3 px-3 py-1.5 mx-2 rounded-md cursor-pointer transition-colors text-sm font-medium
        ${active 
          ? 'bg-black/5 dark:bg-white/10 text-gray-900 dark:text-gray-100' 
          : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200'}
      `}
      >
        {Icon && <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />}
        <span className="flex-1 truncate">{label}</span>
      </div>
      {children}
    </div>
  );
};

export default function Sidebar() {
  const [workspaceOpen, setWorkspaceOpen] = useState(true);

  return (
    <aside className="w-64 flex-shrink-0 h-full bg-[#fbfbfa] dark:bg-[#202020] border-r border-black/5 dark:border-white/5 hidden md:flex flex-col transition-colors duration-200">
      {/* User Switcher */}
      <div className="px-4 py-3 border-b border-black/5 dark:border-white/5 flex items-center justify-between cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-5 h-5 rounded bg-emerald-500 text-white flex justify-center items-center text-xs font-bold uppercase shrink-0 shadow-sm">
            M
          </div>
          <span className="text-sm font-semibold truncate text-gray-800 dark:text-gray-200">Matt's Workspace</span>
        </div>
        <div className="flex gap-1">
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Main Actions */}
      <div className="py-3 space-y-0.5">
        <NavItem icon={Search} label="Search" />
        <NavItem icon={Settings} label="Settings" />
        <NavItem icon={PlusCircle} label="New Page" />
      </div>

      {/* Workspace Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-1.5 flex items-center justify-between group cursor-pointer" onClick={() => setWorkspaceOpen(!workspaceOpen)}>
          <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Workspace</span>
          {workspaceOpen ? <ChevronDown className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100" /> : <ChevronRight className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100" />}
        </div>
        
        {workspaceOpen && (
          <div className="py-1 space-y-0.5">
            <Link to="/dashboard">
              <NavItem icon={Home} label="Dashboard Home" active />
            </Link>
            <NavItem icon={Code} label="Code Snippets" />
            <NavItem icon={Bookmark} label="Web Bookmarks" />
            <NavItem icon={FolderOpen} label="Projects" />
          </div>
        )}

        <div className="px-4 mt-6 py-1.5 flex items-center justify-between group">
          <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Private Pages</span>
          <Plus className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
        </div>
        <div className="py-1 space-y-0.5">
          <NavItem icon={FolderOpen} label="Drafts" />
          <NavItem icon={FolderOpen} label="Personal Notes" />
        </div>
      </div>
      
      {/* Bottom Actions */}
      <div className="p-3 border-t border-black/5 dark:border-white/5">
        <NavItem icon={Plus} label="New component" />
      </div>
    </aside>
  );
}
