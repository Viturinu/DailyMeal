import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealDTO } from "../storageConfig";

export async function getMealByDate(date: string) {
    try {
        const storage = await AsyncStorage.getItem(date);
        const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

        return meals; //retorna o JSON

    } catch (error) {
        throw error
    }
}