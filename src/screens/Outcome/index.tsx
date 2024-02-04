import React from "react"
import { Container, ContainerView, DescriptionBoldText, DescriptionText, DescriptionTextView, ImageButtonView, Props, StatusImage, TextView, TitleText } from "./style"
import LogoSuccessful from "@assets/Successful.png"
import LogoUnlucky from "@assets/Unlucky.png"
import { Button } from "@components/Button"

export function Outcome({ type }: Props) {
    return (
        <Container>
            {
                type ?

                    <ContainerView>
                        <TextView>
                            <TitleText type={type}> Continue assim!</TitleText>
                            <DescriptionTextView>
                                <DescriptionText>Você continua </DescriptionText>
                                <DescriptionBoldText>dentro da dieta. </DescriptionBoldText>
                                <DescriptionText>Muito bem!</DescriptionText>
                            </DescriptionTextView>
                        </TextView>
                        <ImageButtonView>
                            <StatusImage source={LogoSuccessful} />
                            <Button buttonColor="BLACK" mensagem="Ir para página inicial" />
                        </ImageButtonView>
                    </ContainerView>

                    : <ContainerView>
                        <TextView>
                            <TitleText type={type}> Que pena!</TitleText>
                            <DescriptionTextView>
                                <DescriptionText>Você <DescriptionBoldText>saiu da dieta </DescriptionBoldText>dessa vez, mas continue se esforçando e não desista!</DescriptionText>
                            </DescriptionTextView>
                        </TextView>
                        <ImageButtonView>
                            <StatusImage source={LogoUnlucky} />
                            <Button buttonColor="BLACK" mensagem="Ir para página inicial" />
                        </ImageButtonView>
                    </ContainerView>
            }
        </Container>
    )
}