import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function PieChartIcon({
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
        d="M7 13.5c3.5899 0 6.5 -2.9101 6.5 -6.5C13.5 3.41015 10.5899 0.5 7 0.5 3.41015 0.5 0.5 3.41015 0.5 7c0 3.5899 2.91015 6.5 6.5 6.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M7 0.5V7l4.6 4.6"
      />
    </Svg>
  );
}
