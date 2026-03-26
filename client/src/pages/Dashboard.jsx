import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, authFetch, logout } = useAuth();
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await authFetch('/api/folders');
        const data = await response.json();
        if (data.success) {
          setFolders(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch folders", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFolders();
  }, []);

  const handleNewFolder = async () => {
    const name = window.prompt("Enter new folder name:");
    if (!name) return;
    
    try {
      const response = await authFetch('/api/folders', {
        method: 'POST',
        body: JSON.stringify({ name })
      });
      const data = await response.json();
      if (data.success) {
        setFolders([...folders, data.data]);
      }
    } catch (error) {
      console.error("Failed to create folder", error);
    }
  };

  const meshGradientBg = {
    backgroundColor: "#f8f9fa",
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(73, 75, 214, 0.03) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(74, 83, 107, 0.03) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(73, 75, 214, 0.02) 0px, transparent 50%)
    `,
  };

  const ghostBorder = {
    border: "1px solid rgba(171, 179, 183, 0.15)",
  };

  return (
    <div className="bg-background font-body text-on-surface antialiased overflow-hidden flex h-screen w-full">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 p-4 gap-2 h-screen w-64 bg-slate-50 dark:bg-slate-950 z-40">
        {/* Header Section */}
        <div className="flex items-center gap-3 px-3 py-6">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">grid_view</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 dark:text-slate-50 tracking-tight leading-none">
              DevLink
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-1">
              Personal Workspace
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col gap-1 mt-6 overflow-y-auto">
          <Link
            className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg px-3 py-2 flex items-center gap-3 transition-all duration-200 ease-in-out"
            to="/dashboard"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              grid_view
            </span>
            <span className="text-sm font-medium Inter">Dashboard</span>
          </Link>
          
          {loading ? (
             <div className="px-3 py-2 text-sm text-slate-400">Loading folders...</div>
          ) : (
            folders.map((folder) => (
              <Link
                key={folder._id}
                className="text-slate-600 dark:text-slate-400 px-3 py-2 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out"
                to={`/folder/${folder._id}`}
              >
                <span className="material-symbols-outlined">folder</span>
                <span className="text-sm font-medium Inter truncate">{folder.name}</span>
              </Link>
            ))
          )}
        </nav>

        {/* Bottom CTA & Footer Actions */}
        <div className="mt-auto flex flex-col gap-2">
          <button 
            onClick={handleNewFolder}
            className="w-full py-3 bg-primary text-on-primary font-semibold text-sm rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/10 mb-4"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            New Folder
          </button>
          <a
            className="text-slate-600 dark:text-slate-400 px-3 py-2 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium Inter">Settings</span>
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 px-3 py-2 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out"
            href="#"
          >
            <span className="material-symbols-outlined">delete</span>
            <span className="text-sm font-medium Inter">Trash</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main
        className="flex-1 md:ml-64 flex flex-col h-screen overflow-y-auto relative"
        style={meshGradientBg}
      >
        {/* TopNavBar */}
        <header className="fixed top-0 left-0 right-0 md:left-64 z-50 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto rounded-2xl mt-4 mx-4 border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xl shadow-slate-200/40 dark:shadow-none">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                className="w-full bg-slate-100/50 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 font-sans outline-none"
                placeholder="Search architecture, snippets, links..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-6">
            <button
              className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors"
              title="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button
              onClick={logout}
              className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors flex items-center"
              title="Logout"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900 leading-none">
                  {user?.username || 'User'}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">{user?.email}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center ring-2 ring-white shadow-sm uppercase">
                {user?.username?.[0] || 'U'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Body: Empty State */}
        <section className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-16">
          <div className="max-w-2xl w-full text-center space-y-12">
            {/* Asymmetric Decorative Element */}
            <div className="relative inline-block mx-auto">
              <div
                className="w-64 h-64 mx-auto bg-surface-container rounded-3xl rotate-3 flex items-center justify-center shadow-sm"
                style={ghostBorder}
              >
                <div className="w-48 h-48 bg-surface-container-lowest rounded-2xl -rotate-6 flex flex-col items-center justify-center shadow-2xl shadow-slate-200/60 p-6 relative overflow-hidden group">
                  {/* Mesh gradient inside the illustration */}
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary to-transparent"></div>
                  <span className="material-symbols-outlined text-5xl text-primary/40 mb-4">
                    cloud_off
                  </span>
                  <div className="w-full space-y-2 relative z-10">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                    <div className="h-1.5 w-3/4 bg-slate-100 rounded-full"></div>
                    <div className="h-1.5 w-1/2 bg-slate-100 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Secondary accent floating shape */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                <span className="material-symbols-outlined">draw</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                The canvas is <span className="text-primary italic">open.</span>
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mx-auto font-body leading-relaxed">
                No items yet. Start by adding your first snippet or link to
                build your personal knowledge vault.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleNewFolder} className="px-8 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary font-bold text-lg rounded-xl flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  create_new_folder
                </span>
                Create Folder
              </button>
            </div>

            {/* Subtle Footer Metadata for Architectural Feel */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-slate-200/60 opacity-60">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Vault Integrity
                </p>
                <p className="text-xs font-medium text-slate-600">
                  All snippets are encrypted and mirrored across your
                  architectural nodes.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  Workflow Sync
                </p>
                <p className="text-xs font-medium text-slate-600">
                  Connect GitHub or GitLab to automatically ingest your
                  most-used templates.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  System Status
                </p>
                <p className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  Architecture core active and responsive.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation (Visible only on small screens) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-xl rounded-2xl flex justify-around items-center py-4 shadow-2xl shadow-slate-300 z-50 border border-white/50">
        <Link className="text-primary flex flex-col items-center gap-1" to="/dashboard">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            grid_view
          </span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            Dashboard
          </span>
        </Link>
        <div className="relative -top-8 ml-auto mr-auto">
          <button onClick={handleNewFolder} className="w-14 h-14 bg-primary text-white rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center transform transition-transform active:scale-90">
            <span className="material-symbols-outlined text-3xl">create_new_folder</span>
          </button>
        </div>
        <button onClick={logout} className="text-slate-400 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined">logout</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">
            Logout
          </span>
        </button>
      </nav>
    </div>
  );
}