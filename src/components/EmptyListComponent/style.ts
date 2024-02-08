import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin-top: 30%;
`;

export const EmptyText = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLOR.GRAY_700}
    `};
`;