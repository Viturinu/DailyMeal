import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const BodyStatistics = styled.View`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    bottom: 55px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
`;
export const TitleTextView = styled.View`
    align-items: center;
`;
export const TitleText = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    margin-top: 24px;
`;

export const BodyCards = styled.View`
    height: 309px;
    width: 327px;
    align-items: center;
    margin-top: 20px;
    padding-left: 12px;
    padding-right: 12px;
`;