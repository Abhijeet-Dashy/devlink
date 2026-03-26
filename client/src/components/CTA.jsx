import React from "react";

const CTA = () => {
    return (
        <section className="mt-40 mb-20 text-center relative">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl font-black tracking-tighter text-on-surface mb-6">
              Build your library today.
            </h2>
            <p className="text-on-surface-variant text-lg mb-10">
              Join 50k+ developers who have moved their technical brain to
              DevLink. The professional standard for technical organization.
            </p>
            <div className="bg-surface-container-high p-2 rounded-2xl border border-outline-variant/10 flex items-center shadow-xl">
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-4 text-on-surface placeholder:text-outline-variant outline-none"
                placeholder="Enter your work email"
                type="email"
              />
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-fixed transition-colors">
                Start Free
              </button>
            </div>
            <p className="mt-6 text-xs text-outline">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </section>
    )
}

export default CTA