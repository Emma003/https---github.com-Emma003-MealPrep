import { View, Text, Pressable, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'

const ThemedButton = ({...props}) => {
    return (
        <Pressable
            style={[{backgroundColor: Colors.primary}]}
            className='px-5 py-4 rounded-md my-2 active:opacity-80 text-center'
            {...props}
        />
    )
}

export default ThemedButton