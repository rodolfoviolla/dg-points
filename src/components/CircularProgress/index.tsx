import React from 'react';
import { View } from 'react-native';
import { Svg, Circle, Text as SVGText } from 'react-native-svg';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  text: string;
  progressPercent: number;
  bgColor?: string;
  pgColor?: string;
  textSize: number;
  textColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  size, 
  strokeWidth, 
  text, 
  progressPercent, 
  bgColor, 
  pgColor, 
  textSize, 
  textColor 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progressPercent;

  return (
    <View style={{ margin: 10 }}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={bgColor ? bgColor : "rgba(232, 104, 38, 0.16)"}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <Circle 
          stroke={pgColor ? pgColor : "#E86826"}
          fill={pgColor ? pgColor : "rgba(255, 156, 92, 0.16)"}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size/2}, ${size/2})`}
          {...{ strokeWidth }}
        />

        {/* Text */}
        <SVGText
          fontFamily="GT-Walsheim-Pro-Medium"
          fontSize={textSize ? textSize : '14'}
          x={size / 2}
          y={size / 2 + (textSize ? (textSize / 2) - 1 : 5)}
          textAnchor="middle"
          fill={textColor ? textColor : '#9e3f00'}
        >
          {text}
        </SVGText>
      </Svg>
    </View>
  );
}

export default CircularProgress;