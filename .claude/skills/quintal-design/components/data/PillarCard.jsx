import React from "react";
import { Card } from "./Card.jsx";

export function PillarCard({ index, title, description, example, icon, style }) {
  return (
    <Card interactive style={{ display: "flex", flexDirection: "column", gap: "8px", ...style }}>
      {icon ? (
        <span style={{ width: "34px", height: "34px", borderRadius: "var(--radius-pill)", background: "var(--lilas)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ameixa)" }}>{icon}</span>
      ) : null}
      {index ? (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-link)" }}>{"Pilar " + index}</span>
      ) : null}
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px" }}>{title}</span>
      <span style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--text-secondary)" }}>{description}</span>
      {example ? (
        <span style={{ background: "var(--surface-sunken)", borderRadius: "10px", padding: "10px 12px", fontSize: "13px", lineHeight: 1.5, color: "var(--text-secondary)" }}>{example}</span>
      ) : null}
    </Card>
  );
}
