import React from "react";

const BASE = {
  fontFamily: "var(--font-text)",
  fontSize: "14px",
  lineHeight: 1,
  border: "1px solid transparent",
  borderRadius: "var(--radius-pill)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  transition: "filter var(--motion-fast) var(--easing), background var(--motion-fast) var(--easing), transform var(--motion-fast) var(--easing)",
};

const SIZES = {
  md: { padding: "12px 22px", minHeight: "44px" },
  sm: { padding: "9px 16px", minHeight: "36px", fontSize: "13px" },
};

const VARIANTS = {
  primary: { background: "var(--manteiga)", color: "var(--ameixa)", fontWeight: 700 },
  secondary: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-strong)", fontWeight: 600 },
  ghost: { background: "transparent", color: "var(--text-link)", fontWeight: 600, padding: "12px 14px" },
};

const ON_DARK = {
  secondary: { color: "var(--text-on-dark)", borderColor: "#7A6A83" },
  ghost: { color: "var(--manteiga)" },
};

export function Button({ variant = "primary", size = "md", onDark = false, disabled = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = {
    ...BASE,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(onDark ? ON_DARK[variant] || {} : {}),
    ...(hover && !disabled
      ? variant === "primary"
        ? { filter: "brightness(0.95)" }
        : { background: onDark ? "rgba(253,242,236,0.08)" : "var(--surface-tinted)" }
      : {}),
    ...(press && !disabled ? { transform: "translateY(1px)" } : {}),
    ...(disabled ? { opacity: 0.45, cursor: "not-allowed" } : {}),
    ...style,
  };
  return (
    <button
      type="button"
      disabled={disabled}
      style={s}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
