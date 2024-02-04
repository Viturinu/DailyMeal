import React from "react"
import { Container, MealContainerContent, MealContainerView, MealTextDescription, MealTextTitle, MealTextView, TimeTextDetails, TimeTextTitle, TimeTextView } from "./style"
import { Header } from "@components/Header"

export function MealDetails() {
    return (
        <Container>
            <Header title="Refeição" headerTypeFlag="GREEN" />
            <MealContainerView>
                <MealContainerContent>
                    <MealTextView>
                        <MealTextTitle>Sanduíche</MealTextTitle>
                        <MealTextDescription>Sanduíche de pão integral com atum e salada de alface e tomate</MealTextDescription>
                    </MealTextView>

                    <TimeTextView>
                        <TimeTextTitle> Data e hora</TimeTextTitle>
                        <TimeTextDetails>12/08/2022 às 16:00</TimeTextDetails>
                    </TimeTextView>
                </MealContainerContent>
            </MealContainerView>
        </Container>
    )
}