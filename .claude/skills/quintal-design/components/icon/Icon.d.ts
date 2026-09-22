import * as React from "react";

/** Line icons — Lucide glyphs inlined at 1.8px stroke with rounded caps. */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: "moon" | "clock" | "sparkle" | "blocks" | "message" | "check" | "arrowRight" | "arrowDown" | "x" | "menu" | "heart" | "plus";
  /** @default 20 */
  size?: number;
  /** @default 1.8 */
  strokeWidth?: number;
  /** @default "currentColor" */
  color?: string;
}

export declare function Icon(props: IconProps): JSX.Element | null;
