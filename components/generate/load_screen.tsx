import { View } from 'react-native'
import ThemedText from '../themed/themed-text'

const LoadScreen = () => {
  return (
    <View>
      <ThemedText className="text-2xl">Loading...</ThemedText>
    </View>
  )
}

export default LoadScreen