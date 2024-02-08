import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "@storage/storageConfig";
import { format } from 'date-fns';
import { getMealByDate } from "./getMealsByDate";

export async function addMealByDate({ name, description, date, dietIn }: MealDTO) {

    const dataAtual = format(date, 'dd/MM/yyyy'); //pegando a data passada na inserção, no formulário
    console.log(dataAtual)

    const meal: MealDTO = {
        name,
        description,
        date,
        dietIn
    }

    try {
        const previousItems = await getMealByDate(dataAtual);
        const storage = JSON.stringify([...previousItems, meal]); //adicionando o newGroup passado, se não entrar no if anterior, e pegando tb os já existentes com operador rest

        await AsyncStorage.setItem(dataAtual, storage); //adicionando novo elemento a coleção
        console.log(storage);

    }
    catch (error) {
        console.log("addMealByDate - Problems " + error);
    }
}