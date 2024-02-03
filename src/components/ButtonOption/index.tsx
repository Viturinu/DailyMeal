import React from "react";
import { Ball, Container, Opcao, PropsType, PropsStyle } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = PropsType & PropsStyle & TouchableOpacityProps;

export function ButtonOption({ tipo, isActive, ...rest }: Props) {
    return (
        <Container tipo={tipo} isActive={isActive} {...rest}>
            <Ball tipo={tipo} />
            <Opcao>
                {
                    tipo === "SIM" ? "Sim" : "Não"
                }
            </Opcao>
        </Container>
    )
}
