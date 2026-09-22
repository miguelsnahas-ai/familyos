import React from "react";

export function IconButton({ label, onDark = false, style, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "44px",
        height: "44px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-pill)",
        border: "1px solid " + (onDark ? "#7A6A83" : "var(--border)"),
        background: hover ? (onDark ? "rgba(253,242,236,0.08)" : "var(--surface-tinted)") : "transparent",
        color: onDark ? "var(--text-on-dark)" : "var(--text-primary)",
        cursor: "pointer",
        transition: "background var(--motion-fast) var(--easing)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
