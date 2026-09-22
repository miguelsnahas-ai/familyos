import React from "react";

export function HighlightStat({ value, label, tone = "manteiga", style }) {
  const tones = {
    manteiga: { background: "var(--manteiga)", value: "var(--ameixa)", label: "#5A4530" },
    lilas: { background: "var(--lilas)", value: "#2E2336", label: "#4A3B55" },
    ameixa: { background: "var(--surface-dark)", value: "var(--manteiga)", label: "var(--text-on-dark-muted)" },
  }[tone];
  return (
    <div style={{ background: tones.background, borderRadius: "var(--radius-card)", padding: "16px", display: "flex", flexDirection: "column", gap: "4px", ...style }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "28px", lineHeight: 1, color: tones.value }}>{value}</span>
      <span style={{ fontSize: "13px", color: tones.label }}>{label}</span>
    </div>
  );
}
