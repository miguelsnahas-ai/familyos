import * as React from "react";

/** A pill tag — pillar filters, interests, routine labels. Lilac when selected. */
export interface ChipProps {
  selected?: boolean;
  /** Element when not interactive. @default "span" */
  as?: "span" | "li" | "div";
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Chip(props: ChipProps): JSX.Element;
