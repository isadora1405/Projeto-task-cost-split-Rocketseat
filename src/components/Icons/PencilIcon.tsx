import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { IconProps } from './types';


export function PencilIcon({ size = 24, color = '#FFFFFF', ...rest }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none" {...rest}>
      <G>
        <Path 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1} 
          d="M5 12.24 0.5 13.5l1.26 -4.49998L10 0.800021c0.0931 -0.095246 0.2044 -0.170925 0.3271 -0.222592 0.1228 -0.051668 0.2547 -0.078283 0.3879 -0.078283 0.1332 0 0.2651 0.026615 0.3879 0.078283 0.1227 0.051667 0.234 0.127346 0.3271 0.222592L13.2 2.58002c0.0937 0.09296 0.1681 0.20357 0.2189 0.32542 0.0508 0.12186 0.0769 0.25257 0.0769 0.38458 0 0.13201 -0.0261 0.26272 -0.0769 0.38458 -0.0508 0.12186 -0.1252 0.23246 -0.2189 0.32542L5 12.24Z" 
        />
      </G>
    </Svg>
  );
}