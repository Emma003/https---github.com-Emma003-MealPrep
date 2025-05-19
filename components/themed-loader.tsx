import { View, Text, useColorScheme, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'
import ThemedView from './themed-view'

const ThemedLoader = ({...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme ?? 'light']

    return (
        <ThemedView 
            safe={true}
            className='flex-1 justify-center items-center'
        >
            <ActivityIndicator
                size="large"
                color={theme.text}
                {...props}
            />
        </ThemedView>
    )
}

export default ThemedLoader