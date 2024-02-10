import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllMeal } from "./getAllMeal";
import { format } from 'date-fns';

export async function removeMealByDescriptionAndDate(descriptionParameter: string, timeParameter: string) {
    const allMealsArray = await getAllMeal();

    let allMealFiltered = null; // To create a new Array to insert
    allMealsArray.forEach(({ title, data }) => {
        allMealFiltered = data.filter(({ date, description }) => {
            const data = format(date, 'HH:mm')
            return !(description === descriptionParameter && data === timeParameter);
        })
        console.log(allMealFiltered)
        AsyncStorage.setItem(title, JSON.stringify(allMealFiltered));
    });
}