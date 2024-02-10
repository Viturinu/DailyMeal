import AsyncStorage from "@react-native-async-storage/async-storage"
import { format } from 'date-fns';
import { getMealByDate } from "./getMealsByDate";
import { OficialMealDTO } from "@storage/storageConfig";

export async function editByDescriptionAndDate(lastDate: string, lastDescription: string, lastTime: string, name: string, description: string, date: Date, dietIn: boolean) {
    const allMealsArray = await getMealByDate(lastDate);
    const dataAtual = format(date, 'dd/MM/yyyy'); //pegando a data passada na inserção, no formulário
    let newMeal: OficialMealDTO;

    const newArrayOfTheDate = allMealsArray.filter(({ description, date }) => {
        return !(description === lastDescription && format(date, 'HH:mm') === lastTime);
    })

    if (newArrayOfTheDate.length === 0) AsyncStorage.removeItem(lastDate);
    else AsyncStorage.setItem(lastDate, JSON.stringify(newArrayOfTheDate));

    //agora adicionando de novo o array editado

    const meal: OficialMealDTO = {
        name,
        description,
        date,
        dietIn
    }

    try {
        const previousItems = await getMealByDate(dataAtual);
        const storage = JSON.stringify([...previousItems, meal]); //adicionando o newGroup passado, se não entrar no if anterior, e pegando tb os já existentes com operador rest

        await AsyncStorage.setItem(dataAtual, storage); //adicionando novo elemento a coleção
    }
    catch (error) {
        console.log("editMealByDate - Problems " + error);
    }

}































