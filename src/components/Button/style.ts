import styled from "styled-components/native";
import { Plus } from "phosphor-react-native"

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_600};
    margin-top: 8px;
`;

export const Mensagem = styled.Text`
    color: ${({ theme }) => theme.COLOR.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    margin-left: 6px;
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    color: theme.COLOR.GRAY_100
}))``;