import Spacer from '@/components/spacer'
import { icons } from '@/constants/icons'
import useFormInfo from '@/hooks/useFormInfo'
import React, { useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NumberOfMeal from './number-of-meal'
import ProgressBar from './progress-bar'

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
            <ProgressBar 
                progress={1}
                color='#9c6292'
            />
            <Spacer height={60}/>
            <Text 
            style={[{
                color: 'white',
                fontFamily: 'Didot',
            }]}
            className='text-5xl text-center'
                    >
                Select the amount of meals desired
            </Text>

            <Spacer height={40}/>

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