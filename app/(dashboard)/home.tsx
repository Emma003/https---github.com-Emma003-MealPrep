import Spacer from '@/components/spacer'
import ThemedButton from '@/components/themed-button'
import ThemedText from '@/components/themed-text'
import ThemedView from '@/components/themed-view'
import useUser from '@/hooks/useUser'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

const Home = () => {
  const {user} = useUser()
  const router = useRouter()

  return (
    <ThemedView safe={true} className="flex-1 justify-center items-center">
      <ThemedText className="text-4xl">
        Home
      </ThemedText>
      <ThemedText className="text-2xl">
        Welcome {user?.username}
      </ThemedText>

      <Spacer height={80}/>

      <ThemedButton
      onPress={() => router.push('/form')}
      >
        <Text 
          style={[{
            fontFamily: 'CircularStdMedium',
            fontStyle: 'italic'
          }]}
          className="text-xl text-white font-medium"
        >
          Create recipe
        </Text>
    </ThemedButton>

    </ThemedView>
  )
}

export default Home