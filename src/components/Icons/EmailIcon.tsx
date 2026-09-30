import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function EmailIcon(props: SvgProps) {
  return (
    <Svg 
      width={props.width || 24} 
      height={props.height || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      {...props}
    >
      <Path 
        stroke={props.color || "#FFFFFF"} 
        strokeWidth={1.5} 
        d="M2 4h20v16H2z" 
      />
      <Path 
        stroke={props.color || "#FFFFFF"} 
        strokeWidth={1.5} 
        d="m2 7 10 6 10 -6" 
      />
    </Svg>
  );
}