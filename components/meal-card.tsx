import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, Image } from 'react-native';
import HorizontalLine from './horizontal-line';
import Badge from './badge';
import ThemedText from './themed/themed-text';
import { RecipeColors } from '@/constants/recipe-colors';

interface MealCardProps {
  id: string;
  title: string;
  cookingTime: string;
  imageUrl: string;
  dishType: string;
  color: string;
}

const MealCard = ({ id, title, cookingTime, imageUrl, dishType, color }: MealCardProps) => {
  const currentColor = RecipeColors[color as keyof typeof RecipeColors];

  return (
    <View 
        style={[{
            backgroundColor: currentColor.main,
        }]}
        className="flex w-[250px] h-[350px] rounded-xl">

        <Image source={{ uri: imageUrl }} className="w-full h-[230px] rounded-t-xl" />
        <Text 
            style={[{
                color: currentColor.dark,
                fontFamily: 'CircularStd-Medium',
            }]}
            className="text-xl mt-2 ml-4">{title}</Text>
        <HorizontalLine marginTop={40} marginBottom={4} width={220} color={currentColor.dark} />

        <View className="flex flex-row gap-20 items-center justify-center mt-2">
          <Badge text={dishType} textColor={currentColor.dark} />
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
    </View>
  );
};

export default MealCard;