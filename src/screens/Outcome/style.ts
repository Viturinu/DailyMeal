import styled, { css } from "styled-components/native";

export type Props = {
    type: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;
`;

export const ContainerView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const TextView = styled.View`
    width: 100%;
    height: 81px;
    align-items: center;
    justify-content: center;
`;

export const TitleText = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type ? theme.COLOR.GREEN_DARK : theme.COLOR.RED_DARK};
    `};
`;

export const DescriptionTextView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const DescriptionText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLOR.GRAY_700};
    `};
    text-align: center;
    margin-top: 4px;
`;

export const DescriptionBoldText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLOR.GRAY_700};
    `};
`;

export const ImageButtonView = styled.View`
    width: 224px;
`;

export const StatusImage = styled.Image`
    width: 224px;
    height: 288px;
    margin-top: 30px;
`;
