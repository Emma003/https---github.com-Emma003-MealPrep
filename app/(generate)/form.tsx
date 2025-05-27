import PageFour from '@/components/form/page-four'
import PageThree from '@/components/form/page-three'
import PageTwo from '@/components/form/page-two'
import React from 'react'
import { View } from 'react-native'



const PlanForm = () => {
  /*
    Form flow: when you click on 'create plan' in homepage, form should slide up
    Fill up form, swipe up for next, swipe down for previous
    Completely different color palette?
  */
  return (

    <View className='flex-1'>
      {/* <PageOne /> */}
      {/* <PageTwo /> */}
      {/* <PageThree /> */}
      <PageFour />
    </View>
  )
}


export default PlanForm