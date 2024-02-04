import React from "react"
import { Container, MealContainerContent, MealContainerView, MealStatusView, MealTextDescription, MealTextTitle, MealTextView, TimeTextDetails, TimeTextTitle, TimeTextView } from "./style"
import { Header } from "@components/Header"
import { MealStatus } from "@components/MealStatus"
import { Button } from "@components/Button"
import { PencilSimpleLine, Trash } from "phosphor-react-native"

type Props = {
    dietIn: boolean;
    Title: string;
    Description: string;
    Time: string;
}

export function MealDetails({ dietIn, Title, Description, Time }: Props) {
    return (
        <Container>
            {
                dietIn ? <Header title="Refeição" headerTypeFlag="GREEN" />
                    : <Header title="Refeição" headerTypeFlag="RED" />
            }

            <MealContainerView>
                <MealContainerContent>
                    <MealTextView>
                        <MealTextTitle>{Title}</MealTextTitle>
                        <MealTextDescription>{Description}</MealTextDescription>
                    </MealTextView>

                    <TimeTextView>
                        <TimeTextTitle> Data e hora</TimeTextTitle>
                        <TimeTextDetails>{Time}</TimeTextDetails>
                    </TimeTextView>
                    <MealStatusView>
                        {
                            dietIn ? <MealStatus ballColor="GREEN" />
                                : <MealStatus ballColor="RED" />
                        }

                    </MealStatusView>
                </MealContainerContent>
                <Button buttonColor="BLACK" mensagem="Editar refeição" iconActive={true} Icone={PencilSimpleLine} />
                <Button buttonColor="WHITE" mensagem="Excluir refeição" iconActive={true} Icone={Trash} />
            </MealContainerView>
        </Container>
    )
}