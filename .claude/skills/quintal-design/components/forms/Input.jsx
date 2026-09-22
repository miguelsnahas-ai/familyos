import React from "react";

export function Input({ label, hint, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || "q-" + (label || "field").toLowerCase().replace(/\s+/g, "-");
  return (
    <label htmlFor={inputId} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {label ? (
        <span style={{ fontSize: "var(--type-label-size)", fontWeight: "var(--type-label-weight)", color: "var(--text-primary)" }}>{label}</span>
      ) : null}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "15px",
          color: "var(--text-primary)",
          background: "var(--surface-sunken)",
          border: "1px solid " + (focus ? "var(--barro)" : "var(--border)"),
          borderRadius: "var(--radius-field)",
          padding: "12px 14px",
          minHeight: "44px",
          outline: "none",
          boxShadow: focus ? "var(--focus-ring)" : "none",
          transition: "border-color var(--motion-fast) var(--easing)",
          ...style,
        }}
        {...rest}
      />
      {hint ? <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>{hint}</span> : null}
    </label>
  );
}
