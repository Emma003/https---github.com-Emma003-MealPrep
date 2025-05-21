import Spacer from '@/components/spacer'
import { icons } from '@/constants/icons'
import Foundation from '@expo/vector-icons/Foundation'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const NumberOfMeal = ({ meal, icon, item, setItem }: any) => {
  return(
    <View className='flex-row bg-[#9c6292] h-[160] w-[350] rounded-lg items-center pl-4 gap-4 mb-5'>
      {/* <Image 
        source={icons.mealOutline} 
        className='w-20 h-20' 
        tintColor='white'
      /> */}
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
            <TouchableOpacity onPress={() => item > 0 && setItem(item - 1)}>
                <Foundation name='minus' size={24} color='white' />
            </TouchableOpacity>
            <TextInput
                className='text-white text-4xl font-bold'
                placeholder='0'
                placeholderTextColor='white'
                editable={false}
                value={item.toString()}
                style={[{
                    fontFamily: 'Didot',
                }]}
            />
            <TouchableOpacity onPress={() => setItem(item + 1)}>
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

    const [smoothies, setSmoothies] = useState(3);
    const [salads, setSalads] = useState(3);
    const [mainDishes, setMainDishes] = useState(3);

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
        item={smoothies}
        setItem={setSmoothies}
      />

    <NumberOfMeal 
        meal='Salads' 
        icon={icons.saladOutline}
        item={salads}
        setItem={setSalads}
      />

    <NumberOfMeal 
        meal='Main Dishes' 
        icon={icons.mealOutline}
        item={mainDishes}
        setItem={setMainDishes}
      />

      
    </SafeAreaView>
  )
}


export default PageOne