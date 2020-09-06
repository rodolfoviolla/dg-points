import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient, Svg, Circle, Stop } from 'react-native-svg';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  text: string;
  progressPercent: number;
  bgColor?: string;
  pgColor0?: string;
  pgColor100?: string;
  textColor?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  size, 
  strokeWidth, 
  text, 
  progressPercent, 
  bgColor, 
  pgColor0, 
  pgColor100,
  textColor 
}) => {
  const radiusBorderCircle = (size - strokeWidth) / 2;
  const radiusBackgroundCircle = (size - strokeWidth * 2) / 2;
  const radius = (size - strokeWidth * 3) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progressPercent;
  const textSize = size * 0.175;

  return (
    <View style={{ position: 'relative' }}>
      <Svg width={size} height={size}>
        {/* Border Circle */}
        <Circle
          stroke={bgColor ? bgColor : "rgba(163, 0, 16, 0.04)"}
          cx={size / 2}
          cy={size / 2}
          r={radiusBorderCircle}
          {...{ strokeWidth }}
        />

        {/* Background Circle */}
        <Circle
          fill={bgColor ? bgColor : "rgba(232, 104, 38, 0.16)"}
          cx={size / 2}
          cy={size / 2}
          r={radiusBackgroundCircle}
          {...{ strokeWidth }}
        />

        <LinearGradient id="linear-gradient">
          <Stop offset="0%" stopColor={pgColor0 || "#ff9c5c"} />
          <Stop offset="100%" stopColor={pgColor100 || "#e86826"} />
        </LinearGradient>

        {/* Progress Circle */}
        <Circle 
          stroke="url(#linear-gradient)"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress/100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size/2}, ${size/2})`}
          {...{ strokeWidth }}
        />
      </Svg>

      <Text style={{
        position: 'absolute',
        top: 43.5 * size / 100,
        bottom: 43.5 * size / 100,
        alignSelf: 'center',
        fontFamily: 'GT-Walsheim-Pro-Medium',
        fontSize: textSize,
        color: textColor || '#9e3f00',
      }}>
        {text}
      </Text>
    </View>
  );
}

export default CircularProgress;