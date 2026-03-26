import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Custom inline styles converted from your CSS
  const architecturalGridStyle = {
    backgroundSize: "40px 40px",
    backgroundImage: `
      linear-gradient(to right, rgba(178, 177, 188, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(178, 177, 188, 0.05) 1px, transparent 1px)
    `,
  };

  const meshGradientStyle = {
    background: `
      radial-gradient(at 0% 0%, rgba(73, 88, 172, 0.08) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(150, 165, 255, 0.05) 0px, transparent 50%)
    `,
  };

  return (
    <main className="flex min-h-screen overflow-hidden bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Left Panel: Editorial Architectural Branding (40%) */}
      <section
        className="hidden md:flex md:w-[40%] sticky top-0 h-screen flex-col justify-between p-12 lg:p-20 overflow-hidden relative"
        style={{ ...architecturalGridStyle, ...meshGradientStyle }}
      >
        <div className="z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
              >
                architecture
              </span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-indigo-900">
              DevLink
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-6xl lg:text-7xl font-black text-primary leading-[1.1] tracking-tighter mb-8">
            Join the <span className="text-on-surface">Movement.</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xs">
            Architect your professional network with precision and intent.
          </p>
        </div>

        <div className="z-10 flex gap-6 items-center">
          <div className="flex -space-x-4">
            <img
              className="w-12 h-12 rounded-full border-4 border-surface object-cover"
              alt="Professional female architect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezrROHC1H1tcIIEJa0QkxXaLHpv7uwHg6aau7RzaFwCDijuFes2EoOF18Q4EdyUN8aiovqLa_fROfvGkoeRcpKoC2RVlzu4CZgnWxWjfKY2r3GcE2Zc-gafJ1o3DpvNatR6kjrnE_8IpxkstmtaQtEfmEaYMZYOCucvcG5LeGpMBnPjU1T1OuxQkrRHqgxvrNN3Tcsa7UjC5aB_TJkSSnS51zqWrGAiGE7pppfAklPMX_YLRuNm9YZ41grte_7z_QavD_OtcPOQ"
            />
            <img
              className="w-12 h-12 rounded-full border-4 border-surface object-cover"
              alt="Young male software developer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2GhjArircMn-qqmb_5o1n56wm8ElUkciCAlXeUVZ1PruKxjz1vqBafXjeNbjAS7fGMVc0XN-gcgoXi1nVRq2U7vTbb9ATV7PGAnUfXuWr6NzGmykdHlBs9V4bzlhc4E7_m-XOq8N6kvnXQV8KlAyLJUTSjdCVISwLmYYjiBpnXQBYQx41P9RCOh-J6u0exARzqISVyTfpwBcQTCmSB7K9RwYfiwEufy2iRuK8cuYfMdRZFKVivjVTU8VZDioJnC6U-z1UODceHQ"
            />
            <img
              className="w-12 h-12 rounded-full border-4 border-surface object-cover"
              alt="Creative professional"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsVlhVQNJdoRhHjzmJwVVxxD_QjcCJZ0e3AZoDfoIDjvU3a51xA1S6myDaE2WBgDoleVCjue8vwimVRLWycBYIDiZ1_L6hqFx8DexDHEyXTPJBAjVjVn8e4VoGpAJDnvcQouL25fm_yeUSIkkbDkLAbMlgb9vZEZjCuq-C2ErFdvdJcpV1IBEGEIlLHl7QCQh_pgzmHV3wh1nwGPWIlDlkZs7uxUVuO-eu_bM4S1a7Cg7tHTw2IwbHfj0DTFh-6VzC-lEc9-L14w"
            />
          </div>
          <span className="text-sm font-medium text-on-surface-variant">
            2k+ professionals joined today
          </span>
        </div>

        {/* Decorative background elements */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-tertiary-container/10 rounded-full blur-3xl"></div>
      </section>

      {/* Right Panel: Interaction Layer (60%) */}
      <section className="w-full md:w-[60%] flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-surface-container-low relative">
        {/* Mobile Logo Only */}
        <div className="absolute top-8 left-8 md:hidden">
          <span className="text-2xl font-black tracking-tighter text-primary">
            DevLink
          </span>
        </div>

        {/* Glassmorphic Auth Card */}
        <div className="w-full max-w-md bg-white/70 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 shadow-[0px_24px_48px_rgba(49,50,59,0.06)] border border-white/40">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-on-surface-variant">
              {isLogin
                ? "Continue your architectural journey"
                : "Start building your technical library"}
            </p>
          </div>

          {/* Toggle Pill */}
          <div className="flex p-1.5 bg-surface-container-high rounded-2xl mb-10 relative">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                isLogin
                  ? "bg-white text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 rounded-xl ${
                !isLogin
                  ? "bg-white text-primary shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Register
            </button>
          </div>

          {/* Auth Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5 relative">
              <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant ml-1">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-xl">
                  alternate_email
                </span>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5 relative">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold tracking-widest uppercase text-on-surface-variant ml-1">
                  Password
                </label>
                {isLogin && (
                  <a
                    className="text-xs font-semibold text-primary hover:text-primary-dim"
                    href="#"
                  >
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-xl">
                  lock_open
                </span>
                <input
                  className="w-full bg-surface-container-low border-0 rounded-xl py-4 pl-12 pr-12 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input
                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm font-medium text-on-surface-variant select-none cursor-pointer"
                htmlFor="remember"
              >
                {isLogin ? "Stay signed in for 30 days" : "I agree to the Terms & Privacy Policy"}
              </label>
            </div>

            <button
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-dim hover:-translate-y-0.5 transition-all duration-300"
              type="submit"
            >
              {isLogin ? "Sign In to DevLink" : "Create Account"}
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="absolute bottom-8 flex gap-8 text-xs font-bold tracking-widest uppercase text-outline-variant">
          <a className="hover:text-on-surface transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-on-surface transition-colors" href="#">
            Terms
          </a>
          <a className="hover:text-on-surface transition-colors" href="#">
            Security
          </a>
        </div>
      </section>
    </main>
  );
}