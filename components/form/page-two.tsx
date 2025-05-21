import Spacer from '@/components/spacer'
import { icons } from '@/constants/icons'
import useFormInfo from '@/hooks/useFormInfo'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NumberOfMeal from './number-of-meal'
import ProgressBar from './progress-bar'

const PageTwo = () => {
  /*
    Form flow: when you click on 'create plan' in homepage, form should slide up
    Fill up form, swipe up for next, swipe down for previous
    Completely different color palette?
  */

    const { formInfo, modifySoups, modifySnacks, modifyDesserts } = useFormInfo()

    return (
        <SafeAreaView 
            style={[{
                backgroundColor: '#6B4E71', // Darker purple background
            }]}
            className="flex-1 items-center"
        >
            <ProgressBar 
                progress={2}
                color='#8B6B8F' // Lighter purple for progress bar
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
                meal='Soups' 
                icon={icons.soupOutline}
                value={formInfo.soups}
                onModify={modifySoups}
                color='#4a3b53'
            />

            <NumberOfMeal 
                meal='Snacks' 
                icon={icons.snackOutline}
                value={formInfo.snacks}
                onModify={modifySnacks}
                color='#4a3b53'
            />

            <NumberOfMeal 
                meal='Desserts' 
                icon={icons.dessertOutline}
                value={formInfo.desserts}
                onModify={modifyDesserts}
                color='#4a3b53'
            />

        </SafeAreaView>
    )
}

export default PageTwo