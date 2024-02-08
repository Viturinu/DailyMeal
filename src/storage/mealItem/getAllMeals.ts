import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@storage/storageConfig";
import { format } from 'date-fns';

interface MealDisplay {
    name: string;
    description: string;
    time: string;
    dietIn: boolean;
}

export interface ObjetoOficial {
    title: string,
    data: MealDisplay[]
}

export async function getAllMeals() {
    try {
        const keys = await AsyncStorage.getAllKeys(); //pega chaves - datas
        const items = await AsyncStorage.multiGet(keys); //pega itens com as chaves
        const keyValuePairs = items.map(([key, value]) => ({ key: key, value: JSON.parse(value) }));

        const keyValuePairsToBeDisplayed: ObjetoOficial[] = keyValuePairs.map(({ key, value }) => ({ //convertendo para o padrão da lista
            title: key,
            data: value.map((objeto: MealDTO) => ({
                name: objeto.name,
                description: objeto.description,
                dietIn: objeto.dietIn,
                time: format(objeto.date, 'HH:mm')
            }))
        }));

        keyValuePairsToBeDisplayed.forEach(({ title, data }) => {
            console.log("KEY: " + title + " | VALUE: " + data + "'\n'")
        })

        return keyValuePairsToBeDisplayed;

    } catch (error) {
        throw error
    }
}