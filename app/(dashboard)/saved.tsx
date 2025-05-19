import React from 'react'
import ThemedView from '@/components/themed-view'
import ThemedText from '@/components/themed-text'

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