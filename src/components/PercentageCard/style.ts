import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';
import { View } from "react-native";

export type PercentageCardType = "GREEN" | "RED" | "GRAY";

type Props = {
    viewType: PercentageCardType;
}

type PropsText = {
    numberSizeDef: number
}

// View da porcentagem até o formulário
export const PercentageDisplay = styled.View<Props>`
    height: 102px;
    width: 100%;
    border-radius: 8px;
    background-color: ${({ viewType }) => (viewType === "GREEN" ? "black" : "white")};

`;

export const IconView = styled.TouchableOpacity`
    height: 24px;
    align-items: flex-end;
    padding: 2px;
`;

export const IconItem = styled(ArrowUpRight).attrs<Props>(({ theme, viewType }) => ({
    color: viewType === "GREEN" ? theme.COLOR.GREEN_DARK : theme.COLOR.RED_DARK,
    size: 24,
}))``;

export const CardView = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
    max-height: 78px;
`;

export const TextPercentageView = styled.View`
    height: 40px;
    align-items: center;
    border-width: 1px;
    border-color: black;
`;

export const TextPercentage = styled.Text<PropsText>`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLOR.GRAY_700};
        align-self: center;
    `};
        font-size: ${({ numberSizeDef }) => numberSizeDef}px;
    `;

export const TextMessage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLOR.GRAY_700}
    `};
    margin-top: 3px;
`;
