/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
    /**
     * Label message
     */
    label: string;
    /**
     * Label size
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Label with capitalized letters
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Label font color
     */
    fontColor?: string;
    /**
     * Label font color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: Props) => JSX.Element;
