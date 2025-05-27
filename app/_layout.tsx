import { UserProvider } from "@/contexts/UserContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import '../global.css';
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {

  const [loaded] = useFonts({
    CircularStdMedium: require("@/assets/fonts/CircularStd-Medium.ttf"),
    CircularStdLight: require('../assets/fonts/CircularStd-Light.otf'),
    CabinetGroteskVariable: require('../assets/fonts/CabinetGrotesk-Variable.ttf'),
  })

  if(!loaded) {
    return null
  }

  return (
    <UserProvider>
      <StatusBar style="auto"/>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ title: "Index" }} 
        />
        <Stack.Screen 
          name="(auth)" 
          options={{ title: "Auth" }} 
        />
        <Stack.Screen 
          name="(dashboard)" 
          options={{ title: "Dashboard" }} 
        />
        <Stack.Screen 
          name="(generate)" 
          options={{ title: "Generate" }} 
        />
      </Stack>
    </UserProvider>
  )
}
