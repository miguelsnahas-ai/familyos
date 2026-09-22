import React from "react";

export function Switch({ checked = false, onChange, label, disabled = false }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", cursor: disabled ? "not-allowed" : "pointer", fontSize: "13px", color: "var(--text-secondary)", opacity: disabled ? 0.5 : 1 }}>
      <span
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => !disabled && onChange && onChange(!checked)}
        onKeyDown={(e) => { if (!disabled && (e.key === " " || e.key === "Enter")) { e.preventDefault(); onChange && onChange(!checked); } }}
        style={{
          width: "40px", height: "24px", borderRadius: "var(--radius-pill)",
          background: checked ? "var(--positive)" : "var(--border-strong)",
          position: "relative", display: "inline-block", flex: "0 0 auto",
          transition: "background var(--motion-base) var(--easing)",
        }}
      >
        <span style={{ position: "absolute", top: "3px", left: checked ? "19px" : "3px", width: "18px", height: "18px", background: "#FFFFFF", borderRadius: "var(--radius-pill)", transition: "left var(--motion-base) var(--easing)" }} />
      </span>
      {label}
    </label>
  );
}
