import React from "react";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
}

export function CheckIcon({ size = 24, color = "#fafafa" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path stroke={color} strokeWidth={1.5} d="m1.5 12.5 7 7 14 -14" />
    </Svg>
  );
}
