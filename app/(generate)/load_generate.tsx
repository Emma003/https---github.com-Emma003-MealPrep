import LoadScreen from "@/components/generate/load_screen";
import HorizontalLine from "@/components/horizontal-line";
import MealCard from "@/components/meal-card";
import Spacer from "@/components/spacer";
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
  if (str === 'mainDishes') {
    return 'Main Dishes'
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function LoadGenerate() {
    const { formInfo } = useFormInfo()
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState<any>(null)
    // Step 1: Track selected recipes per dish type
    const [selectedMeals, setSelectedMeals] = useState<{ [dishType: string]: string[] }>({});

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
        // Initialize selectedMeals state when recipes are loaded
        if (recipes) {
          const initialSelected: { [dishType: string]: string[] } = {};
          Object.keys(recipes).forEach(dishType => {
            initialSelected[dishType] = [];
          });
          setSelectedMeals(initialSelected);
        }
    }, []);

    const dishTypeMap: Record<string, keyof typeof formInfo> = {
      mainDishes: 'mainDishes',
      desserts: 'desserts',
      snacks: 'snacks',
      soups: 'soups',
      salads: 'salads',
      smoothies: 'smoothies',
    };

    return (
      <ThemedView className="flex-1 pt-20">
        <Image 
            source={images.generateBackground} 
            className="absolute -top-10 -z-1"
        />
        {loading ? (
          <LoadScreen />
        ) : (
          <View className="flex-1 rounded-3xl overflow-hidden">
          <ScrollView 
            contentContainerStyle={{ 
              paddingBottom: 32,
              paddingTop: 20,
              borderRadius: '6%',
              backgroundColor: '#faf3e4',
            }}>

            <HorizontalLine marginTop={30} marginBottom={18} width={360} color='black'/>
            <ThemedText
                className="text-5xl mb-4 ml-4"
                
            >
                Choose your preferred meals   for the week
            </ThemedText>
            <Spacer height={18}/>
            {Object.entries(recipes).map(([dishType, arr], rowIdx) => (
              (arr as any[]).length > 0 && (
                <View key={dishType} style={{ marginBottom: 32 }}>
                  <ThemedText
                    className="text-2xl mb-4 ml-4 "
                  >
                    {capitalize(dishType)} - {formInfo[dishTypeMap[dishType]]}
                  </ThemedText>
                  <FlatList
                    data={arr as any[]}
                    keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
                    renderItem={({ item, index }) => {
                      const id = item.id?.toString();
                      const isSelected = selectedMeals[dishType]?.includes(id);
                      // Get the selection limit for this dish type from formInfo
                      const selectionLimit = Number(formInfo[dishTypeMap[dishType]]) || 0;
                      const handlePress = () => {
                        setSelectedMeals(prev => {
                          const prevSelected = prev[dishType] || [];
                          // If already selected, unselect
                          if (prevSelected.includes(id)) {
                            return {
                              ...prev,
                              [dishType]: prevSelected.filter(selId => selId !== id)
                            };
                          } else {
                            // If at limit, do not select more
                            if (prevSelected.length >= selectionLimit) return prev;
                            return {
                              ...prev,
                              [dishType]: [...prevSelected, id]
                            };
                          }
                        });
                      };
                      return (
                        <MealCard
                          id={item.id}
                          title={item.title}
                          cookingTime={item.readyInMinutes ? `${item.readyInMinutes} min` : ''}
                          imageUrl={item.image}
                          dishType={dishType}
                          color={colorKeys[index % colorKeys.length]}
                          isSelected={isSelected}
                          onPress={handlePress}
                        />
                      );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
                    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                  />
                </View>
              )
            ))}
          </ScrollView>
          </View>
        )}
      </ThemedView>
    );
}
