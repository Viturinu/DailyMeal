import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const MealContainerView = styled.View`
    flex: 1;
    border-radius: 20px;
    bottom: 15px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
    padding-left: 24px;
    padding-right: 24px;
`;

export const MealContainerContent = styled.View`
    flex: 1;
    margin-top: 30px;
`;

export const MealTextView = styled.View``;

export const MealTextTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `};
`;

export const MealTextDescription = styled.Text`
${({ theme }) => css`
        color: ${theme.COLOR.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
    margin-top: 5px;
`;

export const TimeTextView = styled.View`
    margin-top: 20px;
`;

export const TimeTextTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLOR.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
`;

export const TimeTextDetails = styled.Text`
${({ theme }) => css`
        color: ${theme.COLOR.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
    margin-top: 5px;
`;

export const MealStatusView = styled.View`
    margin-top: 18px;
`;