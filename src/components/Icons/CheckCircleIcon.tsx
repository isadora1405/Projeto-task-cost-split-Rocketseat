import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface CheckCircleIconProps {
  size?: number;
  color?: string;
}

export function CheckCircleIcon({ size = 24, color = '#30a65d' }: CheckCircleIconProps) {
  return (
    <Svg 
      viewBox="0 0 16 16" 
      fill={color} 
      height={size} 
      width={size}
    >
      <Path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        strokeWidth="0.6667"
        d="M1.5 8c0 -3.59 2.91 -6.5 6.5 -6.5s6.5 2.91 6.5 6.5 -2.91 6.5 -6.5 6.5S1.5 11.59 1.5 8Zm8.906666666666666 -1.2093333333333334a0.5 0.5 0 1 0 -0.8133333333333332 -0.5813333333333333l-2.1573333333333333 3.02L6.353333333333333 8.146666666666667a0.5 0.5 0 0 0 -0.7066666666666667 0.7066666666666667l1.5 1.5a0.5 0.5 0 0 0 0.7599999999999999 -0.06266666666666666l2.5 -3.5Z" 
      />
    </Svg>
  );
}