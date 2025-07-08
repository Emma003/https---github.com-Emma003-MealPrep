import LoadScreen from "@/components/generate/load_screen";
import HorizontalLine from "@/components/horizontal-line";
import MealCard from "@/components/meal-card";
import ThemedText from "@/components/themed/themed-text";
import ThemedView from "@/components/themed/themed-view";
import { images } from "@/constants/images";
import { RecipeColors } from "@/constants/recipe-colors";
import useFormInfo from "@/hooks/useFormInfo";
import sampleResponse from "@/lib/sampleResponse.json";
import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, View } from "react-native";

const colorKeys = Object.keys(RecipeColors);

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function LoadGenerate() {
    const { formInfo } = useFormInfo()
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState<any>(null)

    useEffect(() => {
        // const fetchAllRecipes = async () => {
        //     try {
        //         const allRecipes = await getAllRecipesForMealPlan(formInfo);
        //         setRecipes(allRecipes)
        //         setLoading(false)
        //     } catch (error) {
        //         console.error('Error fetching recipes:', error);
        //         setLoading(false)
        //     }
        // };

        // fetchAllRecipes();
        
        // TEMP: Use sampleResponse.json instead of API call
        setRecipes(sampleResponse);
        setLoading(false);
    }, []);

    return (
      <ThemedView className="flex-1 pt-20">
        <Image 
            source={images.generateBackground} 
            className="absolute -top-10 -z-1"
        />
        {loading ? (
          <LoadScreen />
        ) : (
          <ScrollView 
            contentContainerStyle={{ 
              paddingBottom: 32,
              paddingTop: 20,
              borderRadius: '6%',
              backgroundColor: '#faf3e4',
            }}>

            <HorizontalLine marginTop={30} marginBottom={16} width={360} color='black'/>
            <ThemedText
                className="text-5xl mb-4 ml-4"
                
            >
                Here are your recipes for the week
            </ThemedText>
            {Object.entries(recipes).map(([dishType, arr], rowIdx) => (
              (arr as any[]).length > 0 && (
                <View key={dishType} style={{ marginBottom: 32 }}>
                  <ThemedText
                    className="text-2xl mb-4 ml-4"
                  >
                    {capitalize(dishType)}
                  </ThemedText>
                  <FlatList
                    data={arr as any[]}
                    keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
                    renderItem={({ item, index }) => (
                      <MealCard
                        id={item.id}
                        title={item.title}
                        cookingTime={item.readyInMinutes ? `${item.readyInMinutes} min` : ''}
                        imageUrl={item.image}
                        dishType={dishType}
                        color={colorKeys[index % colorKeys.length]}
                      />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
                    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                  />
                </View>
              )
            ))}
          </ScrollView>
        )}
      </ThemedView>
    );
}
