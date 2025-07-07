import { getAllRecipesForMealPlan } from "@/api/recipes";
import LoadScreen from "@/components/generate/load_screen";
import ThemedText from "@/components/themed/themed-text";
import ThemedView from "@/components/themed/themed-view";
import useFormInfo from "@/hooks/useFormInfo";
import { useEffect, useState } from "react";

export default function LoadGenerate() {
    const { formInfo } = useFormInfo()
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipes] = useState<any>(null)

    useEffect(() => {
        const fetchAllRecipes = async () => {
            try {
                const allRecipes = await getAllRecipesForMealPlan(formInfo);
                console.log('All recipes:', allRecipes);
                setRecipes(allRecipes)
                setLoading(false)
                // Process the recipes here
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setLoading(false)
            }
        };

        fetchAllRecipes();
    }, []);

  return (
    <ThemedView className="flex-1 justify-center items-center">
      {loading ? 
        <LoadScreen /> : 
        <ThemedText className="text-2xl">{recipes.mainDishes[0].title}</ThemedText>
        
      }
    </ThemedView>
  );
}
