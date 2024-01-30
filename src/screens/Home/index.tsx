import React from "react";
import { ButtonMealView, Container, HeaderMain, LogoView } from "./style";
import { StatusBar } from "react-native";
import theme from "src/theme";
import { PercentageCard } from "@components/PercentageCard";
import { Logos } from "@components/Logos";

export function Home() {
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
                    <PercentageCard mensagem="Tkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk," percentage="97,10%" PercentageType="GREEN" />
                </HeaderMain>

            </Container>
        </>
    )
}

