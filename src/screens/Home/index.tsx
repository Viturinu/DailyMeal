import React from "react";
import theme from "src/theme";
import { ButtonMealView, Container, HeaderMain, LogoView, MealsText, SectionListView } from "./style";
import { StatusBar, SectionList, View } from "react-native";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";
import { SectionListComponent } from "@components/SectionListComponent";
import { DateStamp, inDietType } from "@components/SectionListComponent/style";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { getAllMeals } from "@storage/mealItem/getAllMeals";

export function Home() {

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate("form");
    }
    //DATA TREATMENT
    const allMeals = getAllMeals();

    const DATA = [

        {
            title: '20.04.2023',
            data: [
                {
                    time: '22:00' as string,
                    description: 'Budss - Oni, etc' as string,
                    inDiet: "GREEN" as inDietType
                },
                {
                    time: '22:00',
                    description: 'Budsadsargty - Onios, etc',
                    inDiet: 'RED' as inDietType
                },
                {
                    time: '22:00' as string,
                    description: 'Budsadsarger Supdfs, etc' as string,
                    inDiet: 'GREEN' as inDietType
                },
            ]
        },
        {
            title: '20.04.2023',
            data: [
                {
                    time: '22:00 ' as string,
                    description: 'Budsadsr Ftty - Onio, etc' as string,
                    inDiet: "GREEN" as inDietType
                },
                {
                    time: '22:00' as string,
                    description: 'Bunios, etc' as string,
                    inDiet: 'RED' as inDietType
                },
                {
                    time: '22:00' as string,
                    description: 'BudsadOnios, etc' as string,
                    inDiet: 'GREEN' as inDietType
                },
            ]
        }
    ]


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
                    />
                </SectionListView>


            </Container>
        </>
    )
}

