import ThemedButton from '@/components/themed/themed-button'
import ThemedText from '@/components/themed/themed-text'
import ThemedView from '@/components/themed/themed-view'
import useUser from '@/hooks/useUser'
import React from 'react'
import { Text } from "react-native"

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