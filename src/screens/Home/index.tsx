import React from "react";
import theme from "src/theme";
import { ButtonMealView, Container, HeaderMain, LogoView, MealsText, SectionListView } from "./style";
import { StatusBar, SectionList, View } from "react-native";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";
import { LargeButton } from "@components/LargeButton";
import { SectionListComponent } from "@components/SectionListComponent";
import { DateStamp } from "@components/SectionListComponent/style";

export function Home() {

    const DATA = [
        {
            title: '20.04.2023',
            data: [
                [
                    '22:00',
                    'Budsadsarger Super Fatty - Onios, etc',
                    'GREEN'
                ],
                [
                    '22:00',
                    'Bdsdaurger Super Fatty - Onios, etc',
                    'GREEN'
                ],
                [
                    '22:00',
                    'Burgedsdr Super Fatty - Onios, etc',
                    'RED'
                ],
                [
                    '22:00',
                    'Burgsader Super Fatty - Onios, etc',
                    'GREEN'
                ],
            ]
        },
        {
            title: '21.04.2023',
            data: [
                [
                    '22:00',
                    'Burger Onios, etc',
                    'GREEN'
                ],
                [
                    '22:00',
                    'Onios, etc',
                    'GREEN'
                ],
                [
                    '22:00',
                    'Fattsy - Onios, etc',
                    'RED'
                ],
                [
                    '22:00',
                    'dFatty - Onios, esdtc',
                    'GREEN'
                ],
            ]
        },
        {
            title: '22.04.2023',
            data: [
                [
                    '22:00',
                    'Burger Superss Fatty - Onsdadios, etc',
                    'GREEN'
                ],
                [
                    '22:00',
                    'Burger Supersddd Fattsdy - Onios, etc',
                    'GREEN'
                ],
                [
                    '22:00',
                    'Burger Superfdsdd Fatty - Onios, etc',
                    'RED'
                ],
                [
                    '22:00',
                    'Burger Superdd Fatty - Onsdaios, etc',
                    'GREEN'
                ],
            ]
        },
    ];

    /*
    {
        title: '22.04.2023',
        data: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
    },
    {
        title: '22.04.2023',
        data: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
    },
    {
        dattitlee: '22.04.2023',
        data: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
    },
    {
        title: '22.04.2023',
        data: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
    }, */

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
                        keyExtractor={(item) => item[0] + item[1] + item[2]}
                        renderItem={({ item }) => (
                            <SectionListComponent
                                time={item[0]}
                                description={item[1]}
                                inDiet={"RED"}
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

