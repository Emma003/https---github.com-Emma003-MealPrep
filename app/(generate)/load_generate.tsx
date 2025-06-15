import ThemedText from "@/components/themed-text";
import ThemedView from "@/components/themed-view";
import useFormInfo from "@/hooks/useFormInfo";

export default function LoadGenerate() {
    const { formInfo } = useFormInfo()

  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText className="text-2xl">Smoothies: {formInfo.smoothies}</ThemedText>
      <ThemedText className="text-2xl">Salads: {formInfo.salads}</ThemedText>
      <ThemedText className="text-2xl">Main Dishes: {formInfo.mainDishes}</ThemedText>
      <ThemedText className="text-2xl">Soups: {formInfo.soups}</ThemedText>
      <ThemedText className="text-2xl">Snacks: {formInfo.snacks}</ThemedText>
      <ThemedText className="text-2xl">Desserts: {formInfo.desserts}</ThemedText>
      <ThemedText className="text-2xl">Foods to Include: {formInfo.foodsToInclude}</ThemedText>
      <ThemedText className="text-2xl">Foods to Avoid: {formInfo.foodsToAvoid}</ThemedText>
      <ThemedText className="text-2xl">Cuisines: {formInfo.cuisines}</ThemedText>
    </ThemedView>
  );
}
