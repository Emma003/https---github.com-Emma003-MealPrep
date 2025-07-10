import UserOnly from '@/components/auth/user-only';
import { FormInfoProvider } from '@/contexts/FormInfoContext';
import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React from 'react';

export default function GenerateLayout() {
  return (
    <UserOnly>
      <FormInfoProvider>
        <StatusBar style="light"/>
        <Stack
          screenOptions={{
              headerShown: false,
              animation: "none"
          }}
        />
      </FormInfoProvider>
    </UserOnly>
  )
}