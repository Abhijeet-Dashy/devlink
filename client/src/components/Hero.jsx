import CTA from "../components/CTA";

const Hero = () => {
    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-x-hidden">
        {/* HERO SECTION: Architectural Depth */}
        <section className="relative min-h-[716px] flex flex-col items-start justify-center">
          <div className="z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 Architectural Update
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-on-surface">
              Save Anything.
              <br />
              <span className="text-primary">Organize Everything.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              The structural workspace for modern developers. A drafting table
              for your code snippets, documentation, and inspiration—built with
              precision and intent.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(192,193,255,0.3)] transition-all flex items-center gap-2 group">
                Get Started Free
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="bg-surface-container text-on-surface border border-outline-variant/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
                View Demo
              </button>
            </div>
          </div>

          {/* Floating 3D Mocks */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 hidden xl:block w-1/2 h-full pointer-events-none">
            {/* Code Snippet Card */}
            <div className="absolute top-[10%] right-[15%] w-[420px] bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-2xl rotate-[-5deg] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error/40"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                </div>
                <span className="text-[10px] text-outline font-mono">
                  auth_service.ts
                </span>
              </div>
              <pre className="text-xs font-mono text-on-surface-variant leading-relaxed">
                <span className="text-primary">async</span>{" "}
                <span className="text-tertiary">function</span> validateSession(token: string) {"{\n"}
                {"  "}
                <span className="text-primary">const</span> session = <span className="text-primary">await</span> db.query(
                {"\n    "}
                <span className="text-on-secondary-container">
                  'SELECT * FROM sessions WHERE id = ?'
                </span>
                ,{"\n    "}[token]
                {"\n  "});
                {"\n  "}
                <span className="text-outline">
                  // Logic for architectural validation
                </span>
                {"\n  "}
                <span className="text-primary">return</span> session.isValid;
                {"\n}"}
              </pre>
            </div>

            {/* Link Preview Card */}
            <div className="absolute bottom-[20%] right-[5%] w-[380px] bg-surface-container-high p-4 rounded-2xl border border-outline-variant/10 shadow-2xl rotate-[8deg]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <img
                    alt="Asset Preview"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2WRGN2rhXxCxnVB2zXMiBgJjlbKRzSgf8HCdI9CtRP_04IDKPmvOtVpdsRmBF9z5ykZ_Vmhs2Y4qDwmNBsS6Vug9Zhk7owla0heB4BawOcvhm1A8UM1cpyCammGEyWxnWVzqntNzi7IP5jTIiWqc2jw6msE9bVPBocnpl74pQ0qNfIned5KHaWa-ljHowBZXYOLXv0yRbg57ZW5nBUZXD5PSTxuEYy-UqHvTpRGWoNpKPUI9BhMFHES693EufGCqcl7G--5-4mA"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    Design Tokens v1.2
                  </p>
                  <p className="text-[10px] text-outline uppercase tracking-widest mt-1">
                    Figma Documentation
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[8px] rounded uppercase font-bold">
                      UI
                    </span>
                    <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[8px] rounded uppercase font-bold">
                      Docs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID FEATURES */}
        <section className="mt-32">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4">
              Masterfully Organized.
            </h2>
            <p className="text-on-surface-variant">
              Built for the complexity of modern engineering.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Feature 1: Main Focus */}
            <div className="col-span-12 md:col-span-8 bg-surface-container p-8 rounded-3xl border border-outline-variant/10 bg-gradient-to-br from-[#131b2e] to-[#0b1326] flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  grid_view
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-on-surface mb-4">
                  Universal Knowledge Base
                </h3>
                <p className="text-on-surface-variant max-w-md">
                  The core of DevLink. Store snippets, markdown docs, API
                  endpoints, and design system links in a unified architectural
                  structure.
                </p>
              </div>
              <div className="mt-12 flex gap-4 overflow-hidden relative z-10">
                <div className="shrink-0 bg-surface-container-highest/60 p-4 rounded-2xl border border-outline-variant/20 w-48">
                  <div className="h-2 w-12 bg-primary/30 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-outline-variant/20 rounded"></div>
                    <div className="h-1.5 w-3/4 bg-outline-variant/20 rounded"></div>
                  </div>
                </div>
                <div className="shrink-0 bg-surface-container-highest/60 p-4 rounded-2xl border border-outline-variant/20 w-48">
                  <div className="h-2 w-12 bg-tertiary/30 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-outline-variant/20 rounded"></div>
                    <div className="h-1.5 w-2/3 bg-outline-variant/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-[200px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  architecture
                </span>
              </div>
            </div>

            {/* Feature 2: Team Sync */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 flex flex-col items-center text-center justify-center">
              <div className="w-16 h-16 bg-tertiary/20 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">
                  groups
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">
                Architectural Harmony
              </h3>
              <p className="text-sm text-on-surface-variant">
                Sync entire libraries across your engineering team with shared
                collections and permissions.
              </p>
              <div className="mt-8 flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-600 overflow-hidden">
                  <img
                    alt="User 1"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-GYsDcrpOAeKvFZfBiTYE_N1s35YIYg1VOFTVK-CCNYlVR2SR6QC8Y1Dv3rVrjsImLqjXsDbxF_hjXVssR9Kgf5I8wbqEveyMTBU61JBbxcOI-E7_tnT4sIhC9ZWg56au_AUG-T-Cn9EzU37E174_B7lXhk_Lq601wTYObzn4m0viH02o5bsv-SAOYSk2dm_O2F9fmyV6SB-maVK8BatkXO_XBj08WCqxUxEukI2xT2lz6RkkoEiAecTrhs48AJtk4mUfZW0UUg"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-600 overflow-hidden">
                  <img
                    alt="User 2"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPC3Mxo78h8UHS-NqRqn8XglFbWPnWoum2TkuO9_8rBU8xQ1JkloQiX5MFxFxpCBynOY2coNJx_UkiTC0gpiEcpIKHCJ_jNnZqKpBwvwUGRHxwbvkkOjWLsov7OHzZ4k7BnfOd9FyMYx9OZRXjxgEioP-5DV-CxVT4ZJnQsuCqTcce7gjz4-LdR5EDW55-8YEUPSZ3i1bHbtC6Qdp_zG41xX8RbLk7ynpIBPnua_fjLb4IT49ziMKETII3mWMhJOgAHfhfcG8zew"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-slate-600 overflow-hidden">
                  <img
                    alt="User 3"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU-GxJfJyLp4dKyTf5OuRCbNxNvPNYzgoBWL0IQHmavqrOUA_msnkQaFngYPoUmPz2OyI80gv3UhQgZ3dxFXP4Hn_sKEbJIdkBC4kesq0QUgSopAD7tEmP5r4AjX_AQbXgqb83_lcstMVqyCqeDvTV5UM47d8_qiCF--wmagHqeB75y5FLISg8QPBldrXgdVKN0z_-TXKJaPM1WVjGbkPFsfpeWJuGsOyfmUXukfYjt9WW56v6-S-ac5yaxGJakgU79MigzdgSdQ"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>
            </div>

            {/* Feature 3: Smart Search */}
            <div className="col-span-12 md:col-span-4 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10">
              <h3 className="text-xl font-bold text-on-surface mb-4">
                Semantic Retrieval
              </h3>
              <p className="text-sm text-on-surface-variant mb-8">
                Search by intent, not just keywords. Our architecturally aware
                search finds exactly what you need.
              </p>
              <div className="bg-background rounded-xl p-3 border border-outline-variant/5">
                <div className="flex items-center gap-2 text-xs text-outline mb-2">
                  <span className="material-symbols-outlined text-sm">
                    search
                  </span>
                  <span>"Responsive card layout with tailwind"</span>
                </div>
                <div className="h-1 bg-primary/20 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
              </div>
            </div>

            {/* Feature 4: Cloud Engine */}
            <div className="col-span-12 md:col-span-8 bg-surface-container-highest p-8 rounded-3xl border border-outline-variant/10 flex items-center gap-8 overflow-hidden">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-on-surface mb-4">
                  High-Speed Vault
                </h3>
                <p className="text-on-surface-variant">
                  Cloud-native architecture ensures your snippets are encrypted
                  and available anywhere in milliseconds.
                </p>
                <div className="mt-6 flex gap-3">
                  <div className="px-3 py-1 bg-on-background/5 text-[10px] rounded border border-outline-variant/20 uppercase font-bold tracking-widest">
                    Global CDN
                  </div>
                  <div className="px-3 py-1 bg-on-background/5 text-[10px] rounded border border-outline-variant/20 uppercase font-bold tracking-widest">
                    E2E Encrypted
                  </div>
                </div>
              </div>
              <div className="hidden sm:block shrink-0 relative">
                <div className="w-32 h-32 bg-primary/10 rounded-2xl border border-primary/20 rotate-12 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-5xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA/>
      </main>
    )
}

export default Hero