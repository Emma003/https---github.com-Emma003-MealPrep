import MealCard from '@/components/meal-card'
import Spacer from '@/components/spacer'
import ThemedButton from '@/components/themed/themed-button'
import ThemedText from '@/components/themed/themed-text'
import ThemedView from '@/components/themed/themed-view'
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

      <MealCard
        id="1"
        title="Bol santé à la grecque"
        cookingTime="10 min"
        imageUrl="https://static.vecteezy.com/system/resources/thumbnails/053/286/853/small_2x/close-up-shot-of-crunchy-chicken-fry-fried-to-perfection-free-photo.jpg"
        dishType="Main Dish"
        color="pink"
      />

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