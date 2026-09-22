import React from "react";

export function Card({ interactive = false, tone = "surface", padding = "20px", style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    surface: { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-primary)" },
    sunken: { background: "var(--surface-sunken)", border: "1px solid var(--border)", color: "var(--text-primary)" },
    dark: { background: "var(--surface-dark)", border: "1px solid transparent", color: "var(--text-on-dark)" },
  };
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: "var(--radius-card)",
        padding,
        boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: interactive && hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--motion-base) var(--easing), transform var(--motion-base) var(--easing)",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
