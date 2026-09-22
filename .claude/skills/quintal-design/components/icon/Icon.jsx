import React from "react";

/* Lucide (MIT) glyphs inlined so the system works offline.
   Substitution flag: Quintal has no icon set of its own yet; Lucide matches the
   1.8px rounded-cap line style the brand calls for. Extend PATHS as needed. */
const PATHS = {
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  sparkle: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
  blocks: "M4 4h7v7H4zM13 13h7v7h-7zM13 4h7v7h-7z",
  message: "M21 11.5a8.4 8.4 0 0 1-9 8.4 8.9 8.9 0 0 1-3.9-.9L3 20.5l1.6-4.7A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4z",
  check: "M20 6L9 17l-5-5",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowDown: "M12 5v14M6 13l6 6 6-6",
  x: "M18 6L6 18M6 6l12 12",
  menu: "M4 7h16M4 12h16M4 17h16",
  heart: "M19.5 12.6L12 20l-7.5-7.4a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.5 0l1 1 1-1a4.6 4.6 0 0 1 6.5 0 4.6 4.6 0 0 1 0 6.5z",
  plus: "M12 5v14M5 12h14",
};

export function Icon({ name, size = 20, strokeWidth = 1.8, color = "currentColor", style, ...rest }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={style} {...rest}>
      <path d={d} />
    </svg>
  );
}

Icon.names = Object.keys(PATHS);
