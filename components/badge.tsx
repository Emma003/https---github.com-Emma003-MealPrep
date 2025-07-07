
import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';

interface BadgeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  backgroundColor = '', // amber-100
  textColor = '#374151', // gray-700
  size = 'sm',
  style = {},
  textStyle = {}
}) => {
  const sizeStyles = {
    sm: {
      container: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
      text: { fontSize: 12 }
    },
    md: {
      container: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 25 },
      text: { fontSize: 14 }
    },
    lg: {
      container: { paddingHorizontal: 24, paddingVertical: 12, borderRadius: 30 },
      text: { fontSize: 16 }
    }
  };

  const containerStyle: ViewStyle = {
    backgroundColor: backgroundColor,
    borderWidth: 1,
    borderColor: textColor,
    alignSelf: 'flex-start',
    ...sizeStyles[size].container,
    ...style
  };

  const textStyleCombined: TextStyle = {
    color: textColor,
    fontWeight: '500',
    textAlign: 'center',
    ...sizeStyles[size].text,
    ...textStyle
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyleCombined}>{text}</Text>
    </View>
  );
};

export default Badge;