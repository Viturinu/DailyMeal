import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAllMeals } from "./getAllMeals";
import { MealDTO } from "@storage/storageConfig";

export async function removeMealByNameAndDate(nome: string, description: string, hora: string) {
    const keys = await AsyncStorage.getAllKeys(); //retorna objeto contendo array de strings
    const items = await AsyncStorage.multiGet(keys); //retorna também um objeto. Pega itens com as chaves, fazendo arrays de key:string : value:string (ReadOnly - precisamos transformar em Array para usarmos funções como map, filter, etc)
    const keyValuePairs = items.map(([key, value]) => ({ key: key, value: JSON.parse(value) })); //transforma todos os objetos em objects no typescript -> key:string value: string (retorna um array dessa estrutura <{key:string value: objects}[]>), pois vai iterando no map e retorna o array
    const allMeals: MealDTO[] = keyValuePairs.map(({ key, value }) => ({ //convertendo para o padrão da lista - precisamos, como tudo no typescript, tipar e falar que é um array de objeto oficial, pra podermos setar o estado, também array ObjetoOficial, lá no screen
        title: key,
        data: value.map((objeto: MealDTO) => ({
            name: objeto.name,
            description: objeto.description,
            dietIn: objeto.dietIn,
            time: objeto.date
        }))
    }));

    let allMealFiltered = null;
    allMealFiltered = allMeals.filter(elemento => {

        if (elemento.name === nome && elemento.description === description) false;
        else true;
    });

    AsyncStorage.setItem(object, JSON.stringify(allMealFiltered))

})

    
}