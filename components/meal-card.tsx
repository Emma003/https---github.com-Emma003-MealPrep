import { RecipeColors } from '@/constants/recipe-colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Image, Text, View } from 'react-native';
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
}

const MealCard = ({ id, title, cookingTime, imageUrl, dishType, color }: MealCardProps) => {
  const currentColor = RecipeColors[color as keyof typeof RecipeColors];

  return (
    <View 
        style={[{
            backgroundColor: currentColor.light,
        }]}
        className="flex w-[250px] h-[370px] rounded-xl">

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