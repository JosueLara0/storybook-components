//* styles
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

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No label",
  size = "normal",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
