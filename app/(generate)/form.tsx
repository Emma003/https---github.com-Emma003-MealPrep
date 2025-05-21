import { View, Text, Image } from 'react-native'
import React from 'react'
import ThemedView from '@/components/themed-view'
import ThemedText from '@/components/themed-text'
import Spacer from '@/components/spacer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '@/constants/icons'
import PageOne from '@/components/form/page-one'
import ProgressBar from '@/components/form/progress-bar'
import PageTwo from '@/components/form/page-two'



const PlanForm = () => {
  /*
    Form flow: when you click on 'create plan' in homepage, form should slide up
    Fill up form, swipe up for next, swipe down for previous
    Completely different color palette?
  */
  return (

    <View className='flex-1'>
      {/* <PageOne /> */}
      <PageTwo />
    </View>
  )
}


export default PlanForm