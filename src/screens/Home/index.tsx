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
import { ObjetoOficial, getAllMeals } from "@storage/mealItem/getAllMeals";
import { EmptyListComponent } from "@components/EmptyListComponent";
import { generateObjectHash } from "@utils/hashGenerate";
import { dietOnPercentage, statisticObject } from "@storage/mealItem/dietOnPercentage";

export function Home() {

    const [mappedArrayDone, setMappedArrayDone] = useState<ObjetoOficial[]>([]);
    const [percentageString, setPercentageString] = useState("");

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate("form");
    }

    async function handlePercentageCard() {
        const object: statisticObject = await dietOnPercentage();
        const percentage = ((object.mealInDiet / object.mealRegistered) * 100).toFixed(2);
        setPercentageString(`${percentage}%`);
    }

    function handleClickListItem(name: string, description: string, time: string, dietIn: boolean) {
        navigation.navigate("meal", { Title: name, Description: description, Time: time, dietIn: dietIn });
    }

    //DATA TREATMENT
    async function fetchListData() {
        try {
            const meals = await getAllMeals(); //Retorna ARRAY com key e array de JSON (Objects) completo
            setMappedArrayDone(meals);

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
                    <PercentageCard mensagem="das refeições dentro da dieta" number={percentageString} CardType="GREEN" ButtonOn={true} sizeNumber={32} />
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
                                whatToDo={() => handleClickListItem(item.name, item.description, item.time, item.dietIn)}
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

