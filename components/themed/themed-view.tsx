import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({safe = false, ...props}: any) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme ?? 'light']

    if(!safe) {
        return(
            <View
                style={[{ backgroundColor: theme.background }]}
                {...props}
            />
        )
    }

    const insets = useSafeAreaInsets()

    return(
        <View
            style={[{ 
                backgroundColor: theme.background,
                paddingTop: insets.top,
                paddingBottom: insets.bottom
            }]}
            {...props}
        />
    )
}

export default ThemedView