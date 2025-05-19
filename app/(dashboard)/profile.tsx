import React, { useState } from 'react'
import ThemedView from '@/components/themed-view'
import ThemedText from '@/components/themed-text'
import useUser from '@/hooks/useUser'
import ThemedButton from '@/components/themed-button'
import { Text } from "react-native"
import { useRouter } from 'expo-router'

const Profile = () => {
  const {user, logout} = useUser()

  const handleLogout = async () => {
    try {
      await logout()
    } catch(error: any) {
      console.error(error.message)
    }
  }
  
  return (
    <ThemedView safe={true} className="flex-1 justify-center items-center">
      <ThemedText className="text-4xl">
        Profile
      </ThemedText>
      <ThemedButton
        onPress={handleLogout}
      >
        <Text 
          style={[{
            fontFamily: 'CircularStdMedium',
            fontStyle: 'italic'
          }]}
          className="text-xl text-white font-medium"
        >
          Logout
        </Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Profile