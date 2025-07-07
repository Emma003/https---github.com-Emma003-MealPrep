import Spacer from "@/components/spacer";
import ThemedButton from "@/components/themed/themed-button";
import ThemedText from "@/components/themed/themed-text";
import ThemedView from "@/components/themed/themed-view";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, Text } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <ThemedView safe={true} className="flex-1 items-center">
      <Image 
        source={images.landingPage} 
        className="z-0 absolute w-full h-screen" 
      />
      <Spacer height={190}/>
      <ThemedText title={true} className='text-6xl font-semibold shadow-sm'>
        MealPlan
      </ThemedText>
      <Spacer height={10}/>
      <ThemedText font="light" className='text-3xl font-semibold'>
        Your meal prep assistant
      </ThemedText>

      <Spacer height={60}/>

      <ThemedButton
      onPress={() => router.push('/login')}
      >
        <Text 
          style={[{
            fontFamily: 'CircularStdMedium',
            fontStyle: 'italic'
          }]}
          className="text-xl text-white font-medium"
        >
          Get started
        </Text>
    </ThemedButton>

    
    </ThemedView>
  );
}
