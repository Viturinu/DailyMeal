import React from "react";
import { Container, HeaderType, TextMessage, TextPercentage, BackButtonButton, BackButtonIcon, BackButtonView } from "./style";
import { StatusBar } from "react-native";
import theme from "src/theme";


type Props = {
    headerTypeFlag?: HeaderType;
    percentage: string;
    mensagem: string;
}

export function Header({ headerTypeFlag = "GREEN", percentage, mensagem }: Props) {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={headerTypeFlag === "GREEN" ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID}
                translucent
            />
            <Container viewType="GREEN">
                <BackButtonView>
                    <BackButtonButton>
                        <BackButtonIcon viewType="GREEN" />
                    </BackButtonButton>
                </BackButtonView>
                <TextPercentage>{percentage}</TextPercentage>
                <TextMessage>{mensagem}</TextMessage>
            </Container>
        </>
    )
}