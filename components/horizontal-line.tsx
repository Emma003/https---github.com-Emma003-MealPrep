import React from 'react';
import { DimensionValue, View, ViewStyle } from 'react-native';

interface HorizontalLineProps {
  width?: DimensionValue;
  color?: string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  style?: ViewStyle;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  width = '100%',
  color = '#e5e7eb',
  height = 1,
  marginTop = 0,
  marginBottom = 0,
  marginHorizontal = 0,
  style = {}
}) => {
  const lineStyle: ViewStyle = {
    width: width,
    height: height,
    backgroundColor: color,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginHorizontal: marginHorizontal,
    ...style
  };

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <View style={lineStyle} />
    </View>
  );
};

export default HorizontalLine;