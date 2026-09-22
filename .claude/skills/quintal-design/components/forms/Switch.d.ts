import * as React from "react";

/** On/off control for a family preference. Green when on; never red when off. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}

export declare function Switch(props: SwitchProps): JSX.Element;
