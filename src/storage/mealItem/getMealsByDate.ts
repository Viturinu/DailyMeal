import AsyncStorage from "@react-native-async-storage/async-storage";

import { OficialMealDTO } from "../storageConfig";

export async function getMealByDate(date: string) {
    try {
        const storage = await AsyncStorage.getItem(date);
        const meals: OficialMealDTO[] = storage ? JSON.parse(storage) : [];

        return meals; //retorna o JSON

    } catch (error) {
        throw error
    }
}