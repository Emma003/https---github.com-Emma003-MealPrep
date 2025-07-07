import Spacer from '@/components/spacer'
import ThemedButton from '@/components/themed/themed-button'
import ThemedText from '@/components/themed/themed-text'
import ThemedTextInput from '@/components/themed/themed-text-input'
import ThemedView from '@/components/themed/themed-view'
import { Colors } from '@/constants/colors'
import useUser from '@/hooks/useUser'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Keyboard, Text, TouchableWithoutFeedback } from 'react-native'

const Register = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const { user, register } = useUser()
  const router = useRouter()

  const handleRegister = async () => {
    setError(null)

    try {
      await register(username, email, password)
      router.push("/home")

    } catch(error: any) {
      setError(error.message)
      console.error(error.message)
    } finally {
      setEmail('')
      setPassword('')
      setUsername('')
    }
  }

  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
  >
    <ThemedView safe={true} className="flex-1 justify-center items-center">
    <ThemedText className="text-3xl">
      Register for a New Account
    </ThemedText>
    <Spacer height={80}/>

    <ThemedTextInput
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
    />

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

    {error && 
          <Text 
            style={{color: Colors.warning}} 
            className="text-md p-4 bg-red-200 border border-red-500 rounded-md mx-6"
          >
            {error}
          </Text>
    }

    <Spacer />
    

    <ThemedButton
      onPress={handleRegister}
    >
      <Text 
        style={[{
          fontFamily: 'CircularStdMedium',
          fontStyle: 'italic'
        }]}
        className="text-xl text-white font-medium"
      >
        Register
      </Text>
    </ThemedButton>



    <Spacer height={40}/>

    <Link href={"/login"}>
      <ThemedText font="light" className="underline text-xl">
        Login instead
      </ThemedText>
    </Link>




  </ThemedView>

  </TouchableWithoutFeedback>
  )
  
}

export default Register