import Feather from "@expo/vector-icons/Feather"
import { View, Text, Pressable } from "react-native"


const Badge = ({ text, removeFood }: { text: string, removeFood: (text: string) => void }) => {
    return (
        <View className='flex-row items-center justify-between p-2'>
            <Pressable
                onPress={() => removeFood(text)}
                className='absolute right-0 top-0 z-10'
            >
                <Feather 
                    name='x-circle' 
                    size={16}
                    color='white'
                />
            </Pressable>
            <View className='bg-[#205054] rounded-md p-2'>
                <Text 
                    className='text-white text-xl font-semibold' 
                style={[{
                    fontFamily: 'CircularStd-Medium',
                }]}
            >
                {text}
                </Text>
                
            </View>
        </View>
    )
}

export default Badge