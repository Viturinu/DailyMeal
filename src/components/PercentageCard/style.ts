import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';
import { View } from "react-native";

export type PercentageCardType = "GREEN" | "RED";

type Props = {
    viewType: PercentageCardType;
}

// View da porcentagem até o formulário
export const PercentageDisplay = styled.View<Props>`
    height: 102px;
    width: 100%;
    margin-top: 33px;
    border-radius: 8px;
    background-color: ${({ theme, viewType }) => viewType === "GREEN" ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID};
    border-color: black;
    border-width: 1px;
`;

export const IconView = styled.View`
    height: 24px;
    align-items: flex-end;
    padding: 2px;
`;

export const IconItem = styled(ArrowUpRight).attrs<Props>(({ theme, viewType }) => ({
    color: viewType === "GREEN" ? theme.COLOR.GREEN_DARK : theme.COLOR.RED_DARK,
    size: 24,
}))``;

export const TextPercentageView = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
    max-height: 78px;
    

`;
export const TextPercentage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLOR.GRAY_700};
        flex: auto;
    `};`;

export const TextMessage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLOR.GRAY_700}
    `};
    margin-top: 4px;
`;
