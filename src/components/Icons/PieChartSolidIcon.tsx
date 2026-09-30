import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function PieChartSolidIcon({
  size = 24,
  color = "#FFFFFF",
  ...rest
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...rest}>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.375 0.0275269C2.8018 0.343686 0 3.34465 0 7.00001 0 10.866 3.13401 14 7 14c1.78013 0 3.4051 -0.6645 4.6403 -1.7589L6.57091 7.45445C6.44587 7.33638 6.375 7.172 6.375 7.00002V0.0275269ZM12.4986 11.3323C13.4389 10.1406 14 8.63583 14 7.00001 14 3.34465 11.1982 0.343686 7.625 0.0275269V6.73057l4.8736 4.60173Z"
      />
    </Svg>
  );
}
