import Svg, { Path } from "react-native-svg";
import { IconProps } from "./types";

export function ParticipantsIcon({
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
        d="M5 6.5c1.38071 0 2.5 -1.11929 2.5 -2.5S6.38071 1.5 5 1.5 2.5 2.61929 2.5 4 3.61929 6.5 5 6.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M0.5 13.5h9v-0.5421c-0.00796 -0.7622 -0.20898 -1.51 -0.58427 -2.1734 -0.3753 -0.6635 -0.91263 -1.221 -1.5618 -1.62049 -0.64918 -0.3995 -1.38902 -0.62793 -2.15041 -0.66398C5.13564 8.49682 5.06778 8.49514 5 8.495c-0.06778 0.00014 -0.13564 0.00182 -0.20352 0.00503 -0.76139 0.03605 -1.50123 0.26448 -2.15041 0.66398 -0.64917 0.39949 -1.1865 0.95699 -1.5618 1.62049C0.708977 11.4479 0.507961 12.1957 0.5 12.9579V13.5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M9 6.5c1.3807 0 2.5 -1.11929 2.5 -2.5S10.3807 1.5 9 1.5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M11.5 13.5001h2v-0.5422c-0.008 -0.7622 -0.209 -1.51 -0.5843 -2.1734 -0.3753 -0.6635 -0.9126 -1.22098 -1.5618 -1.62047 -0.4196 -0.25825 -0.8772 -0.44501 -1.3539 -0.55453"
      />
    </Svg>
  );
}
