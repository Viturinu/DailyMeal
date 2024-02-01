import React from "react";
import { Container, HeaderType, HeaderView, TextMessage, TextPercentage } from "./style";
import { StatusBar } from "react-native";
import theme from "src/theme";

type Props = {
    headerTypeFlag?: HeaderType;
    percentage: string;
    mensagem: string;
}

export function HeaderNavigation({ headerTypeFlag = "GREEN", percentage, mensagem }: Props) {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={headerTypeFlag === "GREEN" ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID}
                translucent
            />
            <Container viewType="GREEN">
                <TextPercentage>{percentage}</TextPercentage>
                <HeaderView>
                    <TextMessage>{mensagem}</TextMessage>
                </HeaderView>
            </Container>
        </>
    )
}