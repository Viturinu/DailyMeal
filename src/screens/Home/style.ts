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
    height: 238px;
    width: 100%;
`;

export const ButtonMealView = styled.View`
    margin-top: 40px;
    height: 79px;
    width: 100%;
`;

export const LogoView = styled.View`
    height: 50px;
`;

