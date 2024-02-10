import React from "react";
import { Container, HeaderType, TextMessage, TextPercentage, BackButtonButton, BackButtonIcon, BackButtonView } from "./style";
import { StatusBar } from "react-native";
import theme from "src/theme";
import { useNavigation } from "@react-navigation/native";


type Props = {
    headerTypeFlag?: HeaderType;
    percentage: string;
    mensagem: string;
}

export function HeaderHome({ headerTypeFlag = "GREEN", percentage, mensagem }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={headerTypeFlag === "GREEN" ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID}
                translucent
            />
            <Container viewType={headerTypeFlag === "GREEN" ? "GREEN" : "RED"}>
                <BackButtonView>
                    <BackButtonButton onPress={handleGoBack}>
                        <BackButtonIcon viewType="GREEN" />
                    </BackButtonButton>
                </BackButtonView>
                <TextPercentage>{percentage}</TextPercentage>
                <TextMessage>{mensagem}</TextMessage>
            </Container>
        </>
    )
}