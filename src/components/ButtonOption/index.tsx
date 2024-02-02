import React from "react";
import { Ball, ButtonType, Container, Opcao } from "./style";

type Props = {
    tipo: ButtonType;
}

export function ButtonOption({ tipo }: Props) {
    return (
        <Container>
            <Ball tipo={tipo} />
            <Opcao>
                {
                    tipo === "SIM" ? "Sim" : "Não"
                }
            </Opcao>
        </Container>
    )
}
