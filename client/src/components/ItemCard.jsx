import React, { memo } from "react";

const ItemCard = memo(function ItemCard({
  title,
  description,
  tags = [],
  icon,
  color = "primary",
  imageSrc,
  splitNode,
  className = "",
  children,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-[#0a0a0a] shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col cursor-pointer ${
        imageSrc ? "p-0" : "p-4"
      } ${className}`}
    >
      {/* Decorative inner halftone accent on hover */}
      {!imageSrc && (
        <div className="absolute top-0 right-0 w-24 h-24 halftone-bg opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 rounded-bl-full pointer-events-none transition-opacity duration-300"></div>
      )}

      {/* --- VARIATION 1: Image Header Card --- */}
      {imageSrc && (
        <>
          <div className="h-28 w-full relative border-b-2 border-black dark:border-white bg-[#ccc] dark:bg-[#222]">
            <img
              alt={title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              src={imageSrc}
            />
            <div className="absolute inset-0 halftone-bg opacity-30 dark:opacity-20 mix-blend-color-burn dark:mix-blend-screen pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
          <div className="p-3 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1.5">
              <h3 className="text-sm font-black text-black dark:text-white uppercase tracking-tight line-clamp-1">
                {title}
              </h3>
              <span className="material-symbols-outlined text-black dark:text-white text-[12px] bg-[#f5f5f5] dark:bg-[#0a0a0a] border-2 border-black dark:border-white px-0.5">
                link
              </span>
            </div>
            {description && (
              <p className="text-[10px] font-bold text-gray-600 dark:text-gray-400 line-clamp-2 mb-2 leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-1 py-0.5 bg-black dark:bg-white text-[9px] font-black text-[#f5f5f5] dark:text-black uppercase tracking-widest border border-black dark:border-white"
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
        <div className={`flex flex-col md:flex-row gap-3 h-full relative z-10`}>
          {/* Left / Main Column */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2.5">
              <div className="p-1 border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-[#0a0a0a] shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)]">
                <span
                  className="material-symbols-outlined text-black dark:text-white text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
              </div>
              {!splitNode && (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-2 border-transparent hover:border-black dark:hover:border-white transition-colors relative z-20 px-0.5 py-0"
                >
                  <span className="material-symbols-outlined text-sm">
                    more_horiz
                  </span>
                </button>
              )}
            </div>

            <h3 className="text-sm font-black text-black dark:text-white mb-1.5 uppercase tracking-tight line-clamp-2">
              {title}
            </h3>

            {description && (
              <p
                className={`text-[10px] font-bold text-gray-600 dark:text-gray-400 leading-relaxed ${
                  !splitNode ? "line-clamp-3 mb-3" : "mb-2"
                }`}
              >
                {description}
              </p>
            )}

            {children}

            <div className="flex flex-wrap gap-1.5 mt-auto relative z-10 pt-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-1.5 py-0.5 border-2 border-black dark:border-white bg-[#f5f5f5] dark:bg-[#0a0a0a] text-black dark:text-white text-[8px] font-black uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {Object.keys(splitNode || {}).length > 0 && (
            <div className="flex-1">{splitNode}</div>
          )}
        </div>
      )}
    </div>
  );
});

export default ItemCard;
