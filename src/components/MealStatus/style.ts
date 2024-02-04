import styled, { css } from "styled-components/native";

type ballColorType = "GREEN" | "RED";

export type Props = {
    ballColor: ballColorType;
}

export const Container = styled.View`
    width: 144px;
    height: 34px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_200};
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    flex-direction: row;
`;

export const Ball = styled.View<Props>`
    height: 8px;
    width: 8px;
    border-radius: 10px;
    background-color: ${({ theme, ballColor }) => ballColor == "GREEN" ? theme.COLOR.GREEN_DARK : theme.COLOR.RED_DARK};
`;

export const MealStatusText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLOR.GRAY_700};
    `};
    margin-left: 6px;
`;