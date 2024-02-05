import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export type PercentageCardType = "GREEN" | "RED" | "GRAY";
export type SizeTypeDefinition = "LARGE" | "SHORT";

type Props = {
    viewType: PercentageCardType;
}
type PropsSizeTypeCard = {
    sizeType: SizeTypeDefinition;
}

type PropsText = {
    numberSizeDef: number
}

// View da porcentagem até o formulário
export const PercentageDisplay = styled.View<Props & PropsSizeTypeCard>`
    height: 102px;
    width: ${({ sizeType }) => sizeType === "LARGE" ? "100%" : "48%"};
    border-radius: 8px;
    background-color: ${({ viewType, theme }) => (
        viewType === "GREEN" ? theme.COLOR.GREEN_LIGHT
            : viewType === "RED" ? theme.COLOR.RED_LIGHT
                : theme.COLOR.GRAY_200)};
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
