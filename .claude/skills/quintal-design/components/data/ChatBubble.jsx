import React from "react";

export function ChatBubble({ from = "system", children, style }) {
  const system = from === "system";
  return (
    <div
      style={{
        alignSelf: system ? "flex-start" : "flex-end",
        maxWidth: "86%",
        padding: "11px 14px",
        fontSize: "14px",
        lineHeight: 1.5,
        background: system ? "var(--surface)" : "var(--lilas)",
        border: system ? "1px solid var(--border)" : "1px solid transparent",
        color: system ? "var(--text-primary)" : "#2E2336",
        borderRadius: system ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function ChatThread({ title = "Quintal", status = "online", children, style }) {
  return (
    <div style={{ background: "var(--surface-sunken)", borderRadius: "var(--radius-card)", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "6px" }}>
        <span style={{ width: "28px", height: "28px", borderRadius: "var(--radius-pill)", background: "var(--ameixa)", color: "var(--manteiga)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>Q</span>
        <span style={{ fontSize: "13px", fontWeight: 600 }}>{title}</span>
        <span style={{ fontSize: "12px", color: "var(--positive)" }}>{status}</span>
      </div>
      {children}
    </div>
  );
}
