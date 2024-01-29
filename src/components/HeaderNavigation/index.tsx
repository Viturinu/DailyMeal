import React from "react";
import { Container } from "./style";
import { StatusBar } from "react-native";

type Props = {
    statusBarColor: string
}

export function Header({ statusBarColor }: Props) {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={statusBarColor}
                translucent
            />
            <Container>

            </Container>
        </>
    )
}