import { View, Text } from 'react-native'
import React from 'react'
import Spacer from '../spacer'

const ProgressBar = ({ progress, color }: { progress: number, color: string }) => {
    return (
      <View className='justify-center items-center gap-2'>
        <Spacer height={10}/>
        <View className='flex-row justify-center items-center gap-4'>
            <View 
                style={[{
                    backgroundColor: progress >= 1 ? 'white' : color,
                }]}
                className={`w-20 h-1 rounded-full`} />
            <View 
                style={[{
                    backgroundColor: progress >= 2 ? 'white' : color,
                }]}
                className={`w-20 h-1 rounded-full`} />
            <View 
                style={[{
                    backgroundColor: progress >= 3 ? 'white' : color,
                }]}
                className={`w-20 h-1 rounded-full`} />
            <View 
                style={[{
                    backgroundColor: progress >= 4 ? 'white' : color,
                }]}
                className={`w-20 h-1 rounded-full`} />
        </View>
      </View>
    )
  }

export default ProgressBar