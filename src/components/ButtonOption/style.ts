import styled from "styled-components/native";
import { Plus } from "phosphor-react-native"

export type ButtonType = "SIM" | "NAO";

type Props = {
    tipo: ButtonType;
}

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_300};
    margin-top: 8px;
`;

export const Ball = styled.View<Props>`
    height: 8px;
    width: 8px;
    border-radius: 10px;
    background-color: ${({ tipo, theme }) => tipo === "SIM" ? theme.COLOR.GREEN_DARK : theme.COLOR.RED_DARK};
`;

export const Opcao = styled.Text`
    color: ${({ theme }) => theme.COLOR.GRAY_700};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    margin-left: 8px;
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    color: theme.COLOR.GRAY_100
}))``;