import React from "react";
import { Container, HeaderType, BackButtonButton, BackButtonIcon, TitleView, TextTitle, FillerView } from "./style";
import { StatusBar } from "react-native";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";


type Props = {
    headerTypeFlag?: HeaderType;
    title: string;
}

export function Header({ headerTypeFlag = "GRAY", title }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={headerTypeFlag === "GREEN" ? theme.COLOR.GREEN_LIGHT
                    : headerTypeFlag === "RED" ? theme.COLOR.RED_LIGHT
                        : theme.COLOR.GRAY_400}
                translucent
            />
            <Container viewType={headerTypeFlag}>
                <TitleView>
                    <BackButtonButton onPress={handleGoBack}>
                        <BackButtonIcon viewType={headerTypeFlag} />
                    </BackButtonButton>
                    <TextTitle>{title}</TextTitle>
                    <FillerView />
                </TitleView>
            </Container>
        </>
    )
}