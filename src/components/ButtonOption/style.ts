import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native"

type ButtonType = "SIM" | "NAO";

export type PropsType = {
    tipo: ButtonType;
}

export type PropsStyle = {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<PropsType & PropsStyle>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_300};
    margin-top: 8px;

    ${({ theme, isActive, tipo }) => (isActive && tipo === "SIM") && css`
        border: 1px solid ${theme.COLOR.GREEN_DARK};
        background-color: ${theme.COLOR.GREEN_LIGHT};
    `};

    ${({ theme, isActive, tipo }) => (isActive && tipo === "NAO") && css`
        border: 1px solid ${theme.COLOR.RED_DARK};
        background-color: ${theme.COLOR.RED_LIGHT};
    `};

`;

export const Ball = styled.View<PropsType>`
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