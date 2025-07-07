import ThemedText from '@/components/themed/themed-text'
import ThemedView from '@/components/themed/themed-view'
import React from 'react'

const Saved = () => {
  return (
    <ThemedView safe={true} className="flex-1 justify-center items-center">
      <ThemedText className="text-4xl">
        Saved
      </ThemedText>
    </ThemedView>
  )
}

export default Saved