import * as React from "react";

/**
 * Hand-drawn chalk marginalia for plum surfaces — suns, waves, stars, arrows.
 * Render <ChalkDefs /> once per page; it supplies the noise filter.
 *
 * @startingPoint section="Quintal" subtitle="Chalk marks on a plum block" viewport="700x220"
 */
export interface ChalkMarkProps extends React.SVGAttributes<SVGElement> {
  /** @default "sun" */
  mark?: "sun" | "wave" | "underline" | "star" | "arrow" | "scallop";
  /** Any brand colour. Butter, lilac and clay read best on plum. @default "var(--manteiga)" */
  color?: string;
  /** @default 1 */
  scale?: number;
}

export declare function ChalkMark(props: ChalkMarkProps): JSX.Element | null;
export declare function ChalkDefs(): JSX.Element;
