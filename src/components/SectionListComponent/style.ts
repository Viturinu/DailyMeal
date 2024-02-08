import styled, { css } from "styled-components/native";

export type Props = {
    Icon: boolean;
}

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 49px;
    padding: 12px;
    justify-content: space-between;
    border-radius: 6px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLOR.GRAY_300};
    margin-bottom: 8px;
    flex-direction: row;
    align-items: center;
`;

export const TimeDescriptionView = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    max-width: 70%;
`;

export const TimeView = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Time = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SeparatorView = styled.View`
    margin-left: 5px;
    margin-right: 5px;
`;

export const Separator = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLOR.GRAY_400};
        text-align: center;
    `};
`;

export const DescriptionView = styled.View`
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const IconView = styled.View<Props>`
    background-color: ${({ theme, Icon }) => Icon === true ? theme.COLOR.GREEN_MID : theme.COLOR.RED_MID}; 
    border-radius: 8px;
    height: 14px;
    width: 14px;
`;

export const DateStamp = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 6px;
`;