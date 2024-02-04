import React from "react"
import { Ball, Container, MealStatusText, Props } from "./style"

export function MealStatus({ ballColor }: Props) {
    return (
        <Container>
            <Ball ballColor={ballColor} />
            <MealStatusText>
                {
                    ballColor === "GREEN" ? "dentro da dieta"
                        : "fora da dieta"
                }
            </MealStatusText>
        </Container>
    )
}