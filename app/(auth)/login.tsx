import Spacer from '@/components/spacer'
import ThemedButton from '@/components/themed-button'
import ThemedText from '@/components/themed-text'
import ThemedTextInput from '@/components/themed-text-input'
import ThemedView from '@/components/themed-view'
import { Colors } from '@/constants/colors'
import useUser from '@/hooks/useUser'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const {user, login} = useUser()
  const router = useRouter()

  const handleLogin = async () => {
    setError(null)

    try {
      await login(email, password)
      router.push("/home")
    } catch(e: any) {
      console.error(e)
      setError(e.message)
    } finally {
      setEmail('')
      setPassword('')
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <ThemedView safe={true} className="flex-1 justify-center items-center">
      <ThemedText className="text-3xl">
        Login to your Account
      </ThemedText>
      <Spacer height={80}/>

      <ThemedTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <ThemedTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Spacer height={20}/>

      <Link href={"/register"}>
        <ThemedText font="light" className="underline text-xl">
          Register instead
        </ThemedText>
      </Link>

      <Spacer height={20}/>

      {error && 
          <Text 
            style={{color: Colors.warning}} 
            className="text-md p-4 bg-red-200 border border-red-500 rounded-md mx-6"
          >
            {error}
          </Text>
      }
      

      <Spacer height={60}/>

      <ThemedButton
      onPress={handleLogin}
      >
        <Text 
          style={[{
            fontFamily: 'CircularStdMedium',
            fontStyle: 'italic'
          }]}
          className="text-xl text-white font-medium"
        >
          Login
        </Text>
    </ThemedButton>

    </ThemedView>

    </TouchableWithoutFeedback>
    
  )
}

export default Login