import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export type HeaderType = "GREEN" | "RED" | "GRAY";

type Props = {
    viewType: HeaderType;
}

export const Container = styled.SafeAreaView<Props>`
    height: 100px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, viewType }) => viewType === "GREEN" ? theme.COLOR.GREEN_LIGHT
        : viewType === "RED" ? theme.COLOR.RED_LIGHT
            : theme.COLOR.GRAY_400};
`;

export const TitleView = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left:12px;
    padding-right: 12px;
`;
export const BackButtonButton = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
`;

export const BackButtonIcon = styled(ArrowLeft).attrs<Props>(({ theme, viewType }) => ({
    size: 24,
    color: viewType === "GREEN" ? theme.COLOR.GREEN_DARK
        : viewType === "RED" ? theme.COLOR.RED_DARK
            : theme.COLOR.GRAY_600
}))``;

export const FillerView = styled.View`
    height: 24px;
    width: 24px;
`;


export const TextTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLOR.GRAY_700};
    `};
`;