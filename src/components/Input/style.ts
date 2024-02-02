import styled from "styled-components/native";

export const Container = styled.TextInput`
    flex: 1;
    background-color: ${({ theme }) => theme.COLOR.GRAY_100};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLOR.GRAY_400};
    border-radius: 6px;
`;