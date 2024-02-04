import React from "react";
import { Container, HeaderType, BackButtonButton, BackButtonIcon, TitleView, TextTitle, FillerView } from "./style";
import { StatusBar } from "react-native";
import theme from "../../theme";


type Props = {
    headerTypeFlag?: HeaderType;
    title: string;
}

export function Header({ headerTypeFlag = "GRAY", title }: Props) {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={headerTypeFlag === "GREEN" ? theme.COLOR.GREEN_MID
                    : headerTypeFlag === "RED" ? theme.COLOR.RED_MID
                        : theme.COLOR.GRAY_400}
                translucent
            />
            <Container viewType={headerTypeFlag}>
                <TitleView>
                    <BackButtonButton>
                        <BackButtonIcon viewType={headerTypeFlag} />
                    </BackButtonButton>
                    <TextTitle>{title}</TextTitle>
                    <FillerView />
                </TitleView>
            </Container>
        </>
    )
}