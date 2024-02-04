import styled from "styled-components/native";

export type colorStyle = "WHITE" | "BLACK";

type Props = {
    buttonColor: colorStyle;
}

export const Container = styled.TouchableOpacity<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLOR.GRAY_600};
    background-color: ${({ theme, buttonColor }) => buttonColor === "BLACK" ? theme.COLOR.GRAY_600 : theme.COLOR.GRAY_100};
    margin-top: 8px;
`;

export const Mensagem = styled.Text<Props>`
    color: ${({ theme, buttonColor }) => buttonColor === "BLACK" ? theme.COLOR.GRAY_100 : theme.COLOR.GRAY_700};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-left: 6px;
`