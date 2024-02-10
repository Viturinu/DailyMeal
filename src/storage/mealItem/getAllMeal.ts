import AsyncStorage from "@react-native-async-storage/async-storage"
import { OficialMealDTO, OficialObjectDTO } from "@storage/storageConfig";

export async function getAllMeal() {
    const keys = await AsyncStorage.getAllKeys(); //retorna objeto contendo array de strings
    if (keys.length === 0) {
        const zeroMeals: OficialObjectDTO[] = [];
        return zeroMeals;
    } else {
        const items = await AsyncStorage.multiGet(keys); //retorna também um objeto. Pega itens com as chaves, fazendo arrays de key:string : value:string (ReadOnly - precisamos transformar em Array para usarmos funções como map, filter, etc)
        const keyValuePairs = items.map(([key, value]) => ({ key: key, value: JSON.parse(value) })); //transforma todos os objetos em objects no typescript -> key:string value: string (retorna um array dessa estrutura <{key:string value: objects}[]>), pois vai iterando no map e retorna o array
        const allMeals: OficialObjectDTO[] = keyValuePairs.map(({ key, value }) => ({ //convertendo para o padrão da lista - precisamos, como tudo no typescript, tipar e falar que é um array de objeto oficial, pra podermos setar o estado, também array ObjetoOficial, lá no screen
            title: key,
            data: value.map((objeto: OficialMealDTO) => ({
                name: objeto.name,
                description: objeto.description,
                dietIn: objeto.dietIn,
                date: objeto.date
            }))
        }));
        return allMeals;
    }
}