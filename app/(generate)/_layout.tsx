import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import UserOnly from '@/components/auth/user-only';

export default function GenerateLayout() {
  return (
    <UserOnly>
      <StatusBar style="auto"/>
      <Stack
        screenOptions={{
            headerShown: false,
            animation: "none"
        }}
      />
    </UserOnly>
    
  )
}