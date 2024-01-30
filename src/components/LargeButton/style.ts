import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 50px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLOR.GRAY_200};
    border-width: 1px;
    border-color: black;
`;

export const Mensagem = styled.Text`
    text-align: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLOR.GRAY_100};
`