import styled, { css } from "styled-components/native";

export type HeaderType = "GREEN" | "RED";

type Props = {
    viewType: HeaderType;
}

export const Container = styled.SafeAreaView<Props>`
    height: 200px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    background-color: ${({ theme, viewType }) => viewType === "GREEN" ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID};
`;


export const HeaderView = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
    max-height: 78px;
`;


export const TextPercentage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${theme.COLOR.GRAY_700};
        align-self: center;
    `};`;

export const TextMessage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLOR.GRAY_700}
    `};
    margin-top: 3px;
`;