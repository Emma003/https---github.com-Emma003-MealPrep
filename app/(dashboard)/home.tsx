import { View, Text } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/components/themed-view'
import ThemedText from '@/components/themed-text'
import ThemedButton from '@/components/themed-button'
import useUser from '@/hooks/useUser'

const Home = () => {
  const {user} = useUser()

  return (
    <ThemedView safe={true} className="flex-1 justify-center items-center">
      <ThemedText className="text-4xl">
        Home
      </ThemedText>
      <ThemedText className="text-2xl">
        Welcome {user?.username}
      </ThemedText>

    </ThemedView>
  )
}

export default Home