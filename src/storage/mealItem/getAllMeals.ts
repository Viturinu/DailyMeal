import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@storage/storageConfig";

export async function getAllMeals() {
    try {
        const keys = await AsyncStorage.getAllKeys(); //pega chaves - datas
        const allMealsAndDatesString = await AsyncStorage.multiGet(keys); //pega itens com as chaves
        const allMealsAndDates: { [index: string]: MealDTO[] } = allMealsAndDatesString ? JSON.parse(JSON.stringify(allMealsAndDatesString)) : null;
        //const meals: string[] = storage ? JSON.parse(storage) : null;
        console.log("Get all meals: " + allMealsAndDates)
        return allMealsAndDates; //retorna o JSON

    } catch (error) {
        throw error
    }
}