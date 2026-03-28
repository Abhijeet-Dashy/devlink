import React from "react";

export default function Loader({ size = "md", text = "Loading..." }) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeClasses[size]} rounded-full border-primary/20 border-t-primary animate-spin`}
      />
      {text && (
        <p className="text-sm font-semibold text-slate-500 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
