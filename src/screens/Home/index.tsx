import React from "react";
import theme from "src/theme";
import { ButtonMealView, Container, HeaderMain, LogoView, MealsText, SectionListView } from "./style";
import { StatusBar, SectionList, View } from "react-native";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";
import { LargeButton } from "@components/LargeButton";
import { SectionListComponent } from "@components/SectionListComponent";
import { DateStamp, inDietType } from "@components/SectionListComponent/style";

export function Home() {

    const DATA = [

        {
            title: '20.04.2023',
            data: [
                {
                    time: '22:00',
                    description: 'Budssaadsarger Super Ftty - Onio, etc',
                    inDiet: "GREEN" as inDietType
                },
                {
                    time: '22:00',
                    description: 'Budsadsarger Sfdsfr Fatty - Onios, etc',
                    inDiet: 'RED' as inDietType
                },
                {
                    time: '22:00',
                    description: 'Budsadsarger Supdfser Fty - Onios, etc',
                    inDiet: 'GREEN' as inDietType
                },
            ]
        },
        {
            title: '20.04.2023',
            data: [
                {
                    time: '22:00',
                    description: 'Budsadsdsdarger fdsSuper Ftty - Onio, etc',
                    inDiet: "GREEN" as inDietType
                },
                {
                    time: '22:00',
                    description: 'Budsadsarger dsfSrds Fdsdsatty - Onios, etc',
                    inDiet: 'RED' as inDietType
                },
                {
                    time: '22:00',
                    description: 'Budsadsargerdf Superdsadsad Ftasdsady - Onios, etc',
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
                    <PercentageCard mensagem="das refeições dentro da dieta" percentage="97,10%" PercentageType="GREEN" />
                </HeaderMain>
                <ButtonMealView>
                    <MealsText> Refeições</MealsText>
                    <LargeButton mensagem="Nova refeição" />
                </ButtonMealView>
                <SectionListView>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item) => item[1]}
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


                    />
                </SectionListView>


            </Container>
        </>
    )
}

