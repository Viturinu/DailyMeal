import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
    padding-left: 24px;
    padding-right: 24px;
`;
