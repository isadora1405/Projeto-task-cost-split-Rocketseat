import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function CalendarIcon({
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
        d="M1.5 2c-0.26522 0 -0.51957 0.10536 -0.707107 0.29289C0.605357 2.48043 0.5 2.73478 0.5 3v9.5c0 0.2652 0.105357 0.5196 0.292893 0.7071 0.187537 0.1875 0.441887 0.2929 0.707107 0.2929h11c0.2652 0 0.5196 -0.1054 0.7071 -0.2929s0.2929 -0.4419 0.2929 -0.7071V3c0 -0.26522 -0.1054 -0.51957 -0.2929 -0.70711C13.0196 2.10536 12.7652 2 12.5 2h-2"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M0.5 5.5h13"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3.5 0.5v3"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M10.5 0.5v3"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M3.5 2h5"
      />
    </Svg>
  );
}
