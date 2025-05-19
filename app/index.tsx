import Spacer from "@/components/spacer";
import ThemedButton from "@/components/themed-button";
import ThemedLink from "@/components/themed-link";
import ThemedText from "@/components/themed-text";
import ThemedView from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  const router = useRouter()

  return (
    <ThemedView safe={true} className="flex-1 justify-center items-center">
      <Spacer height={20}/>
      <ThemedText title={true} className='text-6xl font-semibold shadow-sm'>
        MealPlan
      </ThemedText>
      <Spacer height={10}/>
      <ThemedText font="light" className='text-3xl font-semibold'>
        Your meal prep assistant
      </ThemedText>

      <Spacer height={150}/>

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
