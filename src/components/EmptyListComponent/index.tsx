import React from "react"
import { Container, EmptyText } from "./style"

export function EmptyListComponent() {
    return (
        <Container>
            <EmptyText> Não existem refeições cadastradas</EmptyText>
        </Container>
    )
}