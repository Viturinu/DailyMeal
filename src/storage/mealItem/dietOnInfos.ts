import AsyncStorage from "@react-native-async-storage/async-storage";
import { OficialMealDTO } from "@storage/storageConfig";

export type statisticObject = {
    mealSequence: number;
    mealRegistered: number;
    mealInDiet: number;
    mealOutDiet: number;
    average: number;
}

export async function dietOnInfos() {

    let dietInNumber = 0; //to do the math
    let dietOutNumber = 0;
    let total = 0;
    let mealSequence = 0;

    let mealSequences: number[] = []; //to help find the mealSequence

    const allMealsToCheckKeys = await AsyncStorage.getAllKeys();

    if (allMealsToCheckKeys.length === 0) {
        const result: statisticObject = {
            mealInDiet: dietInNumber,
            mealOutDiet: dietOutNumber,
            mealSequence: mealSequence,
            mealRegistered: total,
            average: 0
        }
        return result;
    }
    else {
        const allMealsToCheckKeyValuePair = await AsyncStorage.multiGet(allMealsToCheckKeys);
        const arrPairValueKeys = allMealsToCheckKeyValuePair.map(([key, value]) => ({
            key: key,
            value: JSON.parse(value),
        }));
        arrPairValueKeys.forEach(({ value }) => {
            value.forEach((item: OficialMealDTO) => {
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

        const greaterMealSequenceInArray = Math.max(...mealSequences);

        //Creating Object

        const result: statisticObject = {
            mealInDiet: dietInNumber,
            mealOutDiet: dietOutNumber,
            mealRegistered: total,
            mealSequence: mealSequences.length === 0 ? mealSequence
                : greaterMealSequenceInArray < mealSequence ? mealSequence : greaterMealSequenceInArray,
            average: (total === 0) ? 0 : ((dietInNumber / total) * 100)
        }
        return result;
    }
}       