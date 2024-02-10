import React, { useCallback, useEffect, useState } from "react";
import theme from "src/theme";
import { ButtonMealView, Container, HeaderMain, LogoView, MealsText, SectionListView } from "./style";
import { StatusBar, SectionList, View } from "react-native";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";
import { SectionListComponent } from "@components/SectionListComponent";
import { DateStamp, Description } from "@components/SectionListComponent/style";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { EmptyListComponent } from "@components/EmptyListComponent";
import { generateObjectHash } from "@utils/hashGenerate";
import { getAllMeal } from "@storage/mealItem/getAllMeal";
import { format } from "date-fns";
import { dietOnInfos, statisticObject } from "@storage/mealItem/dietOnInfos";

interface DisplayMeal {
    name: string;
    description: string;
    date: string;
    time: string;
    dietIn: boolean;
}
interface DisplayObject {
    title: string,
    data: DisplayMeal[]
}

export function Home() {

    const [mappedArrayDone, setMappedArrayDone] = useState<DisplayObject[]>([]);
    const [percentageString, setPercentageString] = useState("");
    const [percentageState, setPercentageState] = useState<number>(0);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate("addMeal");
    }

    async function handlePercentageCard() {
        const object: statisticObject = await dietOnInfos();
        object.average === 0 ? setPercentageString("0%") : setPercentageString(`${(object.average).toFixed(2)}%`);
        setPercentageState(object.average);
    }

    function handleClickListItem(name: string, description: string, date: string, time: string, dietIn: boolean) {
        navigation.navigate("meal", { title: name, description: description, date: date, time: time, dietIn: dietIn });
    }

    //DATA TREATMENT
    async function fetchListData() {
        try {
            //Working on Data to display it in a list
            const OficialObjectArray = await getAllMeal();

            if (OficialObjectArray.length === 0) {
                const mealsArray: DisplayObject[] = [];
                setMappedArrayDone(mealsArray);
            } else {
                const mealsArray: DisplayObject[] = OficialObjectArray.map(({ title, data }) => ({ //convertendo para o padrão da lista - precisamos, como tudo no typescript, tipar e falar que é um array de objeto oficial, pra podermos setar o estado, também array ObjetoOficial, lá no screen
                    title: title,
                    data: data.map((objeto) => ({
                        name: objeto.name,
                        description: objeto.description,
                        dietIn: objeto.dietIn,
                        date: format(objeto.date, 'dd/MM/yyyy'),
                        time: format(objeto.date, 'HH:mm')
                    }))
                }));
                setMappedArrayDone(mealsArray);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchListData();
        handlePercentageCard();
    }, []));

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={theme.COLOR.GRAY_100}
                translucent
            />
            <Container>
                <LogoView>
                    <Logos />
                </LogoView>

                <HeaderMain>
                    <PercentageCard mensagem="das refeições dentro da dieta" number={percentageString} CardType={percentageState > 50 ? "GREEN" : "RED"} ButtonOn={true} sizeNumber={32} />
                </HeaderMain>
                <ButtonMealView>
                    <MealsText> Refeições</MealsText>
                    <Button mensagem="Nova refeição" buttonColor="BLACK" whatToDo={handleNewMeal} iconActive={true} Icone={Plus} />
                </ButtonMealView>
                <SectionListView>
                    <SectionList
                        sections={mappedArrayDone}
                        keyExtractor={(item) => generateObjectHash(item)}
                        renderItem={({ item }) => (
                            <SectionListComponent
                                time={item.time}
                                description={item.name + " - " + item.description}
                                inDiet={item.dietIn}
                                whatToDo={() => handleClickListItem(item.name, item.description, item.date, item.time, item.dietIn)}
                            />
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <DateStamp>{title}</DateStamp>
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => <EmptyListComponent />}
                    />
                </SectionListView>
            </Container>
        </>
    )
}

