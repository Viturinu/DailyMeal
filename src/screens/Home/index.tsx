import React, { useEffect, useState } from "react";
import theme from "src/theme";
import { ButtonMealView, Container, HeaderMain, LogoView, MealsText, SectionListView } from "./style";
import { StatusBar, SectionList, View } from "react-native";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";
import { SectionListComponent } from "@components/SectionListComponent";
import { DateStamp } from "@components/SectionListComponent/style";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { getAllMeals } from "@storage/mealItem/getAllMeals";
import { EmptyListComponent } from "@components/EmptyListComponent";
import { format } from "date-fns";

interface MealDisplay {
    name: string;
    description: string;
    dietIn: boolean;
}

interface ObjectList {
    title: string;
    data: MealDisplay[];
}

export function Home() {

    const [mappedArrayDone, setMappedArrayDone] = useState<{ [index: string]: MealDisplay[] }[]>([]);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate("form");
    }
    //DATA TREATMENT
    async function fetchListData() {
        try {

            const mappedArrayToInsert: ObjectList[] = []; //será inserido no estado mappedArrayDone

            const allMeals = await getAllMeals(); //Retorna JSON completo
            const array = Object.entries(allMeals); //array resgatado de forma completa (precisa ser trabalhado)

            array.forEach((item) => {
                const newItem: ObjectList = {
                    title: item[0],
                    data: item[1].forEach((itemData) => {
                        const newItemData: MealDisplay = {
                            name: itemData
                            description
                        }


                    })
                }
                mappedArrayToInsert.push(newItem); //inserindo novo elemento na lista
            })

            console.log("Object.entries saida: " + array);



            console.log("VEIO AQUI");
        } catch (error) {
            console.log("ERROR IS: " + error);
        }

    }

    const DATA = [

        {
            title: '20.04.2023',
            data: [
                {
                    time: '22:00' as string,
                    description: 'Budss - Oni, etc' as string,
                    inDiet: true as boolean
                },
                {
                    time: '22:00',
                    description: 'Budsadsargty - Onios, etc',
                    inDiet: false as boolean
                },
                {
                    time: '22:00' as string,
                    description: 'Budsadsarger Supdfs, etc' as string,
                    inDiet: false as boolean
                },
            ]
        },
        {
            title: '20.04.2023',
            data: [
                {
                    time: '22:00 ' as string,
                    description: 'Budsadsr Ftty - Onio, etc' as string,
                    inDiet: true as boolean
                },
                {
                    time: '22:00' as string,
                    description: 'Bunios, etc' as string,
                    inDiet: true as boolean
                },
                {
                    time: '22:00' as string,
                    description: 'BudsadOnios, etc' as string,
                    inDiet: true as boolean
                },
            ]
        }
    ]

    //console.log("Ver estrutura DATA: " + DATA);
    //console.log("Ver estrutura mappedArray: " + mappedArray);

    useEffect(() => {
        fetchListData();
    }, []);

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
                    <PercentageCard mensagem="das refeições dentro da dieta" number="97,10%" CardType="GREEN" ButtonOn={true} sizeNumber={32} />
                </HeaderMain>
                <ButtonMealView>
                    <MealsText> Refeições</MealsText>
                    <Button mensagem="Nova refeição" buttonColor="BLACK" whatToDo={handleNewMeal} iconActive={true} Icone={Plus} />
                </ButtonMealView>
                <SectionListView>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item) => item.description}
                        renderItem={({ item }) => (
                            <SectionListComponent
                                time={item.time}
                                description={item.description}
                                inDiet={item.inDiet}
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

