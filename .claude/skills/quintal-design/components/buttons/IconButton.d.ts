import * as React from "react";

/** A 44px round button holding a single line icon. Always give it a label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — required, the icon carries no text. */
  label: string;
  /** @default false */
  onDark?: boolean;
  /** The icon element (1.8px stroke, rounded caps). */
  children?: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
