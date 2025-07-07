import { Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'

const ThemedText = ({ font="medium", title = false, ...props }: any) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme ?? 'light']
    const textColor = title ? theme.title : theme.text
    const fontType = font == "medium" ? 'CircularStdMedium' : 'CircularStdLight'

    return (
        <Text
            style={[{
                color: textColor,
                fontFamily: fontType,
            }]}
            {...props}
        />
    )
}

export default ThemedText