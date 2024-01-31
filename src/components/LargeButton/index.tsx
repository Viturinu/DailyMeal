import React from "react";
import { Container, Mensagem, PlusIcon } from "./style";

type Props = {
    mensagem: string;
}

export function LargeButton({ mensagem }: Props) {
    return (
        <Container>
            <PlusIcon size={18} weight="light" />
            <Mensagem> {mensagem} </Mensagem>
        </Container>
    )
}
