import React from "react";
import theme from "src/theme";
import { ButtonMealView, Container, HeaderMain, LogoView, MealsText, SectionListView } from "./style";
import { StatusBar, SectionList, View } from "react-native";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";
import { LargeButton } from "@components/LargeButton";

export function Home() {


    const DATA = [
        {
            date: '22.04.2023',
            properties: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
        },
        {
            date: '22.04.2023',
            properties: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
        },
        {
            date: '22.04.2023',
            properties: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
        },
        {
            date: '22.04.2023',
            properties: ['22:00', 'Burger Super Fatty - Onios, etc', 'GREEN'],
        },
    ];

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

                    />
                </SectionListView>


            </Container>
        </>
    )
}

