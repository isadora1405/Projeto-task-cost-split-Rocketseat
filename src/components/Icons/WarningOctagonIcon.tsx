import React from "react";
import Svg, { Path, G } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
}

export function WarningOctagonIcon({
  size = 14,
  color = "#fafafa",
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9.79289 13.2071c-0.18753 0.1875 -0.44189 0.2929 -0.7071 0.2929H4.91421c-0.26521 0 -0.51957 -0.1054 -0.7071 -0.2929L0.792893 9.79289C0.605357 9.60536 0.5 9.351 0.5 9.08579V4.91421c0 -0.26521 0.105357 -0.51957 0.292893 -0.7071L4.20711 0.792893C4.39464 0.605357 4.649 0.5 4.91421 0.5h4.17158c0.26521 0 0.51957 0.105357 0.7071 0.292893L13.2071 4.20711c0.1875 0.18753 0.2929 0.44189 0.2929 0.7071v4.17158c0 0.26521 -0.1054 0.51957 -0.2929 0.7071L9.79289 13.2071Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M7 4v3.25"
      />
      <G>
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M7 10c-0.13807 0 -0.25 -0.11193 -0.25 -0.25s0.11193 -0.25 0.25 -0.25"
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M7 10c0.13807 0 0.25 -0.11193 0.25 -0.25S7.13807 9.5 7 9.5"
        />
      </G>
    </Svg>
  );
}
