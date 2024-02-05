import React from "react";
import { Container, Mensagem, colorStyle } from "./style";
import { Icon, IconProps } from "phosphor-react-native";
import theme from "src/theme";

type Props = {
    mensagem: string;
    buttonColor: colorStyle;
    Icone?: Icon;
    iconActive?: boolean;
    whatToDo: () => void;
}

export function Button({ mensagem, buttonColor, whatToDo, iconActive = false, Icone }: Props) {
    return (
        <Container buttonColor={buttonColor} onPress={whatToDo}>
            {
                iconActive ? <Icone color={buttonColor === "BLACK" ? theme.COLOR.GRAY_100 : theme.COLOR.GRAY_700} size={18} weight="bold" />
                    : null
            }
            <Mensagem buttonColor={buttonColor}> {mensagem} </Mensagem>
        </Container>
    )
}
