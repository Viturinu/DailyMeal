import styled, { css } from "styled-components/native";

type Props = {
    textPercentage: string;
    textMessage: string;
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
    height: 238px;
    width: 100%;
`;
export const LogosView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 6px;
`;
export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;
export const Profile = styled.Image`
    width: 40px;
    height: 40px;
`;

export const PercentageDisplay = styled.View`
    background-color: ${({ theme }) => theme.COLOR.RED_MID};
    height: 102px;
    width: 100%;
    margin-top: 33px;
    border-radius: 8px;
`;
export const IconView = styled.View`
    flex: 1;
    align-items: center;
`;

export const IconViewItem = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLOR.GRAY_700}
    `};
`;


export const TextPercentageView = styled.View`
    flex: 1;
    align-items: center;
`;

export const TextPercentage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
        color: ${theme.COLOR.GRAY_700}
    `};
`;

export const TextMessageView = styled.View`
    flex: 1;
    align-items: center;

`;

export const TextMessage = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLOR.GRAY_700}
    `};
    margin-top: 4px;
`;
