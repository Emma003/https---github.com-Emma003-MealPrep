import Spacer from '@/components/spacer'
import { icons } from '@/constants/icons'
import useFormInfo from '@/hooks/useFormInfo'
import React, { useState } from 'react'
import { Text, View, Image, TouchableWithoutFeedback, Keyboard, FlatList, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NumberOfMeal from './number-of-meal'
import ProgressBar from './progress-bar'
import Feather from '@expo/vector-icons/Feather';
import Badge from './badge'
import TailwindButton from './tailwind-button'


const cuisines = [
    {
      "title": "Mexican",
      "icon": "https://www.flaticon.com/free-icon/taco_1046783"
    },
    {
      "title": "Indian",
      "icon": "https://www.flaticon.com/free-icon/curry_1046786"
    },
    {
      "title": "Nigerian",
      "icon": "https://www.flaticon.com/free-icon/jollof-rice_1046790"
    },
    {
      "title": "Italian",
      "icon": "https://www.flaticon.com/free-icon/spaghetti_1046784"
    },
    {
      "title": "Chinese",
      "icon": "https://www.flaticon.com/free-icon/dumplings_1046785"
    },
    {
      "title": "Japanese",
      "icon": "https://www.flaticon.com/free-icon/sushi_1046787"
    },
    {
      "title": "French",
      "icon": "https://www.flaticon.com/free-icon/croissant_1046788"
    },
    {
      "title": "Thai",
      "icon": "https://www.flaticon.com/free-icon/pad-thai_1046789"
    },
    {
      "title": "Greek",
      "icon": "https://www.flaticon.com/free-icon/greek-salad_1046791"
    },
    {
      "title": "Spanish",
      "icon": "https://www.flaticon.com/free-icon/paella_1046792"
    }
  ]

const CuisineCard = ({ cuisine, image }: { cuisine: string, image: string }) => {
    return (
        <View className='w-[100px] h-[100px] bg-[#2a4522] rounded-md items-center justify-center'>
            <Image 
                source={{ uri: image }}
            />
            <Text 
            style={[{
                color: 'white',
                fontFamily: 'CircularStd-Medium',
            }]}
            className='text-2xl text-center'
            >{cuisine}</Text>
        </View>
    )
}

const PageFour = () => {
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
                    backgroundColor: '#4a8435',
                }]}
            className="flex-1 items-center"
        >
            <ProgressBar 
                progress={4}
                color='#2a4522'
            />
            <Spacer height={60}/>
            <Text 
            style={[{
                color: 'white',
                fontFamily: 'Didot',
            }]}
            className='text-5xl text-center'
            >
                What cuisine do you want to eat?
            </Text>

            <Spacer height={60}/>

            <CuisineCard 
                cuisine='Italian'
                image='https://www.flaticon.com/free-icon/taco_1046783'
            />

            <TailwindButton />


            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}


export default PageFour