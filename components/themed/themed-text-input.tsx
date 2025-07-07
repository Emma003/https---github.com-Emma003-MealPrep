import { Colors } from '@/constants/colors'
import React from 'react'
import { TextInput, useColorScheme } from 'react-native'

const ThemedTextInput = ({...props}) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? 'light']

  return (
    <TextInput
        style={{
            backgroundColor: theme.uiBackground,
            color: '#766d64',
            fontFamily: 'CircularStdLight',
            fontSize: 18,
            padding: 20,
            borderRadius: 6
        }}
        className="w-[80%] focus:border-gray-400 focus:border mb-6"
        {...props}
    />
  )
}

export default ThemedTextInput