const spoonacularApiKey = process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY;

export const getRecipesByType = async (
    dishType: string, 
    amount: number, 
    cuisines: string[], 
    includeIngredients: string[], 
    excludeIngredients: string[]
) => {
    if (!spoonacularApiKey) {
        throw new Error('Spoonacular API key is not defined');
    }

    const baseURL = "https://api.spoonacular.com/recipes/complexSearch";
    const url = new URL(baseURL);
    amount += 2; // Add 2 to the amount to get more recipe options
  
    const queryParams: Record<string, string> = {
        apiKey: spoonacularApiKey,
        type: dishType,
        number: amount.toString(),
        addRecipeInstructions: 'true', // This gets all the detailed info in one call
        addRecipeNutrition: 'true',
        instructionsRequired: 'true',
        fillIngredients: 'true',
    };

    // Add cuisine filter if specified
    if (cuisines.length > 0) {
        queryParams.cuisine = cuisines.join(',');
    }

    // Add include ingredients if specified
    if (includeIngredients.length > 0) {
        queryParams.includeIngredients = includeIngredients.join(',');
    }

    // Add exclude ingredients if specified
    if (excludeIngredients.length > 0) {
        queryParams.excludeIngredients = excludeIngredients.join(',');
    }
  
    url.search = new URLSearchParams(queryParams).toString();
  
    try {
        console.log(`Fetching ${amount} ${dishType} recipes...`);
        const searchResponse = await fetch(url.toString());
        const resultsJson = await searchResponse.json();
        return resultsJson;
    } catch (error) {
        console.error(`Error fetching ${dishType} recipes:`, error);
        throw error;
    }
};

// Helper function to get all recipes for a meal plan
export const getAllRecipesForMealPlan = async (formInfo: any) => {
    const recipePromises = [];
    
    // Map your form dish types to Spoonacular dish types
    const dishTypeMap = {
        mainDishes: 'main course',
        desserts: 'dessert',
        snacks: 'snack',
        soups: 'soup',
        salads: 'salad',
        smoothies: 'drink' // or 'beverage' depending on what's available
    };

    // Create parallel requests for each dish type
    for (const [formKey, spoonacularType] of Object.entries(dishTypeMap)) {
        const amount = formInfo[formKey];
        if (amount > 0) {
            recipePromises.push(
                getRecipesByType(
                    spoonacularType,
                    amount,
                    formInfo.cuisines,
                    formInfo.foodsToInclude,
                    formInfo.foodsToAvoid
                )
            );
        }
    }

    // Execute all requests in parallel
    const results = await Promise.all(recipePromises);
    
    // Combine and organize results
    const allRecipes = {
        mainDishes: results.find(r => r.results?.[0]?.dishTypes?.includes('main course'))?.results || [],
        desserts: results.find(r => r.results?.[0]?.dishTypes?.includes('dessert'))?.results || [],
        snacks: results.find(r => r.results?.[0]?.dishTypes?.includes('snack'))?.results || [],
        soups: results.find(r => r.results?.[0]?.dishTypes?.includes('soup'))?.results || [],
        salads: results.find(r => r.results?.[0]?.dishTypes?.includes('salad'))?.results || [],
        smoothies: results.find(r => r.results?.[0]?.dishTypes?.includes('drink'))?.results || []
    };

    return allRecipes;
};