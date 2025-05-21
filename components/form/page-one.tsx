import Spacer from '@/components/spacer'
import { icons } from '@/constants/icons'
import useFormInfo from '@/hooks/useFormInfo'
import Foundation from '@expo/vector-icons/Foundation'
import React, { useState } from 'react'
import { Image, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface NumberOfMealProps {
    meal: string,
    icon: ImageSourcePropType,
    value: number,
    onModify: (increment: boolean) => void
}

const NumberOfMeal = ({ meal, icon, value, onModify }: NumberOfMealProps) => {
    const [count, setCount] = useState(value)

    const handleModify = (increment: boolean) => {
        setCount(increment ? count + 1 : count - 1)
        onModify(increment)
    }

  return(
    <View className='flex-row bg-[#9c6292] h-[160] w-[350] rounded-lg items-center pl-4 gap-4 mb-5'>
      <Image 
        source={icon} 
        className='w-40 h-40'
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
            <TouchableOpacity onPress={() => count > 0 && handleModify(false)}>
                <Foundation name='minus' size={24} color='white' />
            </TouchableOpacity>

            <TextInput
                className='text-white text-4xl font-bold'
                placeholder='0'
                placeholderTextColor='white'
                editable={false}
                value={count.toString()}
                style={[{
                    fontFamily: 'Didot',
                }]}
            />

            <TouchableOpacity onPress={() => count < 10 && handleModify(true)}>
                <Foundation name='plus' size={24} color='white' />
            </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const PageOne = () => {
  /*
    Form flow: when you click on 'create plan' in homepage, form should slide up
    Fill up form, swipe up for next, swipe down for previous
    Completely different color palette?
  */

    const { formInfo, modifySmoothies, modifySalads, modifyMainDishes } = useFormInfo()

    return (
        <SafeAreaView 
            style={[{
                backgroundColor: '#c77ab9',
            }]}
            className="flex-1 items-center"
        >
            <Spacer />
            <Text 
            style={[{
                        color: 'white',
                        fontFamily: 'Didot',
                    }]}
            className='text-5xl text-center'
                    >
                Select the amount of meals desired
            </Text>

            <Spacer />

            <NumberOfMeal 
                meal='Smoothies' 
                icon={icons.smoothieOutline}
                value={formInfo.smoothies}
                onModify={modifySmoothies}
            />

            <NumberOfMeal 
                meal='Salads' 
                icon={icons.saladOutline}
                value={formInfo.salads}
                onModify={modifySalads}
            />

            <NumberOfMeal 
                meal='Main Dishes' 
                icon={icons.mealOutline}
                value={formInfo.mainDishes}
                onModify={modifyMainDishes}
            />

        </SafeAreaView>
    )
}


export default PageOne