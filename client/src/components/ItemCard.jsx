import React, { memo } from "react";

const ItemCard = memo(function ItemCard({
  title,
  description,
  tags = [],
  icon,
  color = "primary", // "primary", "secondary", or "tertiary"
  imageSrc,
  splitNode, // Used for the side-by-side Merge Sort layout
  className = "",
  children, // Used to inject custom content (like the Two Pointers code block)
  onClick, // ADDED: onClick prop
}) {
  const glassPanelStyle = {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  };

  // Map the color prop to your specific Tailwind utility classes
  const colorStyles = {
    primary: {
      text: "text-primary",
      bg: "bg-primary/10",
      glow: "bg-primary/5 group-hover:bg-primary/10",
    },
    secondary: {
      text: "text-secondary",
      bg: "bg-secondary/10",
      glow: "bg-secondary/5 group-hover:bg-secondary/10",
    },
    tertiary: {
      text: "text-tertiary",
      bg: "bg-tertiary/10",
      glow: "bg-tertiary/5 group-hover:bg-tertiary/10",
    },
  };

  const selectedColor = colorStyles[color] || colorStyles.primary;

  return (
    <div
      onClick={onClick} // ADDED: Click handler
      className={`group relative rounded-2xl border border-white/40 shadow-xl shadow-on-surface/5 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer ${
        imageSrc ? "p-0" : "p-6"
      } ${className}`}
      style={glassPanelStyle}
    >
      {/* Ambient Glow (Hidden if it's an image card) */}
      {!imageSrc && (
        <div
          className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-colors ${selectedColor.glow}`}
        ></div>
      )}

      {/* --- VARIATION 1: Image Header Card --- */}
      {imageSrc && (
        <>
          <div className="h-32 w-full relative">
            <img
              alt={title}
              className="w-full h-full object-cover"
              src={imageSrc}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>
          <div className="p-6 pt-2 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-on-surface tracking-tight">
                {title}
              </h3>
              <span className="material-symbols-outlined text-on-surface-variant text-sm">
                link
              </span>
            </div>
            {description && (
              <p className="text-sm text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-surface-container text-[11px] font-bold text-on-surface-variant rounded-md uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}

      {/* --- VARIATION 2: Standard or Split Content Card --- */}
      {!imageSrc && (
        <div className={`flex flex-col md:flex-row gap-6 h-full relative z-10`}>
          
          {/* Left / Main Column */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-xl ${selectedColor.bg}`}>
                <span
                  className={`material-symbols-outlined ${selectedColor.text}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
              </div>
              {!splitNode && (
                <button 
                  // ADDED: Stop propagation so clicking the menu doesn't trigger the card modal
                  onClick={(e) => e.stopPropagation()} 
                  className="text-on-surface-variant hover:text-on-surface relative z-20"
                >
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              )}
            </div>

            <h3 className="text-xl font-bold text-on-surface mb-2 tracking-tight">
              {title}
            </h3>

            {description && (
              <p
                className={`text-sm text-on-surface-variant leading-relaxed ${
                  !splitNode ? "line-clamp-3 mb-6" : "mb-4"
                }`}
              >
                {description}
              </p>
            )}

            {/* Custom inner content injected here */}
            {children}

            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-surface-container text-[11px] font-bold text-on-surface-variant rounded-md uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (Only renders if splitNode is provided) */}
          {splitNode && (
            <div className="flex-1">
              {splitNode}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

export default ItemCard;