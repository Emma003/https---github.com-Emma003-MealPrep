import Spacer from '@/components/spacer'
import { icons } from '@/constants/icons'
import useFormInfo from '@/hooks/useFormInfo'
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NumberOfMeal from './number-of-meal'
import ProgressBar from './progress-bar'
import Feather from '@expo/vector-icons/Feather';
import Badge from './badge'


const PageThree = () => {
  /*
    Form flow: when you click on 'create plan' in homepage, form should slide up
    Fill up form, swipe up for next, swipe down for previous
    Completely different color palette?
  */

    const { formInfo, modifyFoodsToInclude, modifyFoodsToExclude } = useFormInfo()
    const [foodName, setFoodName] = useState('')
    const [foodsToInclude, setFoodsToInclude] = useState<string[]>([])

    const addFood = (food: string) => {
        food = food.trim()
        if (food === '' || formInfo.foodsToInclude.includes(food)) {
            return
        }
        
        const trailingText = food.length >= 10 ? food.slice(0, 7) + '...' : food

        setFoodsToInclude([...foodsToInclude, trailingText])
        modifyFoodsToInclude(true, food)
        setFoodName('')
    }

    const removeFood = (food: string) => {
        setFoodsToInclude(foodsToInclude.filter((f) => f !== food))
        modifyFoodsToInclude(false, food)
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <SafeAreaView 
                style={[{
                    backgroundColor: '#3e927c',
                }]}
            className="flex-1 items-center justify-center"
        >
            <ProgressBar 
                progress={3}
                color='#244b42'
            />
            <Spacer height={60}/>
            <Text 
            style={[{
                color: 'white',
                fontFamily: 'Didot',
            }]}
            className='text-5xl text-center'
            >
                What foods do you want to exclude?
            </Text>

            <Spacer height={60}/>

            <View className='flex-row items-center justify-center gap-3'>
                <TextInput
                    className='w-[260px] h-[70px] bg-white rounded-md p-2 text-xl text-gray-600 px-4 self-start ml-2'
                    placeholder='Enter food name'
                    style={[{
                        fontFamily: 'CircularStd-Medium',
                    }]}
                    onChangeText={(text) => setFoodName(text)}
                    value={foodName}
                />
                <Pressable 
                    onPress={() => addFood(foodName)}
                    className='border p-4 ml-2 rounded-md h-[70px] w-[70px] items-center justify-center border-white'
                >
                    <Text 
                        style={[{
                            fontFamily: 'CircularStd-Medium',
                        }]}
                        className='text-white text-xl font-semibold'
                    >Add</Text>
                </Pressable>
            </View>

            

            <Spacer height={60}/>

            <FlatList
                data={foodsToInclude}
                renderItem={({ item }) => <Badge text={item} removeFood={removeFood} />}
                keyExtractor={(item) => item}
                numColumns={3}
                columnWrapperStyle={{ 
                    gap: 6,
                    width: '90%',
                }}
            />




            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}


export default PageThree