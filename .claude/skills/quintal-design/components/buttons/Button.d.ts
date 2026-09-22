import * as React from "react";

/**
 * Quintal's action button. One primary (butter) action per screen — everything
 * else is secondary or ghost.
 *
 * @startingPoint section="Quintal" subtitle="Primary, secondary and ghost buttons" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Only one `primary` per screen. @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** @default "md" */
  size?: "md" | "sm";
  /** Set on plum surfaces so the secondary/ghost styles invert. @default false */
  onDark?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
