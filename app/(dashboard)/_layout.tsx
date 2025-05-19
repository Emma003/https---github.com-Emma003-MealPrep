import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import UserOnly from '@/components/auth/user-only'

const DashboardLayout = () => {
  return (
    <UserOnly>
        <StatusBar style="auto"/>
        <Tabs
        screenOptions={{
            headerShown: false
        }}
        >
            <Tabs.Screen
                name='home'
                options={{
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: "Saved"
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: "Profile"
                }}
            />
        </Tabs>
    </UserOnly>
    
  )
}

export default DashboardLayout