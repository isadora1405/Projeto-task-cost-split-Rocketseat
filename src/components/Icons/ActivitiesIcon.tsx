import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function ActivitiesIcon({
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
        d="M1 3c0.27614 0 0.5 -0.22386 0.5 -0.5S1.27614 2 1 2c-0.276142 0 -0.5 0.22386 -0.5 0.5s0.223858 0.5 0.5 0.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4.5 2.5h9"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M1 7.5c0.27614 0 0.5 -0.22386 0.5 -0.5s-0.22386 -0.5 -0.5 -0.5c-0.276142 0 -0.5 0.22386 -0.5 0.5s0.223858 0.5 0.5 0.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4.5 7h9"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M1 12c0.27614 0 0.5 -0.2239 0.5 -0.5S1.27614 11 1 11c-0.276142 0 -0.5 0.2239 -0.5 0.5s0.223858 0.5 0.5 0.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M4.5 11.5h9"
      />
    </Svg>
  );
}
