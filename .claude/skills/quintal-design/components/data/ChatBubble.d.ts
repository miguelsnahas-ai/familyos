import * as React from "react";

/**
 * A WhatsApp message. White for the system, lilac for the family; the 4px tail
 * always sits on the sender's side.
 *
 * @startingPoint section="Quintal" subtitle="WhatsApp thread with system and family bubbles" viewport="700x240"
 */
export interface ChatBubbleProps {
  /** @default "system" */
  from?: "system" | "family";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ChatBubble(props: ChatBubbleProps): JSX.Element;

export interface ChatThreadProps {
  /** @default "Quintal" */
  title?: string;
  /** @default "online" */
  status?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ChatThread(props: ChatThreadProps): JSX.Element;
