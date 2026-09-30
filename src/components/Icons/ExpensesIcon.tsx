import Svg, { Path, G } from "react-native-svg";
import { IconProps } from "./types";

export function ExpensesIcon({
  size = 24,
  color = "#FFFFFF",
  ...rest
}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...rest}>
      <G>
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9.80599 4.2391c-0.04475 -0.1266 -0.1138 -0.24173 -0.20155 -0.33977 -0.18664 -0.20853 -0.45787 -0.33976 -0.75975 -0.33976h-0.78896c-0.5025 0 -0.90986 0.40736 -0.90986 0.90985 0 0.42758 0.29773 0.79747 0.71542 0.88884l1.20122 0.26277c0.46794 0.10236 0.80148 0.51704 0.80148 0.99604 0 0.56294 -0.45636 1.01967 -1.0193 1.01967h-0.67952c-0.44381 0 -0.82137 -0.28364 -0.9613 -0.67953"
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8.50488 3.55958v-1.0193"
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8.50488 8.65601V7.63672"
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3.614 5.598a4.891 4.891 0 1 0 9.782 0 4.891 4.891 0 1 0 -9.782 0"
        />
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M1.20295 6.13379C0.827488 6.82607 0.614258 7.61915 0.614258 8.46204c0 2.70106 2.189612 4.89066 4.890622 4.89066 0.76547 0 1.48987 -0.1759 2.13499 -0.4894"
        />
      </G>
    </Svg>
  );
}
