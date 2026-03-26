import React from "react";
import ItemCard from "../components/ItemCard"; // Make sure to adjust the import path if needed

export default function FolderPage() {
  const meshGradientStyle = {
    backgroundColor: "#f8f9fa",
    backgroundImage: `
      radial-gradient(at 0% 0%, rgba(73, 75, 214, 0.1) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(206, 214, 245, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(73, 75, 214, 0.05) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(225, 224, 255, 0.2) 0px, transparent 50%)
    `,
  };

  // The custom code block for the Merge Sort split card
  const mergeSortCodeNode = (
    <div className="h-full bg-slate-900 rounded-xl p-4 font-mono text-[11px] text-slate-300 overflow-hidden border border-slate-800 shadow-2xl">
      <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-error/40"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim/40"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-primary/40"></span>
      </div>
      <span className="text-indigo-400">function</span>{" "}
      <span className="text-blue-300">mergeSort</span>(arr) {"{"}
      <br />
      {"  "}
      <span className="text-indigo-400">if</span> (arr.length {"<="} 1){" "}
      <span className="text-indigo-400">return</span> arr;
      <br />
      {"  "}
      <span className="text-indigo-400">const</span> mid = Math.floor(arr.length / 2);
      <br />
      {"  "}
      <span className="text-indigo-400">const</span> left = mergeSort(arr.slice(0, mid));
      <br />
      {"  "}
      <span className="text-indigo-400">const</span> right = mergeSort(arr.slice(mid));
      <br />
      {"  "}
      <span className="text-indigo-400">return</span> merge(left, right);
      <br />
      {"}"}
    </div>
  );

  return (
    <div
      className="bg-background font-body text-on-surface min-h-screen relative flex"
      style={meshGradientStyle}
    >
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 p-4 gap-2 h-screen w-64 bg-slate-50 dark:bg-slate-950 z-40">
        <div className="flex items-center gap-3 px-3 py-6">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">grid_view</span>
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 dark:text-slate-50 tracking-tight">
              DevLink
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              Personal Workspace
            </p>
          </div>
        </div>

        <nav className="flex-1 mt-6 flex flex-col gap-1">
          <a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          {/* Active Navigation Pill */}
          <a className="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg px-3 py-2 transition-all duration-200 ease-in-out relative after:content-[''] after:absolute after:-left-4 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-4 after:bg-[#494bd6] after:rounded-r" href="#">
            <span className="material-symbols-outlined">code</span>
            <span className="text-sm font-medium">DSA</span>
          </a>
          <a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm font-medium">Templates</span>
          </a>
          <a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="text-sm font-medium">Reading List</span>
          </a>
          <div className="mt-8 px-3">
            <button className="w-full py-2.5 px-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-lg text-sm font-semibold shadow-md shadow-primary/10 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-sm">add</span>
              New Folder
            </button>
          </div>
        </nav>

        <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-1">
          <a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
          <a className="flex items-center gap-3 text-slate-600 dark:text-slate-400 px-3 py-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all duration-200 ease-in-out" href="#">
            <span className="material-symbols-outlined">delete</span>
            <span className="text-sm font-medium">Trash</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen relative flex flex-col w-full">
        {/* TopNavBar */}
        <header className="fixed top-0 left-0 right-0 md:left-64 z-50 flex justify-between items-center px-6 py-3 max-w-7xl mx-auto rounded-2xl mt-4 md:mx-4 border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xl shadow-slate-200/40 dark:shadow-none transition-all">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none"
                placeholder="Search patterns, snippets, or tags..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button className="p-2 text-on-surface-variant hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <img
                alt="User profile avatar"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrcnZHn9-saY5eBh-HZZv4RUihJVvI-MQvsl39kXfrxzbgUEyybcjtTCtLB5BbLeJ9IUFeR8B1Nf8F4oxS2X6o1EkHBhxAmXmWOXtGQ3z1Fwsv6q_sSwH6DGMp2JvKJJX_hXFaa8vUg5O4x1DE1x7shQxZZgVQduZSi9H_qHfSRes-tsSuM9vSXm2T4AlVm1d0OytPD_7Y1oTwgD6CQJWmHrTpY1CmEpy2Xdnlmb59IeJ0-sPY4Tfo2k0cJyQmm_r8vxFK33C2Jw"
              />
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <section className="mt-28 px-8 pb-12 flex-1 max-w-7xl mx-auto w-full">
          {/* Folder Header & Action Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <nav className="flex items-center gap-2 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mb-2">
                <span>Folders</span>
                <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                <span className="text-primary-dim">DSA</span>
              </nav>
              <h2 className="text-4xl font-extrabold text-on-surface tracking-tighter">
                DSA Patterns
              </h2>
              <p className="text-on-surface-variant mt-2 max-w-xl">
                Curated collection of fundamental data structures and algorithmic patterns for technical interviews.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-surface-container rounded-xl p-1 shadow-inner">
                <button className="p-2 bg-surface-container-lowest shadow-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-on-surface">
                  <span className="material-symbols-outlined">format_list_bulleted</span>
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest border border-outline-variant/15 rounded-xl text-sm font-semibold hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filter
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-primary to-primary-dim text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined text-lg">add_circle</span>
                Add Item
              </button>
            </div>
          </div>

          {/* Bento Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: BFS (Standard Text Card) */}
            <ItemCard
              icon="hub"
              color="primary"
              title="Breadth First Search"
              description="An algorithm for traversing or searching tree or graph data structures. It starts at the tree root and explores all neighbor nodes..."
              tags={["Graphs", "Queue"]}
            />

            {/* Card 2: Two Pointers (Standard Card with custom Code block injected via children) */}
            <ItemCard
              icon="swap_horiz"
              color="tertiary"
              title="Two Pointers"
              tags={["Arrays", "Linear"]}
            >
              <div className="bg-surface-container-low rounded-lg p-3 mb-4 font-mono text-xs text-on-tertiary-fixed-variant border border-outline-variant/10 relative z-10">
                <div className="flex gap-2">
                  <span className="text-primary-dim">while</span>{" "}
                  <span>(left {"<"} right) {"{"}</span>
                </div>
                <div className="pl-4 text-on-surface-variant/70">
                  // logic here
                </div>
                <div>{"}"}</div>
              </div>
            </ItemCard>

            {/* Card 3: Image Preview Card */}
            <ItemCard
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAZNKHZiX9H49XqCu-kGE5Dnf-j-n4OHb_eKdnGcfQtmKU1U6jTCSC6jVrY5H1f3i6ld2CILqF1SISfOnCKRbnxcVTf834DvZJKfET59olGIkwSwpTJ9FrkbbTw6HmGaAJxKooqvjEvLELYlbsCpuKlTmG36g29zMp-HtR3sRf-UsbSjn6axwXhzGP37oZW-ZH5HzDASVTtAJU8-csz93I5Mw5jMPJV8SS1qPB8ch2uj6I8HuHONbg9PuHQd-l7ThvcVKafhauuMA"
              title="Dynamic Programming"
              description="A method for solving complex problems by breaking them down into simpler subproblems."
              tags={["Optimization"]}
            />

            {/* Card 4: Sliding Window */}
            <ItemCard
              icon="border_all"
              color="secondary"
              title="Sliding Window"
              description="Technique for finding subarrays in an array that satisfy given conditions, optimizing from O(n²) to O(n)."
              tags={["Arrays", "Strings"]}
            />

            {/* Card 5: Merge Sort (Wide Card using the splitNode prop) */}
            <ItemCard
              className="lg:col-span-2"
              icon="sort"
              color="primary"
              title="Merge Sort Implementation"
              description="Divide and conquer algorithm that was invented by John von Neumann in 1945. Most stable sorting algorithm for large datasets."
              tags={["Divide & Conquer", "Sorting"]}
              splitNode={mergeSortCodeNode}
            />

          </div>
        </section>

        {/* Floating Action Button (Mobile Only) */}
        <button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50">
          <span className="material-symbols-outlined text-2xl">add</span>
        </button>
      </main>

      {/* Mobile Navigation Shell */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100 flex justify-around items-center py-3 z-50">
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
          <span className="material-symbols-outlined text-2xl">grid_view</span>
          <span className="text-[10px] font-medium">Dashboard</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-primary" href="#">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
          <span className="text-[10px] font-bold">DSA</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
          <span className="material-symbols-outlined text-2xl">description</span>
          <span className="text-[10px] font-medium">Templates</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
          <span className="material-symbols-outlined text-2xl">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </a>
      </nav>
    </div>
  );
}