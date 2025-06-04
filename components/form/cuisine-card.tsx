import { useRef } from "react";
import { Animated, Image, ImageSourcePropType, Pressable, Text } from "react-native";
import Spacer from "../spacer";

interface CuisineCardProps {
    cuisine: {
        title: string;
        icon: ImageSourcePropType;
        pressed: boolean;
    };
    index: number;
    onPress: () => void;
}

const CuisineCard = ({ cuisine, onPress }: CuisineCardProps) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    
    return (
        <Animated.View
            style={{
                transform: [{ scale: scaleAnim }],
            }}
        >
            <Pressable
                className={`w-[100px] h-[100px] bg-[#2a4522] rounded-md items-center justify-center ${cuisine.pressed ? 'border-2 border-white' : ''}`}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={onPress}
            >
                <Image 
                    source={cuisine.icon} 
                    className='w-10 h-10'
                    tintColor='white'
                />
                <Spacer height={5}/>
                <Text 
                style={[{
                    color: 'white',
                    fontFamily: 'Didot',
                    fontSize: 18,
                }]}
                className='text-center'
                >{cuisine.title}</Text>
            </Pressable>
        </Animated.View>
    )
}

export default CuisineCard