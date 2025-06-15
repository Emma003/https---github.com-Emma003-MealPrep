import Foundation from "@expo/vector-icons/Foundation"
import { useRef } from "react"
import { Animated, Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import Spacer from "../spacer"

interface NumberOfMealProps {
    meal: string,
    icon: ImageSourcePropType,
    value: number,
    onModify: (increment: boolean) => void,
    color: string
}

const NumberOfMeal = ({ meal, icon, value, onModify, color }: NumberOfMealProps) => {
    const scaleAnim = useRef(new Animated.Value(1)).current

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start()
    }

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start()
    }

  return(
    <Animated.View 
        style={{ 
            transform: [{ scale: scaleAnim }],
            backgroundColor: color,
        }}
        className='flex-row h-[140] w-[350] rounded-md items-center pl-4 gap-4 mb-5'
    >
      <Image 
        source={icon} 
        className='w-28 h-28'
        tintColor='white'
      />
      <View className='flex-1 gap-2 h-full pt-4'>
        <Text 
            style={[{
                color: 'white',
                fontFamily: 'Didot',
            }]}
            className='text-3xl text-white text-center'
        >
            {meal}
        </Text>

        <Spacer height={10}/>

        <View className='flex-row justify-center items-center gap-6'>
            <TouchableOpacity 
                onPress={() => value > 0 && onModify(false)}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <Foundation name='minus' size={24} color='white' />
            </TouchableOpacity>

            <Text
                className='text-white text-4xl font-bold'
                style={[{
                    fontFamily: 'Didot',
                }]}
            >
                {value}
            </Text>

            <TouchableOpacity 
                onPress={() => value < 10 && onModify(true)}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <Foundation name='plus' size={24} color='white' />
            </TouchableOpacity>

        </View>
      </View>
    </Animated.View>
  )
}

export default NumberOfMeal