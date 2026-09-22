import * as React from "react";

/** A single number worth stopping for — "100 famílias", "0 a 6 anos". */
export interface HighlightStatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  /** @default "manteiga" */
  tone?: "manteiga" | "lilas" | "ameixa";
  style?: React.CSSProperties;
}

export declare function HighlightStat(props: HighlightStatProps): JSX.Element;
