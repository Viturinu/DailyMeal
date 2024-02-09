import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@storage/storageConfig";

export type statisticObject = {
    mealSequence: number;
    mealRegistered: number;
    mealInDiet: number;
    mealOutDiet: number;
}

export async function dietOnPercentage() {

    let dietInNumber = 0; //to do the math
    let dietOutNumber = 0;
    let total = 0;
    let mealSequence = 0;

    let mealSequences: number[] = []; //to help find the mealSequence

    const allMealsToCheckKeys = await AsyncStorage.getAllKeys();
    const allMealsToCheckKeyValuePair = await AsyncStorage.multiGet(allMealsToCheckKeys);

    const arrPairValueKeys = allMealsToCheckKeyValuePair.map(([key, value]) => ({
        key: key,
        value: JSON.parse(value),
    }));
    arrPairValueKeys.forEach(({ key, value }) => {
        value.forEach((item: MealDTO) => {
            if (item.dietIn) {
                dietInNumber++;
                mealSequence++;
            } else {
                dietOutNumber++;
                if (mealSequence > 0) {
                    mealSequences.push(mealSequence);
                    mealSequence = 0;
                }
            }
            total++;
        })
    });

    mealSequence = Math.max(...mealSequences);

    //Creating Object

    const result: statisticObject = {
        mealInDiet: dietInNumber,
        mealOutDiet: dietOutNumber,
        mealSequence: mealSequence,
        mealRegistered: total
    }
    return result;
}       