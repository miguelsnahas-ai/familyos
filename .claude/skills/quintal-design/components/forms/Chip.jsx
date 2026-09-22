import React from "react";

export function Chip({ selected = false, as = "span", onClick, children, style, ...rest }) {
  const Tag = onClick ? "button" : as;
  return (
    <Tag
      onClick={onClick}
      type={onClick ? "button" : undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-text)",
        fontSize: "12px",
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: onClick ? "pointer" : "default",
        background: selected ? "var(--lilas)" : "var(--surface-tinted)",
        color: selected ? "#2E2336" : "var(--text-secondary)",
        transition: "background var(--motion-fast) var(--easing)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
