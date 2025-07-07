const spoonacularApiKey = process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY;

export const getMainDishRecipes = async (cuisine: string, includeIngredients: string, amount: number) => {
    if (!spoonacularApiKey) {
        throw new Error('Spoonacular API key is not defined');
    }

    const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
    const url = new URL(baseURL);
  
    const queryParams: Record<string, string> = {
        apiKey: spoonacularApiKey,
        cuisine: cuisine,
        number: amount.toString(),
        includeIngredients: includeIngredients,
        addRecipeNutrition: 'true',
    };
  
    url.search = new URLSearchParams(queryParams).toString();
  
    try {
        console.log("--------------------------------");
        console.log(url.toString());
        console.log("--------------------------------");
        const searchResponse = await fetch(url.toString());
        const resultsJson = await searchResponse.json();
        console.log(resultsJson);
        return resultsJson;
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};