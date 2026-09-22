import * as React from "react";

/**
 * The child's living profile — routine, interests, recent play, parents' notes.
 *
 * @startingPoint section="Quintal" subtitle="Child profile with routine and interests" viewport="700x340"
 */
export interface ChildProfileRow {
  label: string;
  value: React.ReactNode;
}

export interface ChildProfileCardProps {
  name: string;
  /** Free text, e.g. "2 anos e 3 meses". */
  age: string;
  rows?: ChildProfileRow[];
  style?: React.CSSProperties;
}

export declare function ChildProfileCard(props: ChildProfileCardProps): JSX.Element;
