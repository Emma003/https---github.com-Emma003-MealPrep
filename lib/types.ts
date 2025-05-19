
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
