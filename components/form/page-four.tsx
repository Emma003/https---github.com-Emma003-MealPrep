import Spacer from '@/components/spacer'
import React, { useState } from 'react'
import { FlatList, Keyboard, Text, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CuisineCard from './cuisine-card'
import ProgressBar from './progress-bar'
import { icons } from '@/constants/icons'

const initialCuisines = [
    {
      "title": "Mexican",
      "icon": icons.mexican,
      "pressed": false
    },
    {
      "title": "Indian",
      "icon": icons.indian,
      "pressed": false
    },
    {
      "title": "Nigerian",
      "icon": icons.nigerian,
      "pressed": false
    },
    {
      "title": "Italian",
      "icon": icons.italian,
      "pressed": false
    },
    {
      "title": "Chinese",
      "icon": icons.chinese,
      "pressed": false
    },
    {
      "title": "Japanese",
      "icon": icons.japanese,
      "pressed": false
    },
    {
      "title": "French",
      "icon": icons.french,
      "pressed": false
    },
    {
      "title": "Thai",
      "icon": icons.thai,
      "pressed": false
    },
    {
      "title": "Greek",
      "icon": icons.greek,
      "pressed": false
    },
    {
      "title": "Spanish",
      "icon": icons.spanish,
      "pressed": false
    }
]

const PageFour = () => {
    const [cuisines, setCuisines] = useState(initialCuisines);

    const handleCuisinePress = (index: number) => {
        setCuisines(prevCuisines => {
            const newCuisines = [...prevCuisines];
            newCuisines[index] = {
                ...newCuisines[index],
                pressed: !newCuisines[index].pressed
            };
            return newCuisines;
        });
    };

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <SafeAreaView 
                style={[{
                    backgroundColor: '#4a8435',
                }]}
                className="flex-1 items-center"
            >
                <ProgressBar 
                    progress={4}
                    color='#2a4522'
                />
                <Spacer height={60}/>
                <Text 
                style={[{
                    color: 'white',
                    fontFamily: 'Didot',
                }]}
                className='text-5xl text-center'
                >
                    Any cuisine preferences?
                </Text>

                <Spacer height={60}/>

                <FlatList
                    data={cuisines}
                    renderItem={({ item, index }) => (
                        <CuisineCard 
                            cuisine={item}
                            index={index}
                            onPress={() => handleCuisinePress(index)}
                        />
                    )}
                    keyExtractor={(item) => item.title}
                    numColumns={3}
                    columnWrapperStyle={{ 
                        justifyContent: 'space-around',
                        gap: 16,
                    }}
                    contentContainerStyle={{ 
                        paddingHorizontal: 12,
                        gap: 16,
                    }}
                />

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default PageFour