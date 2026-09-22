import * as React from "react";

/**
 * One of Quintal's four pillars — sono, rotina, livre brincar, desenvolvimento.
 *
 * @startingPoint section="Quintal" subtitle="Pillar card with example message" viewport="700x260"
 */
export interface PillarCardProps {
  /** Two-digit index, e.g. "01". */
  index?: string;
  title: string;
  description: string;
  /** A real sentence the system would send. Optional but strongly encouraged. */
  example?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PillarCard(props: PillarCardProps): JSX.Element;
