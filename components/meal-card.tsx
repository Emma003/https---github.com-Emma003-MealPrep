import { RecipeColors } from '@/constants/recipe-colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Badge from './badge';
import HorizontalLine from './horizontal-line';
import ThemedText from './themed/themed-text';

interface MealCardProps {
  id: string;
  title: string;
  cookingTime: string;
  imageUrl: string;
  dishType: string;
  color: string;
  isSelected?: boolean;
  onPress?: () => void;
}

const MealCard = ({ id, title, cookingTime, imageUrl, dishType, color, isSelected = false, onPress }: MealCardProps) => {
  const currentColor = RecipeColors[color as keyof typeof RecipeColors];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[
        {
          backgroundColor: currentColor.light,
        },
        { width: 250, height: 370, borderRadius: 16, overflow: 'hidden' },
      ]}
      className="flex rounded-xl"
    >
      {/* Checkbox at top left */}
      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          top: 12,
          left: 12,
          zIndex: 2,
          width: 24,
          height: 24,
          borderRadius: 6,
          backgroundColor: isSelected ? currentColor.main : '#fff',
          borderWidth: 1,
          borderColor: currentColor.accent,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isSelected ? (
          <MaterialCommunityIcons name="check" size={18} color={currentColor.accent} />
        ) : null}
      </View>

      <Image source={{ uri: imageUrl }} className="w-full h-[230px] rounded-t-xl" />
      <ThemedText 
          font="medium"
          className="text-lg mt-2 ml-4"
          color={currentColor.dark}
          numberOfLines={1}
          ellipsizeMode='tail'
      >{title}</ThemedText>
      <HorizontalLine marginTop={50} marginBottom={12} width={220} color={currentColor.dark} />

      <View className="flex flex-row gap-20 items-center justify-center">
        <Badge text={dishType === 'mainDishes' ? 'Main Dishes' : dishType} textColor={currentColor.dark} />
        <View className="flex flex-row justify-between items-center">
          <MaterialCommunityIcons name="timer-outline" size={18} color={currentColor.dark} />
          <Text 
          style={[{
              color: currentColor.dark,
              fontFamily: 'CircularStd-Medium',
          }]} 
          className="text-md ml-1">{cookingTime}</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

export default MealCard;