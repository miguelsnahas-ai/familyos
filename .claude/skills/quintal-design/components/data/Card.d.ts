import * as React from "react";

/** The base container: white surface, 1px peach border, 14px corners, low shadow. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lifts 2px on hover. Only for cards that lead somewhere. @default false */
  interactive?: boolean;
  /** @default "surface" */
  tone?: "surface" | "sunken" | "dark";
  /** @default "20px" */
  padding?: string;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
