import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import GuestOnly from '@/components/auth/guest-only';

export default function AuthLayout() {
  return (
    <GuestOnly>
      <StatusBar style="auto"/>
      <Stack
        screenOptions={{
            headerShown: false,
            animation: "none"
        }}
      />
    </GuestOnly>
    
  )
}