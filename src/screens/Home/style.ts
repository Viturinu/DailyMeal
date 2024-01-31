import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
    padding-left: 24px;
    padding-right: 24px;
`;

export const HeaderMain = styled.View`
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
    margin-top: 22px;
    width: 100%;

`;

export const ButtonMealView = styled.View`
    margin-top: 40px;
    height: 79px;
    width: 100%;
`;

export const MealsText = styled.Text`
   font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const LogoView = styled.View`
    height: 50px;
`;

export const SectionListView = styled.SafeAreaView`
    flex: 1;
    margin-top: 32px;
    border-color: black;
    border-width: 1px;
`;

