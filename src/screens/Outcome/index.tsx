import React from "react"
import { Container, ContainerView, DescriptionBoldText, DescriptionText, DescriptionTextView, ImageButtonView, StatusImage, TextView, TitleText } from "./style"
import Logo from "@assets/Successful.png"
import { Button } from "@components/Button"

export function Outcome() {
    return (
        <Container>
            <ContainerView>
                <TextView>
                    <TitleText> Continue assim!</TitleText>
                    <DescriptionTextView>
                        <DescriptionText>Você continua </DescriptionText>
                        <DescriptionBoldText>dentro da dieta. </DescriptionBoldText>
                        <DescriptionText>Muito bem!</DescriptionText>
                    </DescriptionTextView>
                </TextView>
                <ImageButtonView>
                    <StatusImage source={Logo} />
                    <Button mensagem="Ir para página inicial" />
                </ImageButtonView>
            </ContainerView>
        </Container>
    )
}