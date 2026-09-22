import * as React from "react";

/** A numbered step in "Como funciona". Clay numerals, display type. */
export interface StepItemProps {
  /** Two digits: "01". */
  number: string;
  title: string;
  description: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function StepItem(props: StepItemProps): JSX.Element;
