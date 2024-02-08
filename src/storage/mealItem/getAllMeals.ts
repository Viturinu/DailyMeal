import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@storage/storageConfig";

export async function getAllMeals() {
    try {
        const keys = await AsyncStorage.getAllKeys(); //pega chaves - datas
        const items = await AsyncStorage.multiGet(keys); //pega itens com as chaves
        //const allMealsAndDatesJSON: { [index: string]: MealDTO[] } = items ? JSON.parse(JSON.stringify(items)) : null;
        //const meals: string[] = storage ? JSON.parse(storage) : null;
        return items;

    } catch (error) {
        throw error
    }
}