import React from "react";

export function StepItem({ number, title, description, style }) {
  return (
    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", ...style }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "34px", lineHeight: 1, color: "var(--barro)" }}>{number}</span>
      <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "19px" }}>{title}</span>
        <span style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--text-secondary)" }}>{description}</span>
      </span>
    </div>
  );
}
