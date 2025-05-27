import { Pressable, Text } from 'react-native';
import { useState } from 'react';


export default function TailwindButton() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      className={`bg-green-600 p-3 rounded-xl items-center ${
        isPressed ? 'opacity-60 scale-95' : ''
      }`}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => console.log('Pressed!')}
    >
      <Text className="text-white font-bold text-base">
        Press Me
      </Text>
    </Pressable>
  );
}
