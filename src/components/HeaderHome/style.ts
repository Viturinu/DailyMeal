import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

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

export const BackButtonView = styled.View`
    width: 100%;
    flex-direction: row;
    padding-left:12px;
`;
export const BackButtonButton = styled.TouchableOpacity``;

export const BackButtonIcon = styled(ArrowLeft).attrs<Props>(({ theme, viewType }) => ({
    size: 24,
    color: viewType === "GREEN" ? theme.COLOR.GREEN_DARK : theme.COLOR.RED_DARK
}))``;

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