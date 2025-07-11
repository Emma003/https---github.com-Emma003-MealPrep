
export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
}

export enum DietaryPreference {
    VEGAN = "VEGAN",
    VEGETARIAN = "VEGETARIAN",
    GLUTEN_FREE = "GLUTEN_FREE",
    LACTOSE_FREE = "LACTOSE_FREE",
    PESCATARIAN = "PESCATARIAN",
    LOW_CARB = "LOW_CARB",
    KETO = "KETO",
    PALEO = "PALEO",
}

export type UserPreferences = {
    id: string
    userId: string
    dietaryPreference: DietaryPreference
    allergies: string[]
    dislikes: string[]
}

export type FormInfo = {
    id: string
    userId: string
    smoothies: number
    salads: number
    mainDishes: number
    soups: number
    snacks: number
    desserts: number
    foodsToInclude: string[]
    foodsToAvoid: string[]
    cuisines: string[]
}

export type Recipe = {
    id: string
    spoonacularId: number
    title: string
    imageUrl: string
    summary: string
    dishType: string
    instructions: string[]
    ingredients: string[]
    dishTypes: string[]
    preparationMinutes: number
    cookingMinutes: number
    readyInMinutes: number
    servings: number
    diets: string[]
    totalCalories: number
    totalCarbs: number
    totalProtein: number
    totalFat: number
}
