import * as React from "react";

/** A single-line field on sunken peach with a clay focus ring. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

export declare function Input(props: InputProps): JSX.Element;
