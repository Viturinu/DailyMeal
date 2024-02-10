import AsyncStorage from "@react-native-async-storage/async-storage"
import { format } from 'date-fns';
import { getMealByDate } from "./getMealsByDate";

export async function removeMealByDescriptionAndDate(dateParameter: string, descriptionParameter: string, timeParameter: string) {
    const allMealsArray = await getMealByDate(dateParameter);

    const newArray = allMealsArray.filter(({ description, date }) => {
        return !(description === descriptionParameter && format(date, 'HH:mm') === timeParameter);
    })

    if (newArray.length === 0) AsyncStorage.removeItem(dateParameter);
    else AsyncStorage.setItem(dateParameter, JSON.stringify(newArray));
}