import { Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/colors'

const ThemedText = ({ title = false, color="black", ...props }: any) => {
    const font = title ? 'BrickDisplayPro' : 'CircularStdBook'

    return (
        <Text
            style={[{
                color: color,
                fontFamily: font,
            }]}
            {...props}
        />
    )
}

export default ThemedText