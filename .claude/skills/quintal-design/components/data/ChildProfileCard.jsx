import React from "react";

export function ChildProfileCard({ name, age, rows = [], style }) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-card)", overflow: "hidden", background: "var(--surface)", ...style }}>
      <div style={{ background: "var(--surface-dark)", padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ width: "42px", height: "42px", borderRadius: "var(--radius-pill)", background: "var(--manteiga)", color: "var(--ameixa)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {(name || "?").charAt(0)}
        </span>
        <span style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", color: "var(--text-on-dark)" }}>{name}</span>
          <span style={{ fontSize: "13px", color: "#B9A6C4" }}>{age}</span>
        </span>
      </div>
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {rows.map((r) => (
          <div key={r.label} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-tertiary)" }}>{r.label}</span>
            <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
