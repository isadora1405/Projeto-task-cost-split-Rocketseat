import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function PlusIcon({ size = 24, color = "#FFFFFF", ...rest }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M7 0.5v13"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M0.5 6.95996h13"
      />
    </Svg>
  );
}
