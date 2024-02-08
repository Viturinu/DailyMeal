import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Mensagem, colorStyle } from "./style";
import { Icon } from "phosphor-react-native";
import theme from "src/theme";

type Props = TouchableOpacityProps & {
    mensagem: string;
    buttonColor: colorStyle;
    Icone?: Icon;
    iconActive?: boolean;
    whatToDo: () => void;
}

export function Button({ mensagem, buttonColor, whatToDo, iconActive = false, Icone, ...rest }: Props) {
    return (
        <Container buttonColor={buttonColor} onPress={whatToDo} {...rest}>
            {
                iconActive ? <Icone color={buttonColor === "BLACK" ? theme.COLOR.GRAY_100 : theme.COLOR.GRAY_700} size={18} weight="bold" />
                    : null
            }
            <Mensagem buttonColor={buttonColor}> {mensagem} </Mensagem>
        </Container>
    )
}
