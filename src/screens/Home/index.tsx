import React from "react";
import { Container } from "./style";
import { StatusBar } from "react-native";
import theme from "src/theme";
import { HeaderMain } from "@components/HeaderMain";
import { PercentageDisplay } from "@components/PercentageDisplay";

export function Home() {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={theme.COLOR.GRAY_100}
                translucent
            />
            <Container>
                <HeaderMain>

                </HeaderMain>
            </Container>
        </>
    )
}

