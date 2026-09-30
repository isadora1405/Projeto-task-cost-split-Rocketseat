import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function CloseIcon({
  size = 24,
  color = "#FFFFFF",
  ...rest
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="m13.5 0.5 -13 13"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="m0.5 0.5 13 13"
      />
    </Svg>
  );
}
